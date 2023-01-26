import React from "react"
import Container from "./container"
import HeaderBar from "./header"
import NavBar from "./navbar"

interface LayoutProps {
    children: React.ReactNode
    current: string
}

const Layout = ({ children, current }: LayoutProps) => {
    return (
        <Container>
            <HeaderBar />
            <div className="flex flex-row">

                <NavBar tab={current} />
                <div className="p-4 w-full rounded-xl bg-slate-100 drop-shadow-lg overflow-y-auto ">

                    {children}
                </div>
            </div>
        </Container>
    )
}

export default Layout