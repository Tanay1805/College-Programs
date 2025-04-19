import java.util.Scanner;

class Circle {

    private double radius;


    public Circle() {
        this.radius = 1.0;  
    }

    public Circle(double radius) {
        this.radius = radius;
    }

   
    public double getRadius() {
        return this.radius;
    }


    public double calculateArea() {
        return Math.PI * radius * radius;
    }

 
    public double calculateCircumference() {
        return 2 * Math.PI * radius;
    }
}

public class q4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the radius to calculate the area and circumference of the circle:");
        double radius = sc.nextDouble();

        Circle circle1 = new Circle(radius);

        // Output the results
        System.out.println("The radius of the circle is: " + circle1.getRadius());
        System.out.println("The area of the circle is: " + circle1.calculateArea());
        System.out.println("The circumference of the circle is: " + circle1.calculateCircumference());
    }
}
