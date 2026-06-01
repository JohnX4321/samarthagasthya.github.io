import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(userAgent);
  const host = request.headers.get('host') || '';
  const isAlreadyOnMobileDomain = host.includes('m.samarthagasthya.dev');
  
  // Redirect mobile users to mobile domain
  if (isMobile && !isAlreadyOnMobileDomain && host.includes('samarthagasthya.dev')) {
    const url = request.nextUrl.clone();
    url.host = 'm.samarthagasthya.dev';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)  
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.webp|.*\\.woff2).*)',
  ],
};
