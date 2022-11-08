import { useAppDispatch } from "../redux/hooks";
import {
  deleteRobotActionCreator,
  getAllRobotsActionCreator,
} from "../redux/features/RobotsSlice/RobotsSlice";
import { ApiRobot } from "../types.js";
import { useCallback } from "react";

const useAPI = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;

  const loadAllRobots = useCallback(async () => {
    const url = `${apiUrl}robots`;
    const response = await fetch(url);
    const apiResponse: ApiRobot = await response.json();
    dispatch(getAllRobotsActionCreator(apiResponse.robots));
  }, [dispatch, apiUrl]);

  const deleteRobot = useCallback(
    async (idRobot = "") => {
      const tokenUrl = process.env.REACT_APP_TOKEN;
      const url = `${apiUrl}robots/delete/${idRobot}?tokken=${tokenUrl}`;
      await fetch(url, { method: "DELETE" });

      dispatch(deleteRobotActionCreator(idRobot));
    },
    [dispatch, apiUrl]
  );
  return { getAllRobots: loadAllRobots, deleteRobot };
};

export default useAPI;
