import { LayoutUI } from "./Layout.css"
import { Nav } from "../../Nav"
import { LayoutType, PageType } from "../../../types/layout"
import { LAYOUT, PageDisplayInfo } from "../../../common/constants"
import { TwoColumnLayoutWithImage, TwoColumnProps } from "./TwoColumnLayout"
import { SingleColumnLayout } from "./SingleColumnLayout"

type OwnProps = {
  pageType: PageType
}

type Props = React.HTMLAttributes<HTMLDivElement> & OwnProps & TwoColumnProps

const getLayoutComponent = (layoutType: LayoutType) => {
  switch (layoutType) {
    case LAYOUT.TWO_COLUMN:
      return TwoColumnLayoutWithImage
    default:
      return SingleColumnLayout
  }
}

export const Layout = ({
  header,
  pageType,
  children,
  ...rest
}: Props) => {
  const {
    layoutType,
  } = PageDisplayInfo[pageType]

  const LayoutComponent = getLayoutComponent(layoutType)

  return (
    <LayoutUI {...rest}>
      <Nav />
      <LayoutComponent
        header={header}
        pageType={pageType}
      >
        {children}
      </LayoutComponent>
    </LayoutUI>
  )
}