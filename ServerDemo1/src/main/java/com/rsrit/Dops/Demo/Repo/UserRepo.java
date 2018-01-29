package com.rsrit.Dops.Demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rsrit.Dops.Demo.Model.UserInfo;

public interface UserRepo extends JpaRepository <UserInfo, Integer> {
	
	UserInfo findByUsername(String username);
	
}
