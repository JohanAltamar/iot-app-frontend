import { useState } from "react"
import Drawer from "../ui/Drawer"
import Navbar from "../ui/Navbar"

const MainContainer = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleCloseMenu = () => {
    setToggleMenu(false)
  }

  return (
    <>
      <Navbar handleToggleMenu={handleToggleMenu} />
      <Drawer handleCloseMenu={handleCloseMenu} state={toggleMenu} />
      {children}
    </>
  )
}

export default MainContainer
