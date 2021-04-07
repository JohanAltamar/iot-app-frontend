import { useContext } from "react";
import { useParams } from "react-router"
import { Container, Divider } from "@material-ui/core";

import UserContext from "../../context/UserContext";
import { useRoomInfo } from "../../hooks/useRoomInfo";
import { useRoomSocket } from "../../hooks/useRoomSocket";
import DevicesCards from "./DevicesCards";
import Title from "../Rooms/ContainerTitle";


const RoomInfo = () => {
  const { sessionToken } = useContext(UserContext);

  const params = useParams();
  const { roomID } = params;

  const [roomInfo, devicesList, loading] = useRoomInfo(roomID, sessionToken);

  const [socketState, devicesValues] = useRoomSocket(roomID, sessionToken, devicesList);

  return (
    loading ? <h2>Cargando ...</h2> : (
      roomInfo ? (
        <Container>
          <Title
            name={roomInfo.name}
            id={roomInfo.id}
            state={socketState}
          />
          <Divider />

          {
            !!devicesList.length ? (
              <DevicesCards devices={devicesValues} />
            ) : (
              <h4>No Devices attached. Contact the administrator</h4>
            )
          }

        </Container>
      ) : (
        <h4>No Room info. Contact the administrator</h4>
      )
    )
  )
}

export default RoomInfo
