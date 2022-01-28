import { Icon } from "@iconify/react";

interface Props {
  name: string;
  icon: string;
}

const Skill = (props: Props) => {
  return (
    <div className="skill">
      <div>
        <Icon icon={props.icon} color="#00DF5E" fontSize="90" />
      </div>
      <p className="white-title description">{props.name}</p>
    </div>
  );
};

export default Skill;
