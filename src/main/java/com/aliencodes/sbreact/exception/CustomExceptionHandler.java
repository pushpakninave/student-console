package com.aliencodes.sbreact.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleException(MethodArgumentNotValidException e) {
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult()
                .getFieldErrors()
                .forEach(
                        error -> errors.put(error.getField(), error.getDefaultMessage()));
        return errors;
    }


    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(StudentNotFoundException.class)
    public Map<String, String> handleStudentNotFoundException(StudentNotFoundException e){
        Map<String, String> errors = new HashMap<>();
        errors.put("error", e.getMessage());
        return errors;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(StudentAlreadyExistsException.class)
    public Map<String, String> handleStudentExistsException(StudentAlreadyExistsException e){
        Map<String, String> errors = new HashMap<>();
        errors.put("error", e.getMessage());
        return errors;
    }
}
