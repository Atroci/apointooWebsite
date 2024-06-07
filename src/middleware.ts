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

  // List of excluded paths that should redirect to /contact
  const excludedPaths = [
    '/team/:path*',
    '/api/:path*',
    '/dashboard',
    '/profile',
    '/case-studies/:path*',
    '/coming-soon/:path*',
    '/slice-simulator/:path*',
      '/testimonials/:path*',

  ];

  // Check if pathname matches any excluded path pattern
  const shouldRedirect = excludedPaths.some((pattern) => {
    const regex = new RegExp(`^${pattern.replace(':path*', '.*')}$`);
    return regex.test(pathname);
  });

  if (shouldRedirect) {
    return NextResponse.redirect(new URL('/contact', req.url));
  }

  // Add headers
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'value');

  return response;
}

export const config = {
  matcher: [
    '/dashboard',
    '/profile',
    '/api/:path*',
    // Paths to be handled by the middleware (excluding the ones needing redirection)
    '/about/:path*',
    '/auth/:path*',
    '/blog/:path*',
    '/case-studies/:path*',
    '/coming-soon/:path*',
    '/contact/:path*',
    '/faq/:path*',
    '/slice-simulator/:path*',
    '/solutions/:path*',
    '/team/:path*',
    '/testimonials/:path*',
  ],
};
