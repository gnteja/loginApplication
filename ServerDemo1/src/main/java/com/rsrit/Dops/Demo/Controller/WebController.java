package com.rsrit.Dops.Demo.Controller;
import com.rsrit.Dops.Demo.Model.*;
import com.rsrit.Dops.Demo.Repo.UserRepo;
import com.rsrit.Dops.Demo.Service.UserService;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WebController {
	
	@Autowired
	private UserRepo repo;
	
	@Autowired 
	private UserService userService;
	

	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public UserInfo loginVerification(@RequestBody UserInfo user) {
		return userService.loginValidation(user);
	}
	
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String userRegistration(@RequestBody UserInfo user) {
		return userService.registerValidation(user);
		
	}

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String sayHello() {
		return "Hello from the server ";
	}

	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/dashboard/admin", method = RequestMethod.GET)
	public List<UserInfo> userGetAll(){
		List<UserInfo> userList = new ArrayList<>();
		Iterable <UserInfo> user = repo.findAll();
		user.forEach(userList::add);
		System.out.println("userlist printed ");
		return userList;
	}
}
