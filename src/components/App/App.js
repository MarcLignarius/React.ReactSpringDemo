import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import Toggle from '../Toggle/Toggle'

const App = () => {
	const fade = useSpring({
		from: {
			opacity: 0
		},
		opacity: 1
	});

	return (
		<animated.div className="App" style={fade}>
			<h1>Practicing React Spring</h1>
			<hr/>
			<main>
				<Toggle />
			</main>
		</animated.div>
	);
};

export default App;
