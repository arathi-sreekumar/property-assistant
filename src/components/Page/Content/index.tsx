import { ContentUI } from "./Content.css"

type Props = {
  children: JSX.Element
}

export const Content = ({ children }: Props) => {
  return (
    <ContentUI>
      {children}
    </ContentUI>
  )
}