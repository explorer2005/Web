class Rectangle{
    constructor(length,  breadth,  paint){
        this.length=length;
        this.breadth=breadth;
        this.paint=paint;
    }

    area(){
        console.log(this.length*this.breadth);
        // const area=this.length * this.breadth;
        // return area;
    }

    ispaint(){
       console.log("The paint is"+this.paint);
     }
}
const rect=new Rectangle(14,15,"red");

console.log(rect.area());
console.log(rect.ispaint());

