function InfoCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#FFD700] p-4 rounded-2xl bg-neutral-800 shadow-[-1.5px_-1.5px_4px_rgba(255,255,255,0.15)]">
        {icon}
      </span>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
export default InfoCard;
