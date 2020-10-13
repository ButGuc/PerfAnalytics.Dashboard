import React, {useEffect} from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import {Card} from 'react-bootstrap'

export default function Chart({title, color, data}) {
  return <Card>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <ResponsiveContainer width='100%' aspect={15/5}>
        <BarChart data={data}>
          <XAxis dataKey="timeStamp"/>
          <YAxis/>
          <Tooltip wrapperStyle={{backgroundColor: '#ccc'}}/>
          <CartesianGrid stroke="#ccc" strokeDasharray="10 10"/>
          <Bar dataKey="ms" fill={color} barSize={30}/>
        </BarChart>
      </ResponsiveContainer>
    </Card.Body>
  </Card>;
}