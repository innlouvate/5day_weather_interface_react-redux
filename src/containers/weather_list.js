import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(citydata) {
    const name = citydata.city.name;
    const temps = citydata.list.map(weather => (weather.main.temp - 273.15))
    const pressures = citydata.list.map(weather => weather.main.pressure)
    const humidities = citydata.list.map(weather => weather.main.humidity)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color='red' units='C' />
        </td>
        <td>
          <Chart data={pressures} color='blue' units='hPa' />
        </td>
        <td>
          <Chart data={humidities} color='orange' units='%' />
        </td>
      </tr>
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempurature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
