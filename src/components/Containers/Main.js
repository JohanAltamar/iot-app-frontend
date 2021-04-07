import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/styles';
import { useMemo, useState } from "react"

import SocketContext from "../../context/SocketContext"
import ThemeContext from "../../context/ThemeContext";
import Drawer from "../ui/Drawer"
import Navbar from "../ui/Navbar"


const MainContainer = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [socketConnection, setSocketConnection] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = useMemo(() => createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#00bfa5",
      }
    },
  }), [darkMode]);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleCloseMenu = () => {
    setToggleMenu(false)
  }

  return (
    <SocketContext.Provider value={{ socketConnection, setSocketConnection }}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={darkTheme}>
          <Navbar handleToggleMenu={handleToggleMenu} />
          <Drawer handleCloseMenu={handleCloseMenu} state={toggleMenu} />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </SocketContext.Provider>
  )
}

export default MainContainer
