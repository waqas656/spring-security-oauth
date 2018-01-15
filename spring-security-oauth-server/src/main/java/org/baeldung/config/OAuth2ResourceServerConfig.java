package org.baeldung.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.context.annotation.Profile;

@EnableResourceServer
@Configuration
@Profile("mvc")
//this is the resource server for the Testing OAuth2 with Spring MVC article:
//http://www.baeldung.com/oauth-api-testing-with-spring-mvc 
//can only be accessed using the mvc profile 
public class OAuth2ResourceServerConfig extends ResourceServerConfigurerAdapter {
    @Override
    public void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests().antMatchers("/employee").hasRole("ADMIN");

    }

}
