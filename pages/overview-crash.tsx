import { GetServerSideProps, NextPage } from "next"
import { CrashedDashboard } from "../components/dashboard"
import ErrorBoundary from "../components/error-boundary"
import { withSessionSsr } from "../lib/with-session"

const Dashboard: NextPage = () => {
    return (
        <ErrorBoundary>
            <CrashedDashboard />
        </ErrorBoundary>
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
                current: 'overview-crash',
                authState: true
            }
        }
    }
)

export default Dashboard