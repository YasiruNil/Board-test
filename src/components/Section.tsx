import plusBlack from "../assets/images/plus-black-icon.png";
import dots from "../assets/images/dots-icon.svg";
import CardList from "./CardList";
import Status from "./Status";

import { StatusConstants } from "../util/constants";
import { useAppSelector } from "../redux/hooks";

const section = ({ status }: any) => {
  const { todoList, approvedList, rejectedList, inProgressList } =
    useAppSelector((state: any) => state.tasks);

  return (
    <div className="flex-row border-r-[1px] border-[#E6E8EC] h-full">
      {status && (
        <>
          <SectionHeader status={status} />
          <div className="h-[calc(100vh-320px)] overflow-y-auto no-scrollbar">
            {status === StatusConstants.todo ? (
              <CardList list={todoList}  />
            ) : (
              <>
                {status === StatusConstants.approved ? (
                  <CardList list={approvedList}/>
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

const SectionHeader = ({ status }: any) => {
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
    <div className="flex justify-between items-center py-3 px-3 border-[#E6E8EC] bg-[#ffff] border-[1px] border-r-[0px] h-[60px]">
      <Status status={status} color={color} bgColor={bgColor} />
      <div className="flex">
        <img src={plusBlack} alt="plus" className="w-[20px] h-[20px] m-[6px]" />
        <img src={dots} alt="plus" className="w-[20px] h-[20px] m-[6px]" />
      </div>
    </div>
  );
};

export default section;