import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react'
import db from './Firebase';
import './TweetBox.css';

function TweetBox() {
  // its is tracking the value of (input field)
    const [tweetMessage, setTweetMessage] = useState('');


    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "ashu",
            username: "_ash11",
            verified: true,
            text:tweetMessage,
            image: tweetImage,
            avatar: "https://images.unsplash.com/photo-1515902966800-95fac3b01698?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzB8fG1vdG9yYmlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        })
        setTweetMessage('');
        setTweetImage('');
    };


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu-c93nLZK-Z7S9fPYtCjo9MGFGlOHyQ0fqBRtsbhA=s83-c-mo"
                    />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text"
                    />
                    
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URl" 
                type="text"
                />
                <Button 
                className="tweetBox__tweetButton"
                type="submit"
                onClick={sendTweet}
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
