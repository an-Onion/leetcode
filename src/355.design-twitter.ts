/*
 * @lc app=leetcode id=355 lang=typescript
 *
 * [355] Design Twitter
 */

// @lc code=start
export class Twitter {
    users: Map<number, User>;
    timestamp: number;
    constructor() {
      this.timestamp = 0;
      this.users = new Map<number, User>();
    }

    postTweet(userId: number, tweetId: number): void {
      const user = this.getUser(userId);
      user.post(tweetId, this.timestamp++);
    }

    getNewsFeed(userId: number): number[] {
      const user = this.getUser(userId);
      let feeds = user.tweets;
      user.followee.forEach((u) => {
        feeds = feeds.concat(u.tweets);
      });
      return feeds.sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10)
      .map((feed) => feed.tweetId);
    }

    follow(followerId: number, followeeId: number): void {
      const follower = this.getUser(followerId);
      const followee = this.getUser(followeeId);
      follower.follow(followee);
    }

    unfollow(followerId: number, followeeId: number): void {
      const follower = this.getUser(followerId);
      const followee = this.getUser(followeeId);
      follower.unfollow(followee);
    }

    getUser(userId: number): User{
      if( !this.users.has(userId)){
        this.users.set(userId, new User(userId));
      }
      return this.users.get(userId);
    }
}

interface Tweet {
  tweetId: number;
  timestamp: number;
}

class User {

  userId: number;
  tweets: Tweet[];
  followee: Set<User>;

  constructor(userId: number){
    this.userId = userId;
    this.tweets = [];
    this.followee = new Set<User>();
  }

  post(tweetId: number, timestamp: number){
    this.tweets.push({ tweetId, timestamp });
  }

  follow(followee: User){
    this.followee.add(followee);
  }

  unfollow(followee: User){
    this.followee.delete(followee);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

