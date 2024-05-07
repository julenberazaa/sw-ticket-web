import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const VisualizacionPrioridad = ({ prioridad }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${prioridad > 0 ? "text-red-400" : "text-slate-400"} `}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${prioridad > 1 ? "text-red-400" : "text-slate-400"} `}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${prioridad > 2 ? "text-red-400" : "text-slate-400"} `}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${prioridad > 3 ? "text-red-400" : "text-slate-400"} `}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${prioridad > 4 ? "text-red-400" : "text-slate-400"} `}
      />
    </div>
  );
};

export default VisualizacionPrioridad;
