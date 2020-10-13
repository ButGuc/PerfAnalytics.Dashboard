import React, {useState} from "react";
import {Card, Table} from "react-bootstrap";
import DetailModal from './DetailModal';
import TableRow from './TableRow';

export default function ResourceLoads({data}) {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return <Card>
    <Card.Header>Resource Loads</Card.Header>
    <Card.Body>
        <Table responsive="md">
          <thead>
            <tr>
              <th>Date Time</th>
              <th>URL</th>
              <th>Total Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {
              data.resourceLoads.map((item, key) => {
                return <TableRow
                  show={show}
                  setShow={setShow}
                  data={item}
                  setSelectedData={setSelectedData}
                  key={key}
                />
              })
            }
          </tbody>
        </Table>
        <DetailModal show={show} setShow={setShow} data={selectedData}/>
    </Card.Body>
  </Card>;
}