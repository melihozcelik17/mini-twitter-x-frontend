package comminitwitter.minitwitter.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@Entity
@Table(name = "tweet" , schema = "mini_twitter")
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "content")
    private String content;
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Member member;
    @ManyToOne
    @JoinColumn(name = "tweet_id")
    private Tweet tweet;
}
