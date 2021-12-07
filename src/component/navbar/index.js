import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='c-navbar'>
			<ul className='navbar'>
				<li className='nav'>
					<NavLink
						to='/home'
						// className='navlink'
						// activeClassName='active'
						className={(isActive) => 'navlink' + (isActive ? ' active' : '')}
					>
						Home
					</NavLink>
				</li>
				<li className='nav'>
					<NavLink
						to='/about'
						// className='navlink'
						// activeClassName='active'
						className={(isActive) => 'navlink' + (isActive ? ' active' : '')}
					>
						About
					</NavLink>
				</li>
				<li className='nav'>
					<NavLink
						to='/contact'
						// className='navlink'
						// activeClassName='active'
						className={(isActive) => 'navlink' + (isActive ? ' active' : '')}
					>
						Contacts
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
