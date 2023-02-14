import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-white h-screen">
                <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ height: '600px' }}>
                    <div class="w-full max-w-md space-y-8">
                        <div className="flex justify-center">
                            <div className="py-8">
                                <img style={{ height: "250px" }} src="https://img.freepik.com/free-vector/letter-e-logo-icon-colorfuell_125964-396.jpg?w=2000" />
                            </div>
                        </div>
                        <form style={{ zIndex: '80000', position: 'relative', top: '-100px' }} class="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div class="-space-y-px rounded-md shadow-sm">
                                <div className="my-2">
                                    <label for="email-address" class="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" autocomplete="email" required class="bg-white autofill:bg-slate-800 relative block w-full appearance-none border border-slate-700 px-3 py-2 text-slate-800 placeholder-gray-600 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div className="my-2">
                                    <label for="password" class="sr-only">Password</label>
                                    <input id="password" name="password" type="password" autocomplete="current-password" required class="bg-white autofill:bg-slate-800 relative block w-full appearance-none border border-slate-700 px-3 py-2 text-slate-800 placeholder-gray-600 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button onClick={() => navigate('/dashboard')} type="button" class="group relative flex w-40 justify-center rounded-md border border-transparent bg-blue-800 py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none">
                                    Sign in
                                </button>
                            </div>
                            <div class="text-sm text-center">
                                <a href="#" class="font-medium text-slate-800 hover:text-slate-900">Forgot your password?</a>
                            </div>
                            <div class="text-sm text-center">
                                Don't have an account ?
                                <a href="#" class="font-medium text-blue-700 hover:text-slate-900 mx-2">sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;