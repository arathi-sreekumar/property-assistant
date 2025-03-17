import { Header } from "../../../components/Page/Header"
import { CaptionUI, HeroUI } from "./Hero.css"

export const Hero = () => {
  return (
    <HeroUI>
      <Header>
        Property Hub
      </Header>
      <CaptionUI>
        Everything to know about property
      </CaptionUI>
    </HeroUI>
  )
}