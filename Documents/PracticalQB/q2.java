import java.util.Scanner;

public class q2 {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        System.out.println("Enter Number 1");
        int num1 = sc.nextInt();
        System.out.println("Enter Number 2");
        int num2 = sc.nextInt();
        System.out.println("Enter Number 3");
        int num3 = sc.nextInt();
        sc.close();
        
        if(num1>num2 && num1>num3){
            System.out.println("Num 1 is greater than the two numbers");
        }
        else if (num2>num1 && num2>num3){
            System.out.println("Num 2 is greater than the two numbers");
        }
        else{
            System.out.println("Num 3 is greater than the two numbers");
        }
    }
    
}
