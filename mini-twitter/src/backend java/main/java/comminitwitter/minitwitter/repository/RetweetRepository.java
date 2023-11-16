package comminitwitter.minitwitter.repository;

import comminitwitter.minitwitter.entity.Retweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RetweetRepository extends JpaRepository<Retweet, Integer> {
    @Query("SELECT t from Retweet t where t.tweet.id=:tweet_id")
    List<Retweet> findByTweetId(int tweet_id);
}
