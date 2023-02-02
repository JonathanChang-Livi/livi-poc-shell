import { ComponentProps } from "livi-poc-core"
import React from "react"

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children, className, override, style }: ContainerProps & ComponentProps) => {
    const containerClass = 'w-full min-h-[100vh] h-full bg-white flex flex-col'
    return (
        <div className={`${override && override ? '' : containerClass} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Container