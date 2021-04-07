import { createMuiTheme } from "@material-ui/core"
import { blueGrey } from "@material-ui/core/colors";
import { ThemeProvider } from '@material-ui/styles';
import { useMemo, useState } from "react"

import SocketContext from "../../context/SocketContext"
import ThemeContext from "../../context/ThemeContext";
import Drawer from "../ui/Drawer"
import Navbar from "../ui/Navbar"

const styles = {
  width: "100vw",
  height: "100vh",
  overflow: "auto"
}

const MainContainer = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [socketConnection, setSocketConnection] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = useMemo(() => createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: blueGrey[100],
        dark: blueGrey[800]
      },
      background: {
        paper: darkMode ? blueGrey[800] : blueGrey["100"],
        default: darkMode ? blueGrey[800] : blueGrey["A100"],
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
          <div style={
            { ...styles, backgroundColor: darkMode ? blueGrey[900] : blueGrey[50] }}
          >
            <Navbar handleToggleMenu={handleToggleMenu} />
            <Drawer handleCloseMenu={handleCloseMenu} state={toggleMenu} />
            {children}
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </SocketContext.Provider>
  )
}

export default MainContainer
