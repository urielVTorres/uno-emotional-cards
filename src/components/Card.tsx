import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmileBeam,
  faMugHot,
  faUserGroup,
  faPeopleGroup,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

interface Props {
  challenge: string;
  category?: string;
}

const Card = ({ challenge, category }: Props) => {
  let color;
  switch (category) {
    case "emociones":
      color = "pink";
      break;
    case "actividades_fisicas":
      color = "white";
      break;
    case "relajacion":
      color = "blue";
      break;
    case "habilidades_sociales":
      color = "golden";
      break;
  }
  return (
    <div className={`uno-card ${color}`}>
      <div className="symbol middle">
        <span className="texto">{challenge}</span>
      </div>
      <div className="symbol small top-left">
        <FontAwesomeIcon
          icon={
            color == "pink"
              ? faSmileBeam
              : color == "white"
              ? faPersonRunning
              : color == "blue"
              ? faMugHot
              : faPeopleGroup
          }
        />
      </div>
      <div className="symbol small bottom-right">
        <FontAwesomeIcon
          icon={
            color == "pink"
              ? faSmileBeam
              : color == "white"
              ? faPersonRunning
              : color == "blue"
              ? faMugHot
              : faPeopleGroup
          }
        />
      </div>
    </div>
  );
};

export default Card;
