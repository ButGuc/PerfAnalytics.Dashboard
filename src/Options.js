import React, {useCallback, useContext, useRef} from "react";
import {Row, Col, Card, Form, Button} from "react-bootstrap";

export default function Options({setOptions}) {
  const firstDateRef = useRef();
  const secondDateRef = useRef();

  const getMeasurementsOnClick = useCallback(() => {
    const firstDate = firstDateRef.current.value;
    const secondDate = secondDateRef.current.value;

    if (firstDateRef !== "" && secondDate !== "") {
      setOptions({firstDate, secondDate});
    } else {
      alert("Entries can not be empty");
    }
  });

  const getMeasurementsOfLast30 = useCallback(() => {
    setOptions(null);
  });

  return <Row style={{marginBottom: '1rem'}}>
    <Col xs={12}>
      <Card>
        <Card.Header>Options</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col xs={3}>
                <Form.Control ref={firstDateRef} type={"datetime-local"}/>
              </Col>
              <Col xs={3}>
                <Form.Control ref={secondDateRef} type={"datetime-local"}/>
              </Col>
              <Col xs={3}>
                <Button onClick={getMeasurementsOnClick} block>Get measurements</Button>
              </Col>
              <Col xs={3}>
                <Button onClick={getMeasurementsOfLast30} block>Get measurements of last 30</Button>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  </Row>;
}