import { ComponentProps } from "livi-poc-core"
import React from "react"

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children, className, override, style }: ContainerProps & ComponentProps) => {
    const containerClass = 'm-0 md:m-auto w-full md:w-[90vw] h-[100vh] md:h-full bg-white rounded-none md:rounded-xl drop-shadow-lg md:mt-4 flex flex-col'
    return (
        <div className={`${override && override ? '' : containerClass} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Container