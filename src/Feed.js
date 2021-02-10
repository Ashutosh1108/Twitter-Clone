import React, { useEffect, useState } from 'react'
import "./Feed.css";
import Post from './Post';
import TweetBox from './TweetBox';
import db from "./Firebase"
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);

    // db.collection means go to database and grab the collection ('posts') and .snapshot(snapshot => means whenever data changes take a snapshot and give to (setPosts)
    // then
    //setPosts snapshot.docs.map means take that snapshot and map the data according to the doc.data

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);


    return (
        <div className="feed">
            <div className="feed__header">
                <h1>Home</h1>
            </div>    
            <TweetBox/>

            <FlipMove>
            {posts.map(post =>(

                <Post 
                key={post.text}
                displayName={post.displayName} 
                username={post.username} 
                verified={post.verified} 
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />

            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
