import { Card, CardBody, Stack, Title } from "livi-poc-core"
import React from "react"

interface NavbarProps {
    tab: string
}

interface NavTabProps {
    tab: string
    title: string
    current: string
}

const NavTab = ({ tab, current, title }: NavTabProps) => {
    return (
        // <div className={`w-full p-4 flex flex-row justify-center hover:border-r-4 border-primary ${tab === current ? 'border-r-4 ' : ''}`}>
        <Title className={`w-full p-3 whitespace-nowrap text-sm font-bold ${tab === current ? 'text-primary' : 'text-slate-300'} hover:text-primary hover:border-r-4 border-primary ${tab === current ? 'border-r-4 ' : ''}}`}>{title}</Title>
        // </div>
    )
}

const navList = [
    { tab: 'dashboard', title: 'Dashboard' },
    { tab: 'invoice', title: 'Invoice Management' },
    { tab: 'invoice', title: 'Account Management' },
]

const NavBar = ({ tab }: NavbarProps) => {
    return (
        <Card override className="w-1/4 pt-5">
            <CardBody className="h-full  ">
                <Stack className="justify-between h-full">
                    <Stack spacing="lg">
                        {navList.map((nav) => {
                            return (
                                <NavTab tab={nav.tab} title={nav.title} current={'dashboard'} />
                            )
                        })}
                    </Stack>
                    <NavTab tab={'logout'} title='Logout' current=''/>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default NavBar