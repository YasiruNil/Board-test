import CustomButton from "./CustomButton";
import plus from "../assets/images/plus-icon.svg";
import board from "../assets/images/board-icon.svg";
import bell from "../assets/images/bell-icon.svg";
import image from "../assets/images/image.svg";
import search from "../assets/images/search.svg";
import setting from "../assets/images/setting-icon.svg";
import CustomInput from "./CustomInput";

const Header = () => {
  const handleAddNewBoard = () => {
    console.log("add new board");
  };

  const handleSearch = () => {
    console.log("handleSearch");
  };

  return (
    <div className="custom-header">
      <div className="flex justify-center items-center mx-5">
        <img src={board} alt="plus" className="w-5 h-5 mx-2" />
        <span className="text-black font-bold">Board</span>{" "}
        <span className="mx-1 text-primary font-bold">App</span>
      </div>
      <div className="flex gap-4">
        <CustomButton
          type="board-add"
          onClick={() => handleAddNewBoard()}
          suffix={<img src={plus} alt="plus" className="w-5 h-5" />}
          prefix={null}
        >
          Create new board
        </CustomButton>
        <CustomInput
          prefix={<img src={search} alt="plus" className="w-5 h-5" />}
          onChange={() => handleSearch()}
          suffix={null}
          text="Search tasks..."
        />
        <div className="flex space-x-3 mx-5 items-center">
          <img src={setting} alt="plus" className="w-5 h-5 mx-2" />
          <img src={bell} alt="plus" className="w-5 h-5 mx-2" />
          <img src={image} alt="plus" className="w-5 h-5 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
