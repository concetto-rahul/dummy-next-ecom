"use client";
import Modal from "react-bootstrap/Modal";
import "./modal-layout.scss";

type Props = {
  children: React.ReactNode;
  handleClose: () => void;
  show: boolean;
};
export default function ModalLayout({ children, handleClose, show }: Props) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="main-modal-layout"
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
