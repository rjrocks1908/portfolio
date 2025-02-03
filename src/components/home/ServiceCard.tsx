import Image from "next/image";

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#212121] p-6 rounded-xl shadow-[-1.5px_-1.5px_4px_rgba(255,255,255,0.15)] flex flex-col sm:flex-row gap-4">
      <Image className="w-10 h-10" src={icon} alt={title} width={40} height={40} quality={100} />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
export default ServiceCard;
