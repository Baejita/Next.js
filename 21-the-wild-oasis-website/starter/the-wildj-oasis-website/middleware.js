// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "./app/_library/auth";

export const middleware = auth;

auth;

//บังคัับให้ /account และ /cabin -->มาตรงหน้า /about
//ปกป้องรูทนี้ ไว้ แล้วพาไปส่วนของ Sign in
export const config = {
  matcher: ["/account"],
};
