import { Error } from "./Alert.style";
const Alert = ({ error }: { error: string }) => {
  return (
    <Error>
      <i className="fas fa-info-circle" /> {error}
    </Error>
  );
};

export default Alert;
