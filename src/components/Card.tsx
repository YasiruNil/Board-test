import more from "../assets/images/moreFill.svg";
import link from "../assets/images/link.svg";
import flash from "../assets/images/Flash.svg";
import message from "../assets/images/message.svg";
import calendar from "../assets/images/Calendar.svg";
import infoCircleR from "../assets/images/InfoCircleR.svg";
import image from "../assets/images/image.svg";
import twoImage from "../assets/images/TeamAssigned.svg";
import multiImage from "../assets/images/multiTeam.svg";
import notification from "../assets/images/notification.svg";
import imageF from "../assets/images/ImageField.svg";
const card = ({ task }: any) => {
  return (
    <div className="bg-[#fff] w-full my-3 rounded-[12px] font-pop-semi font-normal text-base p-3">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span
                style={{ backgroundColor: task.color }}
                className="inline-block w-[8px] h-[8px] mr-2 rounded-[2px]"
              ></span>
              <span className="text-[#777E90]">{task.title}</span>
            </div>
            <img src={more} alt="search" className="w-[24px] h-[24px]" />
          </div>
          <span className="text-[#000000] text-[14px] font-normal">
            {task.description}
          </span>
          <div className="flex items-center justify-start">
            {task?.imageCount === 1 ? (
              <>
                <img src={image} alt="image" className="w-[24px] h-[24px]" />
              </>
            ) : task?.imageCount === 2 ? (
              <>
                <img
                  src={twoImage}
                  alt="twoImage"
                  className="w-[42px] h-[42px]"
                />
              </>
            ) : task?.imageCount > 2 ? (
              <>
                <img
                  src={multiImage}
                  alt="multiImage"
                  className="w-[60px] h-[60px]"
                />
              </>
            ) : (
              <></>
            )}
            <div className="flex my-4 rounded-[5px] bg-[#F4F5F6] p-1 justify-center items-center w-auto ml-3">
              <img src={flash} alt="flash" className="w-[20px] h-[20px]" />
              <span className="p-1 mx-3 text-[#777E90]">
                {task?.surge ?? ""}
              </span>
            </div>
          </div>
          {task?.caurosal && <div className="h-[90px] w-full rounded-[4px] bg-[#353945] flex items-center justify-center mb-3"><img src={imageF} alt="imageField" className="w-[20px] h-[20px]" /></div>}
          
        </div>
        <div className="border-t-[1px] border-[#E6E8EC] flex pt-2 flex-wrap">
          {task?.link && (
            <div className="flex items-center pt-1">
              <img src={link} alt="link" className="w-[20px] h-[20px]" />
              <span className="text-[#777E90] px-2">{task.link}</span>
            </div>
          )}

          {task?.chat && (
            <div className="flex items-center px-1 pt-1">
              <img src={message} alt="message" className="w-[20px] h-[20px]" />
              <span className="text-[#777E90]  px-2">{task.chat}</span>
            </div>
          )}

          {task?.dueDate && (
            <div className="flex items-center px-1 pt-1">
              <img
                src={calendar}
                alt="calendar"
                className="w-[20px] h-[20px]"
              />
              <span className="text-[#777E90] px-2 flex text-[12px]">
                Due: {task.dueDate}
              </span>
            </div>
          )}

          {task?.report && (
            <div className="flex items-center px-1 pt-1">
              <img
                src={infoCircleR}
                alt="infoCircle"
                className="w-[20px] h-[20px]"
              />
              <span className="text-[#F90430] font-medium px-2 flex text-[12px]">
                {task.report} Reports
              </span>
            </div>
          )}

          {task?.stream && (
            <div className="flex items-center px-1 pt-1">
              <img
                src={notification}
                alt="notification"
                className="w-[20px] h-[20px]"
              />
              <span className="text-[#3772FF] px-2 font-medium flex text-[12px]">
                {task.stream}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default card;
