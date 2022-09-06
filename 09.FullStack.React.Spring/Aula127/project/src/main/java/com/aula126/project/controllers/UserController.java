package com.aula126.project.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aula126.project.models.ERole;
import com.aula126.project.models.Role;
import com.aula126.project.models.User;
import com.aula126.project.payload.request.LoginRequest;
import com.aula126.project.payload.request.SignupRequest;
import com.aula126.project.payload.response.MessageResponse;
import com.aula126.project.payload.response.UserInfoResponse;
import com.aula126.project.repositories.RoleRepository;
import com.aula126.project.repositories.UserRepository;
import com.aula126.project.security.jwt.JwtUtils;
import com.aula126.project.security.services.UserDetailsImpl;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api/auth")
//localhost:8080/api/...

public class UserController{
    
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    // LOGIN DO USUÁRIO

    //localhost:8080/api/auth/signin
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                        loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(new UserInfoResponse(
                        userDetails.getId(),
                        userDetails.getUsername(),
                        userDetails.getEmail(),
                        roles));
    }

    //CRIAÇÃO DE USUÁRIO

    //localhost:8080/api/auth/users - POST
    @PostMapping("/users")
    //Documentação do Swagger
    @ApiResponses({
        @ApiResponse(code = 200, message = "OK"),
        @ApiResponse(code = 201, message = "OK"),
        @ApiResponse(code = 500, message = "Internal Server Error")
    })
    @ApiOperation(value = "Criando novo usuário", consumes = "application/json", produces = "application/json")

    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erro: Usuário já existe"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Erro: Este email já foi registrado"));
        }

        // Criando uma nova conta de usuário
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();

        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Erro: Role não encontrada"));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {

                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Erro: Role não encontrada"));
                        roles.add(adminRole);
                        break;

                    case "premium":
                        Role premiumRole = roleRepository.findByName(ERole.ROLE_PREMIUM)
                                .orElseThrow(() -> new RuntimeException("Erro: Role não encontrada"));
                        roles.add(premiumRole);
                        break;

                    case "user":
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Erro: Role não encontrada"));
                        roles.add(userRole);
                        break;
                    default:
                        throw new RuntimeException("Erro: Role não encontrada");
                }
            });
        }

        user.setRoles(roles);

        // salvando no banco
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Usuário registrado com sucesso"));
    }

    // SAIR DO USUÁRIO

    //localhost:8080/api/auth/signout
    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(new MessageResponse("Sessão encerrada"));
    }

    // BUSCA DE USUÁRIO

    // BUSCA POR NOME
    @GetMapping("/users")
    //localhost:8080/api/users/?username=wagner - GET
    @ApiResponses({
        @ApiResponse(code = 200, message = "OK"),
        @ApiResponse(code = 500, message = "Internal Server Error")
    })
    @ApiOperation(value = "Buscando usuários por nome", produces = "application/json")
    public ResponseEntity<Optional<User>> findByName(@RequestParam String username){

        Optional<User> _users = userRepository.findByUsername(username);

        if(_users.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<Optional<User>>(_users, HttpStatus.OK);

    }

    // BUSCA POR ID
    @GetMapping("users/{id}")
    //localhost:8080/api/users/1 - GET

    @ApiResponses({
        @ApiResponse(code = 200, message = "OK"),
        @ApiResponse(code = 500, message = "Internal Server Error")
    })
    @ApiOperation(value = "Buscando um usuário por id", produces = "application/json")
    public ResponseEntity<User> getById(@PathVariable("id") long id){

        User _user = userRepository.findById(id);

        if (_user == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);   
        }

        return new ResponseEntity<User>(_user, HttpStatus.OK);

    }


}
