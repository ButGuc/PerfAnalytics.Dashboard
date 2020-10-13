import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import Charts from "./Charts";
import Options from "./Options";
import Head from "./Head";
import ResourceLoads from './ResourceLoads';
import Api from "./Api";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const api = new Api();

  const [options, setOptions] = useState(null);

  const [data, setData] = useState({
    domLoad: [],
    windowLoad: [],
    firstContentfulPaint: [],
    timeToFirstByte: [],
    resourceLoads: []
  });

  const [intervalRef, setIntervalRef] = useState();

  useEffect(() => {
    if (intervalRef !== null) {
      clearInterval(intervalRef);
    }

    const interval = setInterval(async () => {
      const response = await api.get(options);

      setData(response || data);
    }, 2500);

    setIntervalRef(interval);
  }, [options]);

  return (
    <div className="App">
      <Container>
        <Head/>
        <Options setOptions={setOptions}/>
        <Charts data={data}/>
        <ResourceLoads data={data}/>
      </Container>
    </div>
  );
}

export default App;
