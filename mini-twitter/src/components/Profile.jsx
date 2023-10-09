/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as tweetsData from "./tweetsData.json"
import TweetCard from "./TweetCard"
import { ReactSVG } from 'react-svg';
import LeftPane from './LeftPane';

function Profile(props) {
    // const [tweetData, setTweetData] = useState(null);
    const { tweet } = props

    useEffect(() => {
        // JSON verisini fetch ile alıp, state'e atayalım
        fetch("tweetsData.json")
        console.log(fetch)

        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error("HTTP error " + response.status);

        //             }
        //             return response.json();
        //         })
        //         .then(data => {
        //             setTweetData(data);
        //         })
        //         .catch(error => {
        //             console.error("Error fetching data:", error);
        //         });
    }, []);

    // tweetData yüklenene kadar bekle
    if (!tweetsData) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <LeftPane />
            <div className='flex flex-col items-center text-start'>
                <ReactSVG className='' src='/logo/Arrow 1.svg' />
                <h1>profile name</h1>
                <p className="">tweet sayısı Tweets</p>
            </div>
            <img src='Rectangle 13.png' href="#" />
            <img src='Ellipse 4.png'></img>
            <button>Edit profile</button>
            <div className='flex gap-2'>
                <h1>name</h1>
                <p className='text-gray-500 ' >@{tweet?.username}</p>
                <p>UX&UI designer at <span href='#' className='text-blue-500' >@abutechuz</span></p>
                <div>
                    <ReactSVG className='' src='/logo/Frame (3).svg' />
                    <p>Mashag’daman</p>
                    <ReactSVG src='/logo/Frame (2).svg' />
                    <span href='#' className='text-blue-500'>t.me/boburjon_mavlonov</span>
                    <ReactSVG className='' src='/logo/Frame (4).svg' />
                    <p>Born November 24, 2000</p>
                    <ReactSVG className='' src='/logo/Frame (5).svg' />
                    <p>Joined May 2020</p>
                </div>
                <div>
                    <p>67 Following
                        47 Followers</p>
                </div>
                <div>
                    <p>
                        Tweets
                    </p>
                    <p>
                        Tweets & replies
                    </p>
                    <p>
                        Media
                    </p>
                    <p>
                        Likes
                    </p>

                </div>

            </div>

            <div className='flex items-center mx-4 align-center justify-center w-full '>

                <div className='flex flex-col gap-4   '>

                    {/* Tweet verilerini burada kullanabilirsiniz */}
                    {tweetsData.data.map(tweet => (
                        <TweetCard key={tweet.id} tweet={tweet} />


                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
