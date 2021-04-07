import { useContext, useEffect, useState } from "react"
import UserContext from "../context/UserContext"
import { getRooms } from "../api/users"
import RoomsCards from "../components/Containers/RoomCards"

const HomeScreen = () => {
  const { userInfo, sessionToken } = useContext(UserContext)

  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRooms = async () => {
      if (sessionToken && userInfo) {
        const resp = await getRooms(sessionToken, userInfo.uid)
        if (resp.results) {
          setRooms(resp.results)
        }
      }
      setLoading(false);
    }
    getUserRooms();
  }, [sessionToken, userInfo])

  return (
    loading ? <h2>Cargando ...</h2> : (
      <>
        {
          !!rooms.length ? (
            <RoomsCards rooms={rooms}/>
          ) : (
            <h3>There are no rooms attached! Contact your administrator.</h3>
          )
        }
      </>
    )
  )
}

export default HomeScreen