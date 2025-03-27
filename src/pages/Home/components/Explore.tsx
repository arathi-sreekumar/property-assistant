import { ImageUI } from "../../../common/styles/common.css"
import { ColumnUI } from "../../../components/Page/Content/Content.css"
import { Header } from "../../../components/Page/Header"
import { ExploreUI, ExploreWrapper, SubTitleUI } from "./Explore.css"

export const Explore = () => {
  return (
    <ExploreUI>
      <Header level={2}>What do you have in mind?</Header>
      <SubTitleUI>Feel free to explore.</SubTitleUI>
      <ExploreWrapper>
        <ColumnUI>
          <ImageUI
            src='/property-assistant/for_sale.jpg'
            alt='Image representing calculations involved in a property transaction'
          />
        </ColumnUI>
        {window.innerWidth > 640 && (
          <ColumnUI>
            <ImageUI
              src='/property-assistant/to_let.jpg'
              alt='Image representing calculations involved in a property transaction'
            />
          </ColumnUI>
        )}
        <ColumnUI>
          <Header level={2}>Selling</Header>
          <p>
            Selling involves setting the right price, staging the property to attract buyers, marketing effectively, and handling negotiations. A well-presented home and a strategic approach can lead to a quicker and more profitable sale.
          </p>
        </ColumnUI>
        <ColumnUI>
          <Header level={2}>Letting</Header>
          <p>
            Landlords must ensure their property meets legal requirements, attract suitable tenants, and manage leases effectively. Proper maintenance and clear communication with tenants can lead to a successful letting experience.
          </p>
        </ColumnUI>
        <ColumnUI>
          <Header level={2}>Buying</Header>
          <p>
            Purchasing a home or investment property requires careful consideration of location, budget, financing options, and market trends. It’s essential to conduct thorough research, secure a mortgage if needed, and negotiate effectively to get the best deal.
          </p>
        </ColumnUI>
        <ColumnUI>
          <Header level={2}>Renting</Header>
          <p>
            As a tenant, finding the right rental property means considering factors like affordability, lease terms, and location. It’s important to understand your rights and responsibilities to ensure a smooth renting experience.
          </p>
        </ColumnUI>
      </ExploreWrapper>
      <p>
        <i>Whether you’re entering the market as a buyer, seller, tenant, or landlord, having the right knowledge and guidance is key to making informed and confident real estate decisions.</i>
      </p>
    </ExploreUI>
  )
}