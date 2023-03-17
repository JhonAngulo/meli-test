import { type ReactNode } from 'react'

interface MainLayoutprops {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutprops) => {
  return (
    <>
      MainLayout
      {children}
    </>
  )
}

export default MainLayout
