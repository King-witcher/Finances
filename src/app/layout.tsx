import { Outlet } from 'react-router-dom'
import Providers from './providers'

export default function RootLayout() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  )
}
