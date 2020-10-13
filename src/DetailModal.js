import React, {useEffect, useState} from "react";
import {Modal, Table} from "react-bootstrap";

export default function DetailModal({data, show, setShow}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (data === null) {
      handleClose();
    } else {
      handleShow();
    }
  }, data)

  return <Modal show={show} onHide={handleClose} size={"xl"}>
    {data !== null
      ? <div>
        <Modal.Header closeButton>
          <Modal.Title>Detail - {data.timeStamp} - {data.totalTime} ms - {data.url}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="md">
            <thead>
            <tr>
              <th>Type</th>
              <th>Time</th>
              <th>URL</th>
            </tr>
            </thead>
            <tbody>
            {
              data.resourceLoads.map((item, key) => {
                return <tr key={key}>
                  <td>{item.type}</td>
                  <td>{item.time}</td>
                  <td>{item.url}</td>
                </tr>
              })
            }
            </tbody>
          </Table>
        </Modal.Body>
      </div>
      : null
    }
  </Modal>;
}