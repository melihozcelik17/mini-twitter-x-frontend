// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ReactSVG } from 'react-svg'
import Footer from './Footer'

function SingUp() {
    return (
        <div>

            <div>
                <ReactSVG classNameName='items-starts m-2' src='/logo/twitter-logo-4 1.svg' />
            </div>

            <div>
                <h1>Happening now</h1>
                <h1>Join Twitter today</h1>
            </div>
            <div>
                {/* <!-- google --> */}
                <button
                    type="button"

                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                    <ReactSVG src='/logo/google-icon 1.svg' />
                    <p>Sign up with Google</p>
                </button>

                {/* <!-- Apple --> */}
                <button

                    type="button"

                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">

                    <ReactSVG src='/logo/logo-apple 1.svg' />
                    <p>Sign up with Apple</p>
                </button>

                <button

                    type="button"

                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">


                    <p>Sign up with phone or email</p>
                </button>
                <div>
                    <p>By singing up you agree to the <a href='#'>Terms of Service</a> and <a href='#'> Privacy Policy</a>, including<a href='#'> Cookie Use</a>.</p>
                </div>
                <p>Already have an account?<a href='/Login'>Log in</a>

                </p>
            </div>
            <Footer className="" />



        </div>
    )
}

export default SingUp