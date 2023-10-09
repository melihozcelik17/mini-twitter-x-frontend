// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ReactSVG } from 'react-svg'

function Login() {
    return (
        <div className="flex  h-screen w-screen items-center  justify-center">
            <div className='flex w-[400px] flex-col gap-4'>


                <ReactSVG className='' src='/logo/twitter-logo-4 1.svg' />
                <h1 className='text-3xl font-bold'>Login to Twitter</h1>
                <div>


                    <div className=" relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                            id="exampleFormControlInput2"
                            placeholder="Phone number, email address" />
                        <label
                            path="exampleFormControlInput2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                        </label>
                    </div>
                    <div className=" relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                            id="exampleFormControlInput22"
                            placeholder="Password" />
                        <label
                            path="exampleFormControlInput22"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                        </label>
                    </div>

                </div>
                <button
                    type="button"
                    className=" rounded-full bg-blue-500 px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                >
                    Login
                </button>
                <div className="flex text-blue-400 gap-2 mb-[0.125rem] w-full justify-between min-h-[1.5rem] ">
                    <a href="#!">Forgot password?</a>
                    <a href="'SingUpForm'">Sign up to Twitter</a>
                </div>
            </div>




        </div>
    )
}

export default Login;
