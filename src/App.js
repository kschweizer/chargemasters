import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
			</div>
		</Router>
  );
}

export default App;
