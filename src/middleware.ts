import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(req) {
   
    // Manage route protection
    const isAuth = await getToken({ req })

    const sensitiveRoutes = ['/dashboard']


      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }

      return NextResponse.next()
    
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  }
)

export const config = {
  matchter: ['/', '/login', '/dashboard/:path*'],
}
