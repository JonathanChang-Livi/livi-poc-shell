import dynamic from "next/dynamic";

//@ts-ignore
export const RemoteDashboard = dynamic(() => import('dashboard/demo'), { ssr: false })