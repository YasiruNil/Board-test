import plusBlack from "../assets/images/plusBlack.png";
import dots from "../assets/images/dots.svg";
import CardList from "./CardList";
import Status from "./Status";

import { StatusConstants } from "../util/constants";
import { useAppSelector } from "../redux/hooks";
import { TaskState } from "../interfaces/task.interface";

const section = ({ status }: { status: string }) => {
  const { todoList, approvedList, rejectedList, inProgressList } =
    useAppSelector((state: TaskState) => state.tasks);

  return (
    <div className="flex-row border-r-[1px] border-[#E6E8EC] overflow-hidden h-[calc(100vh-320px)]">
      {status && (
        <>
          <SectionHeader status={status} />
          <div className="h-[calc(100vh-380px)] overflow-y-auto no-scrollbar">
            {status === StatusConstants.todo ? (
              <CardList list={todoList} />
            ) : (
              <>
                {status === StatusConstants.approved ? (
                  <CardList list={approvedList} />
                ) : (
                  <>
                    {status === StatusConstants.inProgress ? (
                      <CardList list={inProgressList} />
                    ) : (
                      <>
                        {status === StatusConstants.rejected ? (
                          <CardList list={rejectedList} />
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const SectionHeader = ({ status }: { status: string }) => {
  let color = "";
  let bgColor = "";
  if (status === StatusConstants.todo) {
    color = "#353945";
    bgColor = "#E6E8EC";
  } else if (status === StatusConstants.inProgress) {
    color = "#353945";
    bgColor = "#FFA800";
  } else if (status === StatusConstants.approved) {
    color = "#353945";
    bgColor = "#AEE753";
  } else if (status === StatusConstants.rejected) {
    color = "#FFFFFF";
    bgColor = "#F90430";
  }
  return (
    <div className="flex justify-between items-center py-3 px-3 border-[#E6E8EC] bg-[#ffff] border-[1px] border-r-[0px] h-[60px] font-pop-semi">
      {/* Drag and Drop Column title and plus and option icons */}
      <Status status={status} color={color} bgColor={bgColor} />
      <div className="flex">
        <img src={plusBlack} alt="plus" className="w-[20px] h-[20px] m-[6px]" />
        <img src={dots} alt="plus" className="w-[20px] h-[20px] m-[6px]" />
      </div>
    </div>
  );
};

export default section;
