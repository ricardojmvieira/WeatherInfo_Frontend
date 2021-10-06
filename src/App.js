import React from 'react';

const WEATHERS_QUERY = `{
  weathers{
    cityName,
    temperature,
    description
  }
}`

function App() {
  const [weathers, setWeathers] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/graphql/', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query:WEATHERS_QUERY })
    }).then(response  => response.json())
    .then(data => setWeathers(data.data.weathers))
  }, [])
  return (
    <div>
    <h1>Weather</h1>
    {weathers.map((weather) => (
      <li>{weather.cityName}, {weather.temperature}ºC, {weather.description}</li>
    ))}
    </div>
  );
}

export default App;
