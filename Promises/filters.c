// Complete C Implementation of Data Structures from the Research Paper
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define BLOOM_SIZE 10000 // Size for the Bloom filters
#define HASH_COUNT 3      // Number of hash functions
#define MAX_NAME_LEN 256
#define PREFIX_TABLE_SIZE 1000000

// Data Structures for NameFilter
unsigned char stage1_bloom[BLOOM_SIZE];
unsigned char *stage2_bloom;
int *counting_bloom;

// Hash functions
unsigned int hash1(const char *str) {
    unsigned int hash = 0;
    while (*str) {
        hash = (hash * 31) + *str++;
    }
    return hash % BLOOM_SIZE;
}

unsigned int hash2(const char *str) {
    unsigned int hash = 0;
    while (*str) {
        hash = (hash * 37) + *str++;
    }
    return hash % BLOOM_SIZE;
}

unsigned int hash3(const char *str) {
    unsigned int hash = 0;
    while (*str) {
        hash = (hash * 41) + *str++;
    }
    return hash % BLOOM_SIZE;
}

// One Memory Access Bloom Filter (for Stage 1)
void bloom_insert(unsigned char *bloom, const char *key) {
    bloom[hash1(key)] = 1;
    bloom[hash2(key)] = 1;
    bloom[hash3(key)] = 1;
}

bool bloom_query(unsigned char *bloom, const char *key) {
    return bloom[hash1(key)] && bloom[hash2(key)] && bloom[hash3(key)];
}

// Merged Bloom Filter (for Stage 2)
void merged_bloom_insert(unsigned char *merged_bloom, int port, const char *key, int num_ports) {
    unsigned int h1 = hash1(key), h2 = hash2(key), h3 = hash3(key);
    merged_bloom[h1 * num_ports + port] = 1;
    merged_bloom[h2 * num_ports + port] = 1;
    merged_bloom[h3 * num_ports + port] = 1;
}

bool merged_bloom_query(unsigned char *merged_bloom, int num_ports, const char *key) {
    unsigned int h1 = hash1(key), h2 = hash2(key), h3 = hash3(key);
    for (int port = 0; port < num_ports; port++) {
        if (merged_bloom[h1 * num_ports + port] &&
            merged_bloom[h2 * num_ports + port] &&
            merged_bloom[h3 * num_ports + port]) {
            return true;
        }
    }
    return false;
}

// Counting Bloom Filter for Updates
void counting_bloom_insert(int *counting_bloom, const char *key) {
    counting_bloom[hash1(key)]++;
    counting_bloom[hash2(key)]++;
    counting_bloom[hash3(key)]++;
}

void counting_bloom_delete(int *counting_bloom, const char *key) {
    counting_bloom[hash1(key)]--;
    counting_bloom[hash2(key)]--;
    counting_bloom[hash3(key)]--;
}

bool counting_bloom_query(int *counting_bloom, const char *key) {
    return counting_bloom[hash1(key)] > 0 &&
           counting_bloom[hash2(key)] > 0 &&
           counting_bloom[hash3(key)] > 0;
}

int main() {
    // Initialize stage 2 bloom filter
    int num_ports = 4; // Example number of ports
    stage2_bloom = (unsigned char *)calloc(BLOOM_SIZE * num_ports, sizeof(unsigned char));
    counting_bloom = (int *)calloc(BLOOM_SIZE, sizeof(int));

    // Example prefixes for testing
    char *prefix_stage1[] = {"com", "org", "net"};
    char *prefix_stage2[] = {"com/google", "org/unicef", "net/reddit", "com/amazon"};

    // Insert prefixes into stage 1 Bloom filter
    for (int i = 0; i < 3; i++) {
        bloom_insert(stage1_bloom, prefix_stage1[i]);
    }

    // Insert prefixes into stage 2 Merged Bloom filter
    for (int i = 0; i < 4; i++) {
        merged_bloom_insert(stage2_bloom, i, prefix_stage2[i], num_ports);
    }

    // Insert prefixes into Counting Bloom filter
    for (int i = 0; i < 4; i++) {
        counting_bloom_insert(counting_bloom, prefix_stage2[i]);
    }

    // Query example
    char query[MAX_NAME_LEN];
    printf("Enter a name to lookup: ");
    scanf("%s", query);

    if (bloom_query(stage1_bloom, query)) {
        printf("Prefix found in stage 1. Querying stage 2...\n");
        if (merged_bloom_query(stage2_bloom, num_ports, query)) {
            printf("Exact match found in stage 2.\n");
        } else {
            printf("No match found in stage 2.\n");
        }
    } else {
        printf("No match found in stage 1.\n");
    }

    // Example deletion
    counting_bloom_delete(counting_bloom, "com/google");

    // Query again after deletion
    if (counting_bloom_query(counting_bloom, "com/google")) {
        printf("com/google still exists after deletion.\n");
    } else {
        printf("com/google successfully deleted.\n");
    }

    // Free allocated memory
    free(stage2_bloom);
    free(counting_bloom);

    return 0;
}