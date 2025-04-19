class Animal{
    Animal(){
    System.out.println("Hey this is my dog");
    }
}
class Dog extends Animal{
   Dog(){
    super();
    System.out.println("Hey this is pluto");
   }
}

public class invokingSuper {
    public static void main(String[] args) {
        Dog dg = new Dog();
    }
}
