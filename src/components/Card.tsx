import more from "../assets/images/more-fill-icon.svg";

const card = ({ task }: any) => {
  return (
    <div className={`bg-[#fff] w-[260px] h-[140px] my-3 rounded-[12px] `}>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span
              style={{ backgroundColor: task.color }}
              className="inline-block w-[8px] h-[8px] mr-2 rounded-[2px]"
            ></span>
            <span className="text-[#B1B5C3]">
              {task.title} {task.id}
            </span>
          </div>
          <img src={more} alt="search" className="w-[24px] h-[24px]" />
        </div>
        <h2 className="text-[#000000]">{task.description}</h2>
      </div>
    </div>
  );
};

export default card;
