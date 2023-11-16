package comminitwitter.minitwitter.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@Entity
@Table(name = "role", schema = "mini_twitter")
public class Retweet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Member member;
    @ManyToOne
    @JoinColumn(name = "tweet_id")
    private Tweet tweet;
}
