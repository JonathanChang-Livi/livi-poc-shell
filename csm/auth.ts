import dynamic from 'next/dynamic';

//@ts-ignore
export const { authState } = dynamic(() => import('csm/authState'), { ssr: false })

//@ts-ignore
// export const { setAuthState }: { setAuthState: (value: string) => void} = dynamic(() => import('csm/setAuthState'), { ssr: false })