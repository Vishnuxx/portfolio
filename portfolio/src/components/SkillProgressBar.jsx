export default function SkillProgressBar({
  name = "untitled",
  percentage = "40",
  color = "green",
}) {
  return (
    <div className=" rounded-lg p-4 shadow-md">
      <h3 className="text-sm font-semibold mb-2 text-gray-500">{name}</h3>
      <div className="relative h-3 rounded-full overflow-hidden bg-gray-300">
        <div
          style={{ width: `${percentage}%`, background: `${color}` }}
          className={`absolute top-0 left-0 h-full  flex items-center justify-center  rounded-full min-w-fit`}
        >
          <p className=" w-fit text-[0.6rem]">{percentage}%</p>
        </div>
      </div>
    </div>
  );
}
