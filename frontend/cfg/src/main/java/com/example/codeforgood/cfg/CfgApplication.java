package com.example.codeforgood.cfg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

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


	@PostMapping("/addNewUserAndSurveyData")
	public String addNewUserAndSurveyData(@RequestBody ResponseFormat responseFormat) {

		Users user = new Users(responseFormat.user_id, responseFormat.age, responseFormat.gender, responseFormat.lat, responseFormat.lng, responseFormat.user_result);
		QuizResultId quizResultId = new QuizResultId(responseFormat.quiz_id, responseFormat.user_id, responseFormat.time);
		QuizResults quizResults = new QuizResults(quizResultId, responseFormat.user_result);

		userService.addUser(user);
		quizResultService.save(quizResults);
		return "success";
	}

	@PostMapping("/addNewUser")
	public String addNewUser(@RequestBody Users user) {


		userService.addUser(user);
      return "success";
	}

	@RequestMapping("/resultService/updateMetrics")
	public String updateMetrics() {


	//update the  user entry with new metrics
		return "updated user metrics";

	}


	@RequestMapping("/user/getAllMetricsFromAUser")
	public Iterable<Users> getAllUserData() {

		return userService.findAll();

	}

}
