// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function Footer() {
    const footerNav = [
        {
            name: "About",
        },
        {
            name: "Help Center",
        },
        {
            name: "Terms of Service",
        },
        {
            name: "Privacy Policy",
        },
        {
            name: "Cookie Policy",
        },
        {
            name: "Ads info",
        },
        {
            name: "Blog",
        },
        {
            name: "Status",
        },
        {
            name: "Carrres",
        },
        {
            name: "Brand Resources",
        },
        {
            name: "Advertsing",
        },
        {
            name: "Marketing",
        },
        {
            name: "Twitter for Business",
        },
        {
            name: "Developers",
        },
        {
            name: "Directory",
        },
        {
            name: "Settings",
        },
        {
            name: "© 2021 Twitter, Inc.",
        },


    ]

    function Item(props) {
        // eslint-disable-next-line react/prop-types
        const { name } = props
        return (
            <div className="">
                <a href='#'>{name}</a>
            </div>
        )
    }


    return (
        <footer className='flex gap-2 hover:to-blue-500'>
            {footerNav.map((item) => {
                return <Item name={item.name} key={item.name} />

            })}


        </footer>
    )
}

export default Footer