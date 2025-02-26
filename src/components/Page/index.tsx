import { Content } from "./Content"
import { Header } from "./Header"
import { PageUI } from "./Page.css"


interface PageProps {
  children: React.ReactElement<typeof Header | typeof Content>[]
}

export const Page = ({ children }: PageProps) => {
  return (
    <PageUI>
      { children }
    </PageUI>
  )
}

Page.Header = Header
Page.Content = Content