import { deleteCookie, getCookie, setCookie } from "cookies-next"
import Router from "next/router"
// import { setAuthState } from "../csm/auth"

const login = () => {
    setCookie('auth-token', 'sss')
    window.location.reload()
}

const LoginCard = () => {
    return (
        <div className="w-full flex border border-slate-100 shadow-lg rounded-lg h-[500px] ">
            <div className=" p-5 w-full h-full flex flex-col justify-between ">
                <p className="text-primary font-bold text-3xl">Welcome to livi Business Internet Banking</p>
                <div className="my-3">
                    <input placeholder="Username" className="rounded-lg p-4 border border-primary text-primary" type={"text"}></input>
                    <p className="text-xs">{'Forget your username? Call our customer service hotline on (852) XXXX-XXXX.'}</p>
                </div>
                <div className="my-3">
                    <input placeholder="Password" className="rounded-lg p-4 border border-primary text-primary" type={"password"}></input>
                    <p className="text-xs">{'Forget your password? '}<a>{'Learn how to set up/ reset a password >'}</a></p>
                </div>
                <button className="rounded-lg bg-primary text-secondary p-4 min-w-[100px]" onClick={login}>Log In</button>
            </div>
        </div>
    )
}

export default LoginCard