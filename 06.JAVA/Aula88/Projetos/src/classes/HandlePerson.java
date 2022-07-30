package classes;

public class HandlePerson {
    
    static Person person = new Person("Lucas", 27,"Dev");

    public static void main(String[] args) {

        //Testando getters
        System.out.println(person.getName());
        System.out.println(person.profession);

        //Testando setters
        person.setProfession("Oceanographer");

        System.out.println(person.getProfession());

        


    }

}
