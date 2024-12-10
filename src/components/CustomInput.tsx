import { Input } from "antd";
import { ReactNode } from "react";

interface CustomInputProps {
  
  onChange: () => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  text: string;
}

const CustomInput = ({
  onChange,
  suffix,
  prefix,
  text,
  ...props
}: CustomInputProps) => {
  return (
    <Input
      {...props}
      onChange={onChange}
      suffix = {suffix}
      prefix = {prefix}
      placeholder={text}
      className="custom-input w-[240px]" 
    />
  );
};

export default CustomInput;