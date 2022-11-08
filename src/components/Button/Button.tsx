import "./Button.css";
interface ButtonProps {
  action?: () => void;
}

const Button = ({ action }: ButtonProps): JSX.Element => {
  const text = "Delete";

  return (
    <div className="card__button">
      <button onClick={action}>{text}</button>
    </div>
  );
};

export default Button;
