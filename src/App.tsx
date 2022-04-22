import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Header 	from './components/header';
import Personal from './components/personal';
import Projects from './components/projects';
import Footer 	from './components/footer';

export default function App() {
	return (
		<>
			<Header />
			<Personal />
			<Projects />
			<Footer />
		</>
	);
};
