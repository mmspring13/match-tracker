import './button.scss';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from "@radix-ui/themes";
import clsx from "clsx";

export type ButtonProps = ButtonPrimitiveProps & {};

export const Button = ({
  className,
  ...props
}: ButtonProps) => {
  return (
    <ButtonPrimitive className={clsx([
      className,
      'AppButton',
      'bg-brand-1 hover:bg-brand-2 disabled:bg-brand-3',
    ])} color="red" {...props} />
  );
};