import { IconArrowsDiff, IconBriefcase, IconBulbFilled, IconChartPieFilled, IconFileText, IconFriends, IconMoneybag, IconSettingsFilled, IconTicket, IconZoomQuestion } from "@tabler/icons-react"
import { Button, Card, CardBody, Stack, Title } from "livi-poc-core"
import React from "react"

interface NavbarProps {
    current: string
    navs?: NavTabProps[]
}

interface NavTabProps {
    tab: string
    title: string
    current?: string
    icon?: React.ReactNode
}

const NavTab = ({ tab, current, title, icon }: NavTabProps) => {
    const isCurrent = !current ? false : current == tab
    return (
        // <div className={`w-full p-4 flex flex-row justify-center hover:border-r-4 border-primary ${tab === current ? 'border-r-4 ' : ''}`}>
        <div className={`flex flex-row items-center group w-full p-3 ${tab === current ? 'border-l-4 bg-opacity-20 bg-white' : 'bg-none'} hover:border-l-4 border-white`}>
            {icon}
            <Title className={`select-none whitespace-nowrap text-sm font-bold ${isCurrent ? 'text-white' : ' text-slate-400'} group-hover:text-white`}>{title}</Title>
        </div>
    )
}

const iconClass = "text-slate-400 group-hover:text-white mx-3"
const DEFAULT_NAV: NavTabProps[] = [
    { tab: 'overview', title: 'Overview', icon: <IconChartPieFilled size={24} className={iconClass}/> },
    { tab: 'transfer', title: 'Transfer', icon: <IconTicket size={24} className={iconClass}/> },
    { tab: 'transactions', title: 'Transactions', icon: <IconArrowsDiff size={24} className={iconClass}/> },
    { tab: 'invoices', title: 'Invoices', icon: <IconBulbFilled size={24} className={iconClass}/> },
    { tab: 'loan', title: 'Loans', icon: <IconMoneybag size={24} className={iconClass}/> },
    { tab: 'manage-supplier', title: 'Manage Supplier', icon: <IconFriends size={24} className={iconClass}/> },
    { tab: 'statement', title: 'Statement', icon: <IconFileText size={24} className={iconClass}/> },
    { tab: 'workstation', title: 'Workstation', icon: <IconBriefcase size={24} className={iconClass}/> },
    { tab: 'settings', title: 'Settings', icon: <IconSettingsFilled size={24} className={iconClass}/> },
    { tab: 'help-center', title: 'Help Center', icon: <IconZoomQuestion size={24} className={iconClass}/> },
]

const NavBar = ({ current, navs }: NavbarProps) => {
    const list = navs || DEFAULT_NAV
    return (
        <div className="hidden md:flex w-60 flex-col bg-slate-700 h-full">
            <div className=" h-48 flex flex-col items-center justify-around p-3">
                <div className=" rounded-full w-14 h-14 bg-slate-300 flex justify-center items-center">
                    <p className=" font-bold text-primary w-auto text-2xl">A</p>
                </div>
                <p className="text-center font-black text-xl text-white">
                    ABC Company Limited
                </p>
                <Button override className="rounded-full w-auto px-2 text-sm bg-slate-100 text-primary">Switch Account</Button>
            </div>
            {
                list.map(nav => {
                    return (
                        <NavTab tab={nav.tab} title={nav.title} current={current} icon={nav.icon} />
                    )
                })
            }
        </div>
    )
}

export default NavBar