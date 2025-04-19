public class q9 {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");

        sb.append(" World");
        System.out.println("After append the text looks like:"+sb);

        sb.insert(6, "Beautiful ");
        System.out.println("After insert function:"+ sb);

        sb.replace(6, 15, "Amazing");
        System.out.println("After replacement: "+sb);

        sb.delete(6, 14);
        System.out.println("The string after deletion: "+sb);

        sb.reverse();
        System.out.println("The reverse of the string is: "+sb);
    }
}
