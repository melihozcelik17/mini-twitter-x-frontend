package comminitwitter.minitwitter.service;

import comminitwitter.minitwitter.entity.Tweet;

import java.util.List;
import java.util.Optional;

public interface TweetService {
    List<Tweet> findAll();
    Tweet findById(int id);

    Optional<Tweet> getById(int id);
    Tweet save(Tweet tweet);
    void delete (Tweet tweet);
}
