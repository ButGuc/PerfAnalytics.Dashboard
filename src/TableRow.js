import React, {useCallback} from "react";
import {Button} from "react-bootstrap";

export default function TableRow({data, setSelectedData, setShow}) {
  const onClick = useCallback(() => {
    setShow(true);
    setSelectedData(data);
  });

  return <tr>
    <td>{data.timeStamp}</td>
    <td>{data.url}</td>
    <td>{data.totalTime} ms</td>
    <td>
      <Button onClick={onClick} size={"sm"}>
        Details
      </Button>
    </td>
  </tr>
}