import { Row } from "react-bootstrap";
import City from "./CityCard";
import rainy from "../assets/img/background/rainy.png";
import sunny from "../assets/img/background/sunny.jpg";

const Main = () => {
  /*    function imgSwitch() {
    switch () {
      case "Clear":
        return Clear;
      case "Clouds":
        return Clouds;
      case "Rain":
        return Rainy;
      default:
        return Clouds;
    }
  } */

  return (
    <Row
      className=""
      style={{
        backgroundImage: `url(${rainy}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <City backgroundImage={`../assets/img/background/rainy.png`} />
    </Row>
  );
};

export default Main;
