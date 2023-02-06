import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest ) => {
    console.log(request.nextUrl.pathname)
    if(request.nextUrl.pathname === '/' || request.nextUrl.pathname === undefined){
        return NextResponse.rewrite(new URL('/overview', request.url))
    }
}