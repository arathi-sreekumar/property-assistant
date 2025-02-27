import { LabelUI } from "./Label.css"

type Props = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, ...rest }: Props) => {
  return (
    <LabelUI {...rest}>{children}</LabelUI>
  )
}