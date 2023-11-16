package comminitwitter.minitwitter.until;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;


@Data
@Component
public class RsaKeyProperties {
    private RSAPublicKey publicKey;
    private RSAPrivateKey privateKey;

    public RsaKeyProperties(){
        KeyPair keyPair = KeyGeneratorUtility.generateRsakey();
        this.publicKey = (RSAPublicKey) keyPair.getPublic();
        this.privateKey = (RSAPrivateKey) keyPair.getPrivate();
    }
}
