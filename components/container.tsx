import { ComponentProps } from "livi-poc-core"
import React from "react"

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children, className, override, style }: ContainerProps & ComponentProps) => {
    const containerClass = 'container m-auto h-[90vh] bg-white rounded-xl drop-shadow-lg mt-4 flex flex-row'
    return (
        <div className={`${override && override ? '' : containerClass} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Container