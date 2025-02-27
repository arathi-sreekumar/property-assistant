import { useQuery } from '@tanstack/react-query'

import { Page } from "../../components/Page"
import { HomeUI } from "./Home.css"
import { Nav } from '../../components/Nav';
import { ColumnUI } from '../../components/Page/Content/Content.css';
import { ImageUI } from '../../common/styles/common.css';

export const Home = () => {
  return (
    <HomeUI>
      <Nav />
      <Page>
        <Page.Header id="main-header">Property Information</Page.Header>
        <Page.Content className="two-column">
          <ColumnUI>
            <p>
              Navigating the world of real estate can be both exciting and complex, whether you’re buying, selling, renting, or letting a property. Understanding the key aspects of each process can help you make informed decisions and maximize your investment.
            </p>
            <p>
              <ul>
                <li>
                  <strong>Buying a Property:</strong> Purchasing a home or investment property requires careful consideration of location, budget, financing options, and market trends. It’s essential to conduct thorough research, secure a mortgage if needed, and negotiate effectively to get the best deal.
                </li>
                <li>
                  <strong>Selling a Property:</strong> Selling involves setting the right price, staging the property to attract buyers, marketing effectively, and handling negotiations. A well-presented home and a strategic approach can lead to a quicker and more profitable sale.
                </li>
                <li>
                  <strong>Renting a Property:</strong> As a tenant, finding the right rental property means considering factors like affordability, lease terms, and location. It’s important to understand your rights and responsibilities to ensure a smooth renting experience.
                </li>
                <li>
                  <strong>Letting a Property:</strong> Landlords must ensure their property meets legal requirements, attract suitable tenants, and manage leases effectively. Proper maintenance and clear communication with tenants can lead to a successful letting experience.
                </li>
              </ul>
            </p>
            <p>
              Whether you’re entering the market as a buyer, seller, tenant, or landlord, having the right knowledge and guidance is key to making informed and confident real estate decisions.
            </p>
          </ColumnUI>
          <ColumnUI>
            <ImageUI src="/ThinkingOfHome.jpeg" role="presentation" />
          </ColumnUI>
        </Page.Content>
      </Page>
    </HomeUI>
  )
}
