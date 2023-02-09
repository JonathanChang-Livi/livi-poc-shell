import { GetServerSideProps, NextPage } from "next"
import LoginCard from "../components/login-card"

const Login: NextPage = () => {
    return (
        <div className="h-screen p-20 flex flex-row justify-start items-center bg-gradient-to-br from-white via-secondary to-primary">
            <div className="w-1/2">
                <LoginCard />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let authState = ctx.req.cookies['auth-token']
    if (authState) {
        return {
            redirect: {
                destination: "/overview",
                permanent: false,
            },
        }
    }
    return {
        props: {
        }
    }
}

export default Login