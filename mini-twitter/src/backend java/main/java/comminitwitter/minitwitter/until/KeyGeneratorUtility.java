package comminitwitter.minitwitter.until;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

public class KeyGeneratorUtility {

    public static KeyPair generateRsakey(){
        KeyPair keyPair;
        try{
            KeyPairGenerator keyPairGenerator=KeyPairGenerator.getInstance("RSA");
            KeyPairGenerator.initialize(2048);
            keyPair = KeyPairGenerator.generateKeyPair();
        }catch (Exception ex) {
            ex.printStackTrace();
            throw  new IllegalStateException();
        }
        return keyPair;
    }

}
