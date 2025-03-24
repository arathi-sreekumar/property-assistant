import { useCallback, useEffect, useRef } from "react"
import PortalModal from "./PortalModal"

import { Close, Content, Header, ModalContainer, Overlay, Wrapper } from "./Modal.css"
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ children, isOpen, onClose, title }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // handle what happens on click outside of modal
  const handleClickOutside = () => onClose()

  // handle what happens on key press
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") onClose()
  }, [])

  useOnClickOutside(modalRef as React.RefObject<HTMLDivElement>, handleClickOutside)

  useEffect(() => {
    if (isOpen) {
      // attach the event listener if the modal is shown
      document.addEventListener("keydown", handleKeyPress)
      // remove the event listener
      return () => {
        document.removeEventListener("keydown", handleKeyPress)
      }
    }
  }, [handleKeyPress, isOpen])

  return (
    <>
      {isOpen && (
        <PortalModal wrapperId="modal-portal">
          <Overlay
            style={{
              animationDuration: "400ms",
              animationDelay: "0",
            }}
          >
            <Wrapper>
              <ModalContainer
                ref={modalRef}
              >
                <Header>
                  {title}
                  <Close onClick={() => onClose()}>
                    x
                  </Close>
                </Header>
                <Content>{children}</Content>
              </ModalContainer>
            </Wrapper>
          </Overlay>
        </PortalModal>
      )}
    </>
  )
}

export default Modal