package com.baeldung.resource.spring;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.security.web.session.SessionManagementFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	CorsFilter corsFilter() {
	    CorsFilter filter = new CorsFilter();
	    return filter;
	}

    @Override
    protected void configure(HttpSecurity http) throws Exception {// @formatter:off
     
		((HttpSecurity) 
		  ((ExpressionUrlAuthorizationConfigurer<?>.AuthorizedUrl) 
			http.headers()
			      .addHeaderWriter(new StaticHeadersWriter("Access-Control-Allow-Origin", "http://localhost:8085/, http://localhost:8086/")).and()
			    .addFilterBefore(corsFilter(), SessionManagementFilter.class).csrf().disable().authorizeRequests()
				  .antMatchers(HttpMethod.OPTIONS, "/**")
				    .permitAll()
		          .antMatchers(HttpMethod.GET, "/user/info", "/api/foos/**")
		 	        .hasAuthority("SCOPE_read")
				  .antMatchers(HttpMethod.POST, "/api/foos")
				    .hasAuthority("SCOPE_write")
				  .anyRequest())
				    .authenticated()
				.and())
				  .oauth2ResourceServer()
					.jwt();

    }   
    
  //@formatter:on 
    
}