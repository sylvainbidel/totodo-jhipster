package com.thebibilab.todo.cucumber.stepdefs;

import com.thebibilab.todo.TodoApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = TodoApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
