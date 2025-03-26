import React, { useState } from "react";
import { IconButton } from "../Form/IconButton";
import Modal from "../Modals/Modal";
import { HelpCircle } from "../icons";

type HelpProps = {
  title: string
  children: React.ReactNode
}

export const Help = ({ title, children }: HelpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleShowModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpen(true)
  }

  return (
    <>
      <IconButton onClick={handleShowModal} title="More information"><HelpCircle /></IconButton>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
      >
        {children}
      </Modal>
    </>
  );
}
