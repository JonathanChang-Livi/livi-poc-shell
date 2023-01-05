import React from "react"
import Container from "./container"
import NavBar from "./navbar"

interface LayoutProps {
    children: React.ReactNode
    current: string
}

const Layout = ({ children, current }: LayoutProps) => {
    return (
        <Container>
            <NavBar tab={current} />
            <div className="p-4 w-full rounded-xl bg-slate-100 drop-shadow-lg">

                {children}
            </div>
        </Container>
    )
}

export default Layout