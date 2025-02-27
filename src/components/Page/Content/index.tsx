import { JSX } from "react"
import { ContentUI } from "./Content.css"

type OwnProps = {
  children: JSX.Element | JSX.Element[] | string
}

type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps

export const Content = ({ children, ...rest }: Props) => {
  return (
    <ContentUI {...rest}>
      {children}
    </ContentUI>
  )
}