package comminitwitter.minitwitter.entity;


import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "tweet" , schema = "mini_twitter")

public class Tweet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "content")
    private String content;

    @Column(name = "like_count")
    private int likeCount;

    @Column(name = "retweet_count")
    private int retweetCount;

    @Column(name = "reply_count")
    private int replyCount;

    @Column(name = "create_date")
    private LocalDateTime createDate;


    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name="member_id")
    private Member member;

}
