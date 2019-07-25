import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

function Nav() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link className='navlink' to='/'>Practicing React Spring</Link>
					</Typography>
					<Button color="inherit"><Link className='navlink' to='/toggle'>Toggle</Link></Button>
					<Button color="inherit"><Link className='navlink' to='/hovercard'>Hover Card</Link></Button>
					<Button color="inherit"><Link className='navlink' to='/flipcard'>Flip Card</Link></Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Nav;