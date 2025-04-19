import java.util.HashSet;
import java.util.Iterator;

public class q11 {
    public static void main(String[] args) {
        // Creating a HashSet
        HashSet<String> hashSet = new HashSet<>();

        // 1. Adding elements to the HashSet
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Orange");
        hashSet.add("Mango");
        System.out.println("HashSet after adding elements: " + hashSet);

        System.out.println("Number of elements in the HashSet: " + hashSet.size());

        System.out.println("Iterating through all elements in the HashSet:");
        for (String item : hashSet) {
            System.out.println(item);
        }
    
        System.out.println("Using Iterator to iterate through the HashSet:");
        Iterator<String> iterator = hashSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // 4. Remove the specified element from the HashSet
        System.out.println("Removing 'Banana' from the HashSet.");
        hashSet.remove("Banana");
        System.out.println("HashSet after removing 'Banana': " + hashSet);
    }
}
