import image from "../assets/images/image.svg";
import arrowDown from "../assets/images/arrowDown-icon.svg";

interface SidebarProps {
  showNav: boolean;
}

function Sidebar({ showNav }: SidebarProps) {
  console.log(showNav);
  return (
    <div className="w-[288px] h-full border-r-[1px] border-[#E6E8EC]">
      <div className="flex justify-center">
        <div className="border-[2px] border-[#E6E8EC] w-[240px] h-[64px] rounded-[8px] mt-[24px] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={image}
              alt="plus"
              className="w-[44px] h-[44px] m-[12px]"
            />
            <div>
              <div className="text-[#B1B5C3]">Workspace</div>
              <div className="text-[#353945]">Root folder</div>
            </div>
          </div>
          <img
            src={arrowDown}
            alt="plus"
            className="w-[44px] h-[44px] m-[12px]"
          />
        </div>

        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        {/* support */}
        {/* logout */}
      </div>
    </div>
  );
}

export default Sidebar;
