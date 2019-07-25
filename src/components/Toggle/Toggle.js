import React, { useState } from 'react';
import { useSpring, animated} from 'react-spring';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
})(Button);

const Toggle = () => {
	const [isToggled, setToggle] = useState(false);
	const fade = useSpring ({
		opacity: isToggled ? 1 : 0
	})


	return (
		<div>
			<StyledButton onClick = {() => setToggle(!isToggled)}>
				Click Me!
			</StyledButton>
			<animated.h1 style={fade}>Oh hey!</animated.h1>
		</div>
	)
}

export default Toggle