package com.example.codeforgood.cfg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@SpringBootApplication
@RestController
@ComponentScan("com.example")
@EntityScan
@EnableJpaRepositories
public class CfgApplication {

	public static void main(String[] args) {
		SpringApplication.run(CfgApplication.class, args);
	}

	@Autowired
	private UserService userService;
	@Autowired
	private QuizService quizService;
	@Autowired
	private QuizResultRepo quizResultService;

	@RequestMapping("/user/addNewUser")
	public String addNewUser(UserEntity userEntity) {


		userService.addUser(userEntity);
		return "added user";

	}

	@RequestMapping("/resultService/updateMetrics")
	public String updateMetrics() {


	//update the  user entry with new metrics
		return "updated user metrics";

	}



	@RequestMapping("/user/getAllMetricsFromAUser")
	public Iterable<UserEntity> getAllUserData() {

		return userService.findAll();

	}

}
