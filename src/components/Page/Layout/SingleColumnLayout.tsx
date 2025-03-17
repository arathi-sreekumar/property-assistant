import { ReactNode } from "react"

import { Page } from ".."
import { ColumnUI } from '../Content/Content.css'
import { PageType } from "../../../types/layout"
import { PageDisplayInfo } from "../../../common/constants"

export type SingleColumnProps = {
  header?: ReactNode
  children: ReactNode
  pageType: PageType
}

export const SingleColumnLayout = ({
  header: headerProp,
  pageType,
  children,
}: SingleColumnProps) => {

  const {
    header: headerInfo,
  } = PageDisplayInfo[pageType]

  const header = headerProp || headerInfo

  return (
    <Page>
      <>
        {header && (
          <Page.Header id="main-header">{header}</Page.Header>
        )}
      </>
      <Page.Content className="single-column">
        <ColumnUI>
          {children}
        </ColumnUI>
      </Page.Content>
    </Page>
  )
}