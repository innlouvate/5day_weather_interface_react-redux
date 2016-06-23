import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(citydata) {
    const name = citydata.city.name;
    const temps = citydata.list.map(weather => (weather.main.temp - 273.15))
    const pressures = citydata.list.map(weather => weather.main.pressure)
    const humidities = citydata.list.map(weather => weather.main.humidity)
    const {lon, lat} = citydata.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='C' /></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humidities} color='blue' units='%' /></td>
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
