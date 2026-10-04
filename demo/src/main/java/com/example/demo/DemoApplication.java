package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@SpringBootApplication
@RestController
public class DemoApplication {
    public static void main(String[] args) {
      SpringApplication.run(DemoApplication.class, args);
    }
	@GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "John Doe") String name, 
						@RequestParam(value = "age", defaultValue = "30") String age) {
		System.out.println(name + " " + age);
		return name + " " + age;
    }

	@GetMapping("/helloJson")
    public String helloJson(@RequestParam(value = "name", defaultValue = "Max Verstappen") String name, 
							@RequestParam(value = "age", defaultValue = "28") String age) {
		System.out.println("{\"name\":\"" + name + " Doyle\"}");
		String result = "{\"name\":\"" + name + " Doyle\"";
		result += ",\"age\":\"" + age + "\"";
		result += "}";
		System.out.println(result);
		return result;
    }
}