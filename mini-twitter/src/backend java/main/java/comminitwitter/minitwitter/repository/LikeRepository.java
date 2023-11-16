package comminitwitter.minitwitter.repository;

import comminitwitter.minitwitter.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like , Integer> {
    @Query("SELECT l FROM Like l WHERE l.tweet_id=:tweet_id")
    List<Like> findByTweetId(int tweet_id);
}
