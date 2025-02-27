import { ButtonStyles } from "../../../common/types/form";
import { ButtonUI } from "./Button.css";

type Props = {
  styleType?: ButtonStyles;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props

export const Button = ({
  children,
  styleType = 'primary',
  ...props
}: ButtonProps) => {

  return (
    <ButtonUI className={styleType} {...props}>
      {children}
    </ButtonUI>
  )
}
