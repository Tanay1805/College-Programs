import java.util.*;


public class q10 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("banana");
        list.add("orange");
        list.add("apple");
        System.out.println("After adding the elements the list looks like:"+list);

        ArrayList<String> newlist = new ArrayList<>();
        newlist.add("strawberry");
        newlist.add("mango");
        newlist.add("pineapple");

        list.addAll(newlist);
        System.out.println("After the addistion of the new items the list looks like"+newlist);

        list.remove("mango");
        System.out.println("The new updated list is"+list);

        list.clear();
        System.out.println("The list is empty which is been displayed"+list);
    }
}
