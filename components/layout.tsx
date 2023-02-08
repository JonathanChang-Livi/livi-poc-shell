import React from "react"
import Container from "./container"
import HeaderBar from "./header"
import NavBar from "./navbar"

interface LayoutProps {
    children: React.ReactNode
    current: string
    authState: string | undefined
}

const Layout = ({ children, current, authState }: LayoutProps) => {
    if(!authState){
        return (
            <>
            {children}
            </>
        )
    }
    
    return (
        <Container>
            <HeaderBar />
            <div className="flex flex-row h-full">

                <NavBar current={current} />
                <div className="p-4 w-full overflow-y-auto ">

                    {children}
                </div>
            </div>
        </Container>
    )
}

export default Layout