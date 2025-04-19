class Type{
    public  String publicvariable = "Tanay";
    private String privatevariable = "Sahajwalla";
    protected String proectedvariable ="ITM";
    String defautVar = "who cares";
}
public class TypeSpecifier {
 public static void main(String[] args) {
    Type tp = new Type();
    System.out.println(tp.publicvariable);
    System.out.println(tp.proectedvariable);
    System.out.println(tp.defautVar);
 }   
}
