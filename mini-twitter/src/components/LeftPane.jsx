// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ReactSVG } from 'react-svg'

const LINKS = [
    {
        title: "Home",
        img: "/logo/home-outline.svg"
    },
    {
        title: "Explore",
        img: "/logo/explore.svg"
    },
    {
        title: "Notifications",
        img: "/logo/Vector.svg"
    },
    {
        title: "Messages",
        img: "/logo/messages.svg"
    },
    {
        title: "Bookmarks",
        img: "/logo/bookmarks.svg"
    },
    {
        title: "Lists",
        img: "/logo/lists.svg"
    },
    {
        title: "Profile",
        img: "/logo/profile fill.svg"
    },
    {
        title: "More",
        img: "/logo/more.svg"
    },
]


function Item(props) {
    // eslint-disable-next-line react/prop-types
    const { title, img } = props
    return (
        <button className='flex flex-row hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg px-2 w-4/6 py-2 items-center  gap-4 align-center content-center '>
            <ReactSVG className='w-[24px] h-[24px]' src={img} />
            <span>{title}</span>

        </button>
    )
}

function LeftPane() {
    return (
        <main className='fixed h-screen top-0'>
            <div className='ml-[4vw] flex flex-col w-[20vw] mr-[3vw]'>
                <ReactSVG className=' py-4 mb-4 ' src='/logo/twitter-logo-4 1.svg' />

                <div className='flex flex-col items-start  gap-2 rounded-md text-sm'>

                    {LINKS.map((item) => {
                        return <Item title={item.title} img={item.img} key={item.title} />
                    })}

                    <button className="w-2/3 py-3 mt-2 hover:bg-blue-700 transition duration-300 ease-in-out bg-blue-500 rounded-full  text-white" >Tweet</button>
                    <div className='absolute bottom-10 flex  flex-row gap-4 justify-center items-center align-center'>
                        <img src='/img/Ellipse 3.png' />
                        <div className="flex flex-col gap-1">

                            <h1>Bobur</h1>
                            <p>@bobur_mavlonov</p>
                        </div>
                        <ReactSVG src='/logo/moreicon.svg' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LeftPane;