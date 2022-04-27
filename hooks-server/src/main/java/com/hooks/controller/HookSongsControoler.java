package com.hooks.controller;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.support.BasicAuthorizationInterceptor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.hooks.config.HttpHeaderInterceptor;

@RestController
@RequestMapping(value = "api/hooks/song")
public class HookSongsControoler {
	@Value("${qc.hooks.host.url}")
	private String URI;
	@Value("${qc.hooks.login.username}")
	private String username;
	@Value("${qc.hooks.login.password}")
	private String password;

	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping(value = "/music/play/{audioId}", method = RequestMethod.GET)
	public ResponseEntity<Object> playMusic(@PathVariable String audioId) throws ServiceException {
		Object music = play(audioId);
		return new ResponseEntity<>(music, HttpStatus.OK);
	}

	public Object play(String audioId) {
		String userId = login();
		try {
			restTemplate.getInterceptors().add(new HttpHeaderInterceptor("UserID", userId));
			ResponseEntity<Object> response = restTemplate.getForEntity(URI + "/api/audio/play/" + audioId,
					Object.class);
			logout();
			return response.getBody();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String link(String audioId) {
		String userId = login();
		try {
			restTemplate.getInterceptors().add(new HttpHeaderInterceptor("UserID", userId));
			ResponseEntity<String> response = restTemplate.getForEntity(URI + "/api/audio/link/" + audioId,
					String.class);
			logout();
			return response.getBody();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userId;
	}

	/**
	 * Authenticating to Hooks Unlimited API with Basic Autentication. Credentials
	 * are managed on application environment properties.
	 * 
	 * @return
	 * @throws ServiceException
	 */
	private String login() {
		String authToken = null;
		try {
			restTemplate.getInterceptors().add(new BasicAuthorizationInterceptor(username, password));
			ResponseEntity<String> response = restTemplate.getForEntity(URI + "/api/websecurity/login", String.class);
			JsonElement parse = new JsonParser().parse(response.getBody());
			authToken = parse.getAsJsonObject().get("UserID").getAsString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return authToken;
	}

	private void logout() {
		restTemplate.getForEntity(URI + "/api/websecurity/logout", String.class);
	}
}
