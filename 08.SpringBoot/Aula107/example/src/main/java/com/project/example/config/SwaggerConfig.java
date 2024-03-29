package com.project.example.config;

import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
    
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.project.example"))
                .build().useDefaultResponseMessages(false).apiInfo(apiInfo());

    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("API DE ORDENS")
                .description("Um exemplo de API documentada")
                .version("1.0.0")
                .license("Apache License Version 2.0")
                .contact(new Contact("Lucas", "lucas-dev.com", "lucas@dev.com"))
                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0")
                .build();
    }
}
