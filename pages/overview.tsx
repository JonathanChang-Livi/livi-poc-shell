import { GetServerSideProps, NextPage } from "next"
import { RemoteDashboard } from "../components/dashboard"
import { withSessionSsr } from "../lib/with-session"

const Dashboard: NextPage = () => {
    return (
        <RemoteDashboard />
    )
}


export const getServerSideProps: GetServerSideProps = withSessionSsr(
    async function getServerSideProps({req}) {
        if (req.session.token === undefined) {
            return {
                redirect: {
                    destination: "/login",
                    permanent: true,
                },
            }
        }
        return {
            props: {
                current: 'overview',
                authState: true
            }
        }
    }
)

export default Dashboard