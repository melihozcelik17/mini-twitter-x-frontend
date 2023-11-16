package comminitwitter.minitwitter.service;

import comminitwitter.minitwitter.dto.LoginResponse;
import comminitwitter.minitwitter.entity.Member;
import comminitwitter.minitwitter.entity.Role;
import comminitwitter.minitwitter.repository.MemberRepository;
import comminitwitter.minitwitter.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthenticationService {

    private MemberRepository memberRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private TokenService tokenService;


    @Autowired
    public AuthenticationService(MemberRepository memberRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, TokenService tokenService) {
        this.memberRepository = memberRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    public Member register(String email, String password){

        Optional<Member> foundMember = memberRepository.findMemberByEmail(email);
        if(foundMember.isPresent()){
            //throw exception
            return null;
        }

        String encodedPassword = passwordEncoder.encode(password);
        Role memberRole = roleRepository.findByAuthority("USER").get();
        Set<Role> roles = new HashSet<>();
        roles.add(memberRole);

        Member member = new Member();
        member.setEmail(email);
        member.setPassword(encodedPassword);
        member.setAuthorities(roles);
        return memberRepository.save(member);
    }

    public LoginResponse login(String email , String password){

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email,password));

            String token = tokenService.generateJwtToken(auth);
return new LoginResponse(token);
        }catch (Exception ex){
            return new LoginResponse("");
        }


    }


}