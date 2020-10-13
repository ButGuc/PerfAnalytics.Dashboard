import React from "react";
import {Row, Col} from 'react-bootstrap';
import Chart from './Chart';

export default function Charts({data}) {
  return <Row>
    {
      (() => {
        const convertedData = [];

        convertedData.push({title: 'Dom Load',data: data.domLoad});
        convertedData.push({title: 'Window Load',data: data.windowLoad});
        convertedData.push({title: 'First Contentful Paint',data: data.firstContentfulPaint});
        convertedData.push({title: 'Time To First Byte',data: data.timeToFirstByte});

        return convertedData.map((item, key) => {
          return <Col key={key} md={6} s={12} style={{marginBottom: '1rem'}}>
            <Chart color={'#10af4b'} title={item.title} data={item.data}/>
          </Col>
        })
      })()
    }
  </Row>
}