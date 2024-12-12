import image from "../assets/images/image.svg";
import grid from "../assets/images/grid.svg";
import shape from "../assets/images/shape.svg";
import folder from "../assets/images/folder.svg";
import arrorR from "../assets/images/arrowR.svg";
import arrowUp from "../assets/images/arrowUp.svg";
import message from "../assets/images/message.svg";
import user from "../assets/images/User.svg";
import calendar from "../assets/images/Calendar.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import circleInfo from "../assets/images/InfoCircle.svg";
import signOut from "../assets/images/SignOut.svg";

interface SidebarProps {
  showNav: boolean;
}

function Sidebar({ showNav }: SidebarProps) {
  console.log(showNav);
  return (
    <div className="w-[288px] min-w-[288px] h-full border-r-[1px] border-[#E6E8EC] font-pop-semi text-base tracking-[1px]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center flex-col items-center">
          <div className="border-[2px] border-[#E6E8EC] w-[240px] h-[64px] rounded-[8px] mt-[24px] flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={image}
                alt="image"
                className="w-[44px] h-[44px] m-[12px]"
              />
              <div>
                <div className="text-[#B1B5C3]">Workspace</div>
                <div className="text-[#353945] font-medium">Root folder</div>
              </div>
            </div>
            <img
              src={arrowDown}
              alt="arrowDown"
              className="w-[24px] h-[24px] m-[12px]"
            />
          </div>

          <div className="w-[240px] h-[48px] rounded-[8px] mt-[14px] flex items-center justify-start">
            <img src={grid} alt="grid" className="w-[24px] h-[24px] m-[12px]" />
            <span className="text-[#777E90] font-medium">Dashboard</span>
          </div>
          <div className="border-[2px] border-[#E6E8EC] w-[240px] h-[48px] rounded-[8px] mt-[14px] flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={folder}
                alt="folder"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#3772FF] font-medium">Boards</span>
            </div>
            <img
              src={arrowUp}
              alt="arrowUp"
              className="w-[24px] h-[24px] m-[12px]"
            />
          </div>
          <div className="border-[2px] border-[#E6E8EC] w-[240px] rounded-[8px] mt-[14px] flex items-start flex-col justify-start">
            <div className="flex items-center">
              <img
                src={arrorR}
                alt="arrorR"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#B1B5C3] font-normal">Create routes</span>
            </div>
            <div className="flex items-center">
              <img
                src={arrorR}
                alt="arrorR"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#B1B5C3] font-normal">Develoment React App</span>
            </div>
            <div className="flex items-center">
              <img
                src={shape}
                alt="shape"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#3772FF] font-medium">Sport Xi Project</span>
            </div>
            <div className="flex items-center">
              <img
                src={arrorR}
                alt="arrorR"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#B1B5C3] font-normal">Wordpress theme</span>
            </div>
          </div>
          <div className=" w-[240px] rounded-[8px] mt-[14px] flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={message}
                alt="message"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#777E90] font-medium">Messages</span>
            </div>
            <span className="bg-[#FF5C00] rounded-full p-1 w-[30px] h-[24px] flex justify-center items-center text-[#fff] mr-3">
              3
            </span>
          </div>
          <div className=" w-[240px] rounded-[8px] mt-[14px] flex items-start flex-col justify-start">
            <div className="flex items-center">
              <img
                src={calendar}
                alt="calendar"
                className="w-[22px] h-[22px] m-[12px]"
              />
              <span className="text-[#777E90] font-medium">Calendar</span>
            </div>
          </div>
          <div className="w-[240px] rounded-[8px] mt-[14px] flex items-start flex-col justify-start">
            <div className="flex items-center">
              <img
                src={user}
                alt="user"
                className="w-[22px] h-[22px] m-[12px]"
              />
              <span className="text-[#777E90] font-medium">Team members</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* support */}
          <div className="w-[240px] h-[48px] rounded-[8px] mt-[14px] flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={circleInfo}
                alt="circleInfo"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#777E90] font-medium">Support</span>
            </div>
          </div>
          <div className="w-[240px] h-[48px] rounded-[8px] mt-[14px] flex items-center justify-between mb-8 bg-[#353945]">
            <div className="flex items-center">
              <img
                src={signOut}
                alt="signOut"
                className="w-[24px] h-[24px] m-[12px]"
              />
              <span className="text-[#fff] font-medium">Logout</span>
            </div>
          </div>
          {/* logout */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
