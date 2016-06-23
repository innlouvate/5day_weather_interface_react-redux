import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesBars style={{ stroke: "white", fill: props.color, fillOpacity: ".25" }} />
        <SparklinesLine style={{ stroke: props.color, fill: "none" }} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
