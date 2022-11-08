import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import RobotCard from "../RobotCard/RobotCard";
import "./RobotList.css";

const RobotList = (): JSX.Element => {
  const robotsList = useAppSelector(
    ({ robotsActions }) => robotsActions.robots
  );
  const { getAllRobots } = useAPI();
  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);

  return (
    <ul className="robot-list">
      {robotsList.map((robot, index) => (
        <li key={index}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotList;
