import { SelectUI, Wrapper } from "./Select.css"

type OwnProps = {
  width?: string
}

type Props = OwnProps & React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({
  width = '',
  children,
  ...rest
}: Props) => {
  return (
    <Wrapper>
      <SelectUI width={width} {...rest}>
        {children}
      </SelectUI>
    </Wrapper>
  )
}