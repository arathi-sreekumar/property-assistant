import { Page } from "../../components/Page"
import { HomeUI } from "./Home.css"

export const Home = () => {

  return (
    <HomeUI>
      <Page>
        <Page.Header id="main-header">Home Page</Page.Header>
        <Page.Content>
          <>
            <p>
              Sample home page
            </p>
          </>
        </Page.Content>
      </Page>
    </HomeUI>
  )
}
