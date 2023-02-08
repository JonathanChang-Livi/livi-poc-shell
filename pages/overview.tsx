import { GetServerSideProps, NextPage } from "next"
import { RemoteDashboard } from "../components/dashboard"

const Dashboard: NextPage = () => {
    return (
        <RemoteDashboard />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const authState = ctx.req.cookies['auth-token']
    if (!authState) {
        return {
            redirect: {
                destination: '/login',
                permanent: true
            }
        }
    }
    return {
        props: {
            current: 'overview',
            authState
        }
    }
}

export default Dashboard