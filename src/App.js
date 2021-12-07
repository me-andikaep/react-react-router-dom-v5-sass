import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './component/navbar';
import { lazy, Suspense, useEffect } from 'react';
import './styles/custom.scss';
// import Home from './page/home/Home';
// import About from './page/about/About';
// import Contact from './page/contact/Contact';

function App() {
	return (
		<div className='App'>
			<Router>
				<Suspense fallback={<span>loading</span>}>
					<Navbar />
					<Switch>
						<Route
							component={lazy(() => import('./page/home/Home'))}
							// component={Home}
							exact
							path='/home'
						/>
						<Route
							component={lazy(() => import('./page/about/About'))}
							// component={About}
							exact
							path='/about'
						/>
						<Route
							component={lazy(() => import('./page/contact/Contact'))}
							// component={Contact}
							exact
							path='/contact'
						/>
					</Switch>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
