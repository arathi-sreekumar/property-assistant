import { JSX } from "react"
import { ContentUI } from "./Content.css"

type Props = {
  children: JSX.Element | string
}

export const Content = ({ children }: Props) => {
  return (
    <ContentUI>
      {children}
    </ContentUI>
  )
}