package comminitwitter.minitwitter.service;

import comminitwitter.minitwitter.entity.Tweet;
import comminitwitter.minitwitter.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TweetServiceImpl implements TweetService {
@Autowired
    private TweetRepository tweetRepository;
    @Override
    public List<Tweet> findAll() {
        return null;
    }

    @Override
    public Tweet findById(int id) {
        return null;
    }

    @Override
    public Optional<Tweet> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Tweet save(Tweet tweet) {
        return null;
    }

    @Override
    public void delete(Tweet tweet) {

    }
}
