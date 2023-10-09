/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ReactSVG } from 'react-svg'

export default function TweetCard(props) {
    // eslint-disable-next-line react/prop-types
    const { tweet } = props



    return (
        <main className='w-4/5 border-b-2 py-1.5'>
            <div className='flex gap-4 '>
                <img className='w-[48px] h-[48px]' src='/img/Ellipse 3.png' />
                <section className='flex flex-col'>

                    <div className="flex flex-row gap-2 items-center">
                        <h2 className='font-bold text-lg'>Maya</h2>
                        <p className='text-gray-500'>@{tweet?.username}</p>
                        <p className='text-gray-500'>Aug 1</p>
                    </div>
                    <div>
                        <ReactSVG className="flex flex-col items-end" src='/logo/moreicon.svg' />

                    </div>
                    <p className='w-full py-0.5'>{tweet?.content}</p>
                    <div className='flex py-2.5 flex-row gap-24'>

                        <div className='flex gap-1.5 items-center'>
                            <ReactSVG className='' src='/logo/comment.svg' />
                            <span>{tweet.replies.length > 0 && tweet.replies.length}</span>
                        </div>
                        <div className='flex gap-1.5 items-center'>

                            <ReactSVG className='hover:stroke-green-400' src='/logo/retweet.svg' />
                            <span className='text-sm'>{tweet.retweets}</span>
                        </div>
                        <div className='flex gap-1.5  items-center'>
                            <ReactSVG className=' stroke-gray-500 hover:fill-red-400 fill-none border-0   hover:stroke-red-400' src='/logo/like.svg' />
                            <span className='text-sm'>{tweet.likes}</span>
                        </div>
                        <ReactSVG className='' src='/logo/bookmarks.svg' />

                        <ReactSVG className='' src='/logo/statistics.svg' />

                    </div>
                </section>
            </div>

        </main>
    )
}
