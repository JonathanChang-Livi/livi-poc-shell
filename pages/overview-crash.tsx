import { GetServerSideProps, NextPage } from "next"
import { CrashedDashboard } from "../components/dashboard"
import ErrorBoundary from "../components/error-boundary"

const Dashboard: NextPage = () => {
    return (
        <ErrorBoundary>
            <CrashedDashboard />
        </ErrorBoundary>
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
            current: 'overview-crash',
            authState
        }
    }
}

export default Dashboard