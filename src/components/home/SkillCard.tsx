interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors duration-300 flex items-center gap-3 group">
      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillCard;