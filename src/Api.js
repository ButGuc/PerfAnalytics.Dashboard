import axios from 'axios';

export default class Api {
  getFullUrl(url) {
    return `${origin}/${url}`;
  }

  async get(options) {
    let response;

    if (options ===  null) {
      response = await this.getLast30Measurements();
    } else {
      response = await this.getBetweenTwoDatesMeasurements(options.firstDate, options.secondDate);
    }

    return response.status === 304 ? null : this.convert(response.data.result);
  }

  async getLast30Measurements() {
    return await axios.get(this.getFullUrl('measurements'));
  }

  async getBetweenTwoDatesMeasurements(firstDate, secondDate) {
    return await axios.get(this.getFullUrl('measurements'), {
      params: {
        firstDate,
        secondDate
      }
    });
  }

  convert(result) {
    const convertedResult = {
      domLoad: [],
      windowLoad: [],
      firstContentfulPaint: [],
      timeToFirstByte: [],
      resourceLoads: []
    }

    result.map((item) => {
      convertedResult.domLoad.push({timeStamp: item.timestamp, ms: item.domLoad});
      convertedResult.windowLoad.push({timeStamp: item.timestamp, ms: item.windowLoad});
      convertedResult.firstContentfulPaint.push({timeStamp: item.timestamp, ms: item.firstContentfulPaint});
      convertedResult.timeToFirstByte.push({timeStamp: item.timestamp, ms: item.timeToFirstByte});
      convertedResult.resourceLoads.push({
        timeStamp: item.timestamp,
        url: item.url,
        totalTime: item.resourceLoads.reduce((accumulator, item) => accumulator + item.time, 0),
        resourceLoads: item.resourceLoads
      });
    })

    return convertedResult;
  }
}