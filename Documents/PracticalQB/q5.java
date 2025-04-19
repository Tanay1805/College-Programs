import java.util.*;

class Square {

    private double Side;


    public Square() {
        this.Side = 1.0;  
    }

    public Square(double radius) {
        this.Side = radius;
    }
    public double getSide() {
        return this.Side;
    }
    public double calculateArea() {
        return Side*Side;
    }
}

class q5{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("The side of the square is:");
        double radius = sc.nextDouble();
        Square sq = new Square(radius);
        System.out.println("The radius of the Square is: "+sq.getSide());
        System.out.println("The area of the Square is: "+sq.calculateArea());
    }
}