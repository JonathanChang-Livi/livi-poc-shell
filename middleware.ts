import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";
// import { authState } from "./csm/auth";

const systemUrl: string[] = ['/_next', '/favicon.ico']

const isSystemUrl = (url: string) => systemUrl.map(x => url.includes(x)).reduce((a, b) => a || b)

export function middleware(request: NextRequest) {
    // console.log(isSystemUrl(request.url))
    // console.log(!authState && !isSystemUrl(request.url) && !request.nextUrl.href.includes('/login'), `${request.url}`)
    if (!isSystemUrl(request.url)) {
        console.log(request.url, 'request.url')
        console.log(request.cookies.get('auth-token'), `request.cookies.get('auth-token')`)
        const authState = request.cookies.get('auth-token')
        // console.log(authState, 'authState')
        if (!authState && !request.nextUrl.href.includes('/login')) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}