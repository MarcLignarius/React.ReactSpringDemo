import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Toggle from '../Toggle/Toggle';
import HoverCard from '../HoverCard/HoverCard';
import FlipCard from '../FlipCard/FlipCard';

const App = () => {
	const fade = useSpring({
		from: {
			opacity: 0
		},
		opacity: 1
	});

	return (
		<Router>
			<animated.div style={fade}>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/toggle' component={Toggle} />
					<Route path='/hovercard' component={HoverCard} />
					<Route path='/flipcard' component={FlipCard} />
				</Switch>
			</animated.div>
		</Router>
	);
};

export default App;
