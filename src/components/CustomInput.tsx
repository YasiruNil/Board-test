import { Input } from "antd";
import { ReactNode } from "react";

interface CustomInputProps {
  text: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      suffix={suffix}
      prefix={prefix}
      placeholder={text}
      className="custom-input w-[240px]"
    />
  );
};

export default CustomInput;
