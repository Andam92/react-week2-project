import { Row } from "react-bootstrap";
import City from "./CityCard";

const Main = () => {
  return (
    <Row
      className=""
      style={{
        backgroundImage: `url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/D8qa-2E/rainy-stormy-darkness-wet-weather-background-depressed-sad-background_bzxjr4x7h_thumbnail-1080_01.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <City />
    </Row>
  );
};

export default Main;
