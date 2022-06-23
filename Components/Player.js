import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import ReactPlayer from "react-player";
export default function Player() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="light" className=" btn-large" onClick={handleShow}>
        <i className="bx bx-play" />
      </Button>

      <Modal show={show} onHide={handleClose} id="player">
        <ReactPlayer
          style={{ marginLeft: "-10%" }}
          url="https://www.youtube.com/watch?v=tUP5S4YdEJo"
        />
      </Modal>
    </>
  );
}
