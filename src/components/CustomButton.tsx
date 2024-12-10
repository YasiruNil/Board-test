import { Button } from "antd";
import { ReactNode } from "react";

interface CustomButtonProps {
  type: string;
  onClick: () => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
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
      {children}
      {suffix && <span className="ml-2">{suffix}</span>}
    </Button>
  );
};

export default CustomButton;
