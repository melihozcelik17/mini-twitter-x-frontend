package comminitwitter.minitwitter.repository;


import comminitwitter.minitwitter.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account , Integer> {
}
