import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const App = () => {
	const fade = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		}
	});

	return (
		<animated.div className="App" style={fade}>
			<h1>Hello World!</h1>
		</animated.div>
	);
};


export default App;
