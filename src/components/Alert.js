import { useSelector } from "react-redux";

const Alert = () => {
  const alerts = useSelector((state) => state.alert.alerts);

  return alerts.map(({ message }) => alert(message));
};

export default Alert;
