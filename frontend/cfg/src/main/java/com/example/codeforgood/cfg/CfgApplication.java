package com.example.codeforgood.cfg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@SpringBootApplication
@RestController
public class CfgApplication {

	public static void main(String[] args) {
		SpringApplication.run(CfgApplication.class, args);
	}

	@RequestMapping("/addNewUser")
	public String addNewUser() {


		return "add new user";

	}

	@RequestMapping("/updateMetrics")
	public String updateMetrics() {


		return "update metrics";

	}

	@RequestMapping("/getOverallMetricForAUser")
	public String overallMetrics() {


		return "overall metric";

	}

	@RequestMapping("/getAllMetricsFromAUser")
	public String getAllMetrics() {


		return "all metrics for user";

	}

}
