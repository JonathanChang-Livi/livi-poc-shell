import { GetServerSideProps, NextPage } from "next"
import LoginCard from "../components/login-card"
import { withSessionSsr } from "../lib/with-session"

const Login: NextPage = () => {
    return (
        <div className="h-screen p-20 flex flex-row justify-start items-center bg-gradient-to-br from-white via-secondary to-primary">
            <div className="w-1/2">
                <LoginCard />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = withSessionSsr(
    async function getServerSideProps({req}) {
        if (req.session.token !== undefined) {
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
)

export default Login