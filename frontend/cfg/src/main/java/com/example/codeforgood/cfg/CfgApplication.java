package com.example.codeforgood.cfg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@ComponentScan("com.example")
@EntityScan
@EnableJpaRepositories
@CrossOrigin(origins = {"*"})
public class CfgApplication {


	public static void main(String[] args) {
		SpringApplication.run(CfgApplication.class, args);
	}
	int user_id=1;
	int quiz_id=1;
	@Autowired
	private UserService userService;
	@Autowired
	private QuizService quizService;
	@Autowired
	private QuizResultRepo quizResultService;


	@PostMapping("/addNewUserAndSurveyData")
	public String addNewUserAndSurveyData(@RequestBody ResponseFormat responseFormat) {

		try {
			Users user = new Users(user_id, responseFormat.age, responseFormat.gender, responseFormat.lat, responseFormat.lng, responseFormat.user_result);
			Quizes quiz = new Quizes(quiz_id, user_id);
			QuizResultId quizResultId = new QuizResultId(quiz_id, user_id, responseFormat.time);
			QuizResults quizResults = new QuizResults(quizResultId, responseFormat.user_result);


			userService.addUser(user);
			quizService.addQuizEntity(quiz);
			quizResultService.save(quizResults);
		}catch(Exception e){


		}
		System.out.println(responseFormat.user_id + " " + responseFormat.quiz_id);
		System.out.println("done");
		user_id++;
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
