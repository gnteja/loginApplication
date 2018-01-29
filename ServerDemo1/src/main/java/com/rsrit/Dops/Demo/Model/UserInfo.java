package com.rsrit.Dops.Demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String username;
	private String email;
	private String password;
	
	public UserInfo() {
		super();
		
	}
	
	public UserInfo(String username, String password) {
		
		this.username = username;
		this.password = password;
	}
	

	public UserInfo(String username, String email, String password) {

		this.username = username;
		this.email = email;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "UserInfo [username=" + username + ", email=" + email + ", password=" + password + "]";
	}

}
