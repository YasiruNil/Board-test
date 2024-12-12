import { Button } from "antd";
import { ReactNode } from "react";

interface CustomButtonProps {
  type: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick: () => void;
  children: ReactNode;
}

const CustomButton = ({
  type,
  onClick,
  suffix,
  prefix,
  children,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      className={`${type} flex justify-between`}
    >
      {prefix && <span className="mr-2">{prefix}</span>}
      <span className="font-pop-semi text-base">{children}</span>
      {suffix && <span className="ml-2">{suffix}</span>}
    </Button>
  );
};

export default CustomButton;
