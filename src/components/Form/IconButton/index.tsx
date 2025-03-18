import { ButtonStyles } from "../../../types/form";
import { IconButtonUI } from "./IconButton.css";

type Props = {
  styleType?: ButtonStyles;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props

export const IconButton = ({
  children,
  styleType = 'primary',
  ...props
}: ButtonProps) => {

  return (
    <IconButtonUI className={styleType} {...props}>
      {children}
    </IconButtonUI>
  )
}
