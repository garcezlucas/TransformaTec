package com.aula114.example;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {

    public static void main(String[] args){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String undencodedPassword = "password123";
        String encodedPassword = encoder.encode(undencodedPassword);
    System.out.println("-----------------------------"); 
    System.out.println("\nSENHA CRIPTOGRAFADA:" + encodedPassword + " ");
    System.out.println("-----------------------------");
}
    
}
