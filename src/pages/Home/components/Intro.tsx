import { ImageUI } from "../../../common/styles/common.css"
import { ColumnUI } from "../../../components/Page/Content/Content.css"
import { IntroWrapper } from "./Intro.css"

export const Intro = () => {
  return (
    <IntroWrapper>
      <ColumnUI>
        <p>
          Navigating the world of real estate can be both exciting and complex, whether you’re buying, selling, renting, or letting a property.
        </p>
        <p>
          Understanding the key aspects of each process can help you make informed decisions and maximize your investment.
        </p>
      </ColumnUI>
      <ColumnUI>
        <ImageUI
          src='/property_calc.jpg'
          alt='Image representing calculations involved in a property transaction'
        />
      </ColumnUI>
    </IntroWrapper>
  )
}