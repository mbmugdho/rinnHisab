import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

// This matches all routes except static files and api
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
