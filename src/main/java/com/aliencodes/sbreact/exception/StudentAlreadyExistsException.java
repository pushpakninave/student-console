package com.aliencodes.sbreact.exception;

public class StudentAlreadyExistsException extends RuntimeException{
    
    public StudentAlreadyExistsException(String message){
        super(message);
    }
}
