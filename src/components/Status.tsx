const Status = ({
  status,
  color,
  bgColor,
}: {
  status: string;
  color: string;
  bgColor: string;
}) => {
  return (
    <div
      className="flex justify-center items-center min-w-[100px] h-[30px] rounded-[46px] text-center font-pop-semi text-base font-medium"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {status}
    </div>
  );
};

export default Status;
