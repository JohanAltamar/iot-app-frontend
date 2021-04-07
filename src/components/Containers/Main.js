import { useState } from "react"

import SocketContext from "../../context/SocketContext"
import Drawer from "../ui/Drawer"
import Navbar from "../ui/Navbar"


const MainContainer = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [socketConnection, setSocketConnection] = useState(true);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleCloseMenu = () => {
    setToggleMenu(false)
  }

  return (
    <SocketContext.Provider value={{ socketConnection, setSocketConnection }}>
      <Navbar handleToggleMenu={handleToggleMenu} />
      <Drawer handleCloseMenu={handleCloseMenu} state={toggleMenu} />
      {children}
    </SocketContext.Provider>
  )
}

export default MainContainer
