import { GetServerSideProps, NextPage } from "next"
import { RemoteDashboard } from "../components/dashboard"

const Dashboard: NextPage = () => {
    return (
        <RemoteDashboard />
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            current: 'overview'
        }
    }
}

export default Dashboard