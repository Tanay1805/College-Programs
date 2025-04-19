interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat implements Animal {
    public void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal; // Interface reference

        myAnimal = new Dog();
        myAnimal.sound(); // Output: Dog barks

        myAnimal = new Cat();
        myAnimal.sound(); // Output: Cat meows
    }
}
