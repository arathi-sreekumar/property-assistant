import { useQuery } from '@tanstack/react-query'

import { Page } from "../../components/Page"
import { HomeUI } from "./Home.css"
import { getPropertyData } from '../../api/property';

export const Home = () => {

  const postQuery = useQuery({
    queryKey: ['property'],
    queryFn: async () => {
      const response = await getPropertyData('test')

      const data = await response.data

      return data;
    }
  })

  if (postQuery.isLoading) return <h1>Loading....</h1>
  if (postQuery.isError) return <h1>Error loading data!!!</h1>

  return (
    <HomeUI>
      <Page>
        <Page.Header id="main-header">Home Page</Page.Header>
        <Page.Content>
          <>
            <p>
              Lets see what the api returns
            </p>

            {postQuery?.data?.message}
          </>
        </Page.Content>
      </Page>
    </HomeUI>
  )
}
