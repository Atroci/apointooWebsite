import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Log requests
  console.log(`Request for ${pathname}`);

  // Handle authentication
  const token = req.cookies.get('token');
  const isAuthenticated = token !== undefined;

  // Protect routes
  const protectedRoutes = ['/dashboard', '/profile'];

  if (protectedRoutes.includes(pathname) && !isAuthenticated) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Add headers
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'value');

  return response;
}

export const config = {
  matcher: [
    '!/dashboard',
    '!/profile',
    '!/api/:path*',
    // Exclude paths
    '/about/:path*',
    '!/auth/:path*',
    '/blog/:path*',
    '!/case-studies/:path*',
    '!/coming-soon/:path*',
    '/contact/:path*',
    '/faq/:path*',
    '!/slice-simulator/:path*',
    '/solutions/:path*',
    '!/team/:path*',
    '!/testimonials/:path*',
  ],
};
