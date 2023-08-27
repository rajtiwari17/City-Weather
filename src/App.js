import Weather from "./Components/WeatherApp/Weather";

const App = () => {

	return (
		<div>
			<Weather />
		</div>
	);
};

export default App;



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=c2f4631d6232f7482a500327629564a9

// API-KEY = c2f4631d6232f7482a500327629564a9

//  https://api.openweathermap.org/data/2.5/weather?q=Lucknow&units=Metric&appid=c2f4631d6232f7482a500327629564a9