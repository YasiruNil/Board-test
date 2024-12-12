import ListTask from "../components/ListTask";
import { useAppSelector } from "../redux/hooks";
import team from "../assets/images/Team.svg";
import pencil from "../assets/images/Pencil.svg";

const dashboard = () => {
  const { tasksList } = useAppSelector((state: any) => state.tasks);

  return (
    <div className="w-[calc(100vw-288px)] min-w-[800px] font-pop-semi tracking-[1px]">
      <div className="h-[240px] p-[24px]">
        <div className="border-b-[1px] border-[#E6E8EC]">
          <div className="flex items-center mb-3">
            <span className="font-bold text-heading mr-7">
              Sport Xi Project
            </span>
            <span className="bg-[#FFA800] font-medium text-[10px] text-[#353945] rounded-[5px] px-4 py-[2px] h-[20px]">
              In progress
            </span>
          </div>
          <span className="text-[#B1B5C3]">event production</span>
          <div className="my-4 flex items-center">
            <span className="text-[#B1B5C3]">assigned</span>
            <img src={team} alt="team" className="w-[76px] h-[24px]" />
            <span className="mx-4 rounded-[46px] border-[2px] border-[#E6E8EC] px-4 py-1 text-[#B1B5C3] font-medium flex">
              Manage
              <img src={pencil} alt="team" className="w-[24px] h-[24px] mx-2" />
            </span>
          </div>
        </div>
        <div className="my-5 text-[#B1B5C3] font-light">
        Latest update on 04 April, 2022
        </div>
      </div>
      {/*  drag and drop section*/}
      <div className="h-[calc(100vh-320px)] overflow-hidden bg-[#F4F5F6]">
        <ListTask tasksList={tasksList} />
      </div>
    </div>
  );
};

export default dashboard;
