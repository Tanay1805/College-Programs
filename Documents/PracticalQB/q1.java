import java.util.Scanner;

class q1{
    public static void main(String[] args) {
        System.out.println("Enter the number to check if odd or even:");
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        sc.close();

        if(input % 2 == 0){
            System.out.println("The number is an even number");
        }
        else{
            System.out.println("The number is an odd number");
        }
    }
}