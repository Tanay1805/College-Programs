class A{
    A(){
    System.out.println("Hey this is Tanay");
    }
}
class B extends A{
    B(){
        System.out.println("I study in ITM Skills University");
    }
}
class C extends B{
    C(){
        System.out.println("I am currently doing engineering in BTech CSE");
    }
}

public class q7 {
   public static void main(String[] args) {
    C obj = new C();
   } 
}
