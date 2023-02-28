import { getIronSession } from "iron-session/edge";
import { NextRequest, NextResponse } from "next/server";
import { ironOptions } from "./lib/iron-config"

const systemUrl: string[] = ['/_next', '/favicon.ico']

const isSystemUrl = (url: string) => systemUrl.map(x => url.includes(x)).reduce((a, b) => a || b)

export const middleware = async (req: NextRequest) => {
    const res = NextResponse.next();
    if (!isSystemUrl(req.url)) {
        const session = await getIronSession(req, res, ironOptions);
        const { token } = session
        if (token === undefined && !req.nextUrl.href.includes('/login')) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }
    return res
}