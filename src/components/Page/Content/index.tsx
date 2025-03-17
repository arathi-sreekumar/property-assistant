import { ReactNode } from "react"
import { ContentUI } from "./Content.css"

type OwnProps = {
  children: ReactNode
}

type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps

export const Content = ({ children, ...rest }: Props) => {
  return (
    <ContentUI {...rest}>
      {children}
    </ContentUI>
  )
}