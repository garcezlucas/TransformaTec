public class NamesArray {
    
    public static void main(String[] args) {
        
        String[] names = {"Lucas","Jose", "Paulo"};

        for (String name : names) {
            System.out.println(name);
        }

        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }
    }

}
