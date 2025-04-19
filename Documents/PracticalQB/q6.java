import java.util.*;

class Rectangle{
    private double length;
    private double breadth;

    public Rectangle(){
        this.length = 1.0;
        this.breadth = 1.0;
    }
    public Rectangle(double length,double breadth){
        this.length = length;
        this.breadth = breadth;
    }
    public double getlength(){
        return this.length;
    }
    public double getbreadth(){
        return this.breadth;
    }
    public double calculateArea(){
        return length*breadth;
    }
}
public class q6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of the Rectangle:");
        double length = sc.nextDouble();
        System.out.println("Enter the breadth of the Rectangle is:");
        double breadth = sc.nextDouble();

        Rectangle rc = new Rectangle(length,breadth);
        System.out.println("The length of the rectangle is: " + rc.getlength());
        System.out.println("The breadth of the triangle is: "+ rc.getbreadth());
        System.out.println("The Area of the triangle is: "+rc.calculateArea());
    }
}
