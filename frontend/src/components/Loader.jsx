import { Spinner } from "react-bootstrap";

const Loader = ({ size }) => {
  const spinnerSize = size || 100; // Default size is 100px, can be overridden with the 'size' prop

  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: `${spinnerSize}px`,
        height: `${spinnerSize}px`,
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
