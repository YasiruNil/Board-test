import ListTask from "../components/ListTask";
import { useAppSelector } from "../redux/hooks";


const dashboard = () => {
  const { tasksList } = useAppSelector((state: any) => state.tasks);

  

  return (
    <div className="w-[calc(100vw-288px)] w-min-[400px]">
      <div className="h-[180px] border-b-[2px] border-[#E6E8EC]">
        project details
      </div>
      {/*  drag and drop section*/}
      <div className="h-[calc(100vh-260px)] bg-[#F4F5F6]">
        <ListTask tasksList={tasksList} />
      </div>
    </div>
  );
};

export default dashboard;
