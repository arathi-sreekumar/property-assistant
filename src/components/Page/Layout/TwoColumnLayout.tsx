import { ReactNode } from "react"

import { Page } from ".."
import { ColumnUI } from '../Content/Content.css'
import { ImageUI } from '../../../common/styles/common.css'
import { PageType } from "../../../types/layout"
import { PageDisplayInfo } from "../../../common/constants"

export type TwoColumnProps = {
  header?: ReactNode
  children: ReactNode
  pageType: PageType
}

export const TwoColumnLayoutWithImage = ({
  header: headerProp,
  pageType,
  children,
}: TwoColumnProps) => {

  const {
    header: headerInfo,
    imageUrl,
    imageDescription
  } = PageDisplayInfo[pageType]

  const role = imageDescription ? 'figure' : 'presentation'
  const header = headerProp || headerInfo

  return (
    <Page>
      <Page.Header id="main-header">{header}</Page.Header>
      <Page.Content className="two-column">
        <ColumnUI>
          {children}
        </ColumnUI>
        {window.innerWidth > 640 && (
          <ColumnUI role={role}>
            <ImageUI
              src={imageUrl}
              alt={imageDescription}
            />
          </ColumnUI>
        )}
      </Page.Content>
    </Page>
  )
}