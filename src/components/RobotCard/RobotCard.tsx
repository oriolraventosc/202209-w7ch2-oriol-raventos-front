import useAPI from "../../hooks/useAPI";
import { Robot } from "../../types.js";
import Button from "../Button/Button";
import "./RobotCard.css";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  const { deleteRobot } = useAPI();

  const {
    name,
    image,
    creation,
    features: { speed, resistance },
    _id: id,
  } = robot;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
      <div className="card__especifications">
        <span>Creation date: {creation}</span>
        <span>Speed: {speed}</span>
        <span>Resistance: {resistance}</span>
      </div>
      <Button action={() => deleteRobot(id)} />
    </div>
  );
};

export default RobotCard;
