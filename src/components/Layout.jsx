import { Outlet } from "react-router-dom"
import NavbarElement from "./NavbarElement"

const Layout = () => {
  return (
    <>
    <NavbarElement />
    <main>
        <Outlet />
    </main>
        
    </>
  )
}

export default Layout