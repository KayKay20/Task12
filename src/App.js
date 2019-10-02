import React from 'react';
import './App.css';
import Form from './components/form.js';
import Background from './img/blue.jpg';
import Weather from './components/Weather.js';
import Titles from './components/title.js';


class App extends React.Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=4a483a22618f634b50f15e527c11dd11&units=metric`);
    const data = await api_call.json();
    if (city && country) {
    console.log(data);  
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });
  } else {
     this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:"Please enter the value."
    });


  }
};

  render() {
    return(

  <div className="App">
    <Titles/>
    <br/>
    <Form className="form" getWeather={this.getWeather}/>
    <Weather 
    temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity} 
    description={this.state.description}
    error={this.state.error}
      />
  </div>


      );
  }
}
export default App;
