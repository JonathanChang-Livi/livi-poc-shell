import dynamic from "next/dynamic";

//@ts-ignore
export const RemoteDashboard = dynamic(() => import('dashboard/demo'), { ssr: false })
//@ts-ignore
export const CrashedDashboard = dynamic(() => import('dashboardCrash/demo'), { ssr: false })