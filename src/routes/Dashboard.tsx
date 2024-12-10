import ListTask from "../components/ListTask";
import { useAppSelector } from "../redux/hooks";

function Dashboard() {
  const tasks = useAppSelector((state: any) => state.tasks);
  console.log(tasks);
  return (
    <div className="w-full">
      <div className="h-180px">project details</div>
      {/*  drag and drop section*/}
      <div>
        <ListTask tasksList = {tasks}/>
      </div>
    </div>
  );
}

export default Dashboard;
