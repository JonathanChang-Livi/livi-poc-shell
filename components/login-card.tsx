import Link from "next/link"

const login = async () => {
    

    await fetch("/api/login", {
        method: "POST"
    });
    window.location.reload()
}

const LoginCard = () => {
    return (
        <div className="w-full flex border border-slate-100 shadow-lg rounded-lg h-[500px] p-10 bg-white bg-opacity-95">
            <div className="w-full h-full flex flex-col justify-between items-start">
                <p className="text-primary font-black text-4xl">Welcome to livi Business Internet Banking</p>
                <div className="my-1 w-full max-w-md ">
                    <input placeholder="Username" className="w-full rounded-lg p-4 border border-primary text-primary" type={"text"}></input>
                    <p className="text-sm mt-1">{'Forget your username? Call our customer service hotline on (852) XXXX-XXXX.'}</p>
                </div>
                <div className="my-1 w-full max-w-md ">
                    <input placeholder="Password" className="w-full rounded-lg p-4 border border-primary text-primary" type={"password"}></input>
                    <p className="text-sm mt-1">{'Forget your password? '}<Link href={'#'} className="text-blue-700 hover:underline hover:font-bold">{'Learn how to set up/ reset a password >'}</Link></p>
                </div>
                <button className="rounded-lg bg-primary text-secondary p-4 min-w-[200px]" onClick={login}>Log In</button>
            </div>
        </div>
    )
}

export default LoginCard