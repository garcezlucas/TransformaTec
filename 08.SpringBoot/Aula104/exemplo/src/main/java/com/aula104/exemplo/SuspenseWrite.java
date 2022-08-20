package com.aula104.exemplo;

import org.springframework.stereotype.Service;

@Service
public class SuspenseWrite implements IWriter {
    
    @Override
    public void write(String s) {

        System.out.println("Historia de Suspense: " + s);
    }

}
    

