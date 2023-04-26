package com.example.backend.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins ="*")
public class RouteController implements ErrorController {
    @RequestMapping("/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
    @Override
    public String getErrorPath(){
        return "/";
    }
}
