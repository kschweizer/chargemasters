import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className="Home">
			<div style={{ height : "20vh" }}></div>
			<div className="index-MastHead">
				<h1 className="index-Heading">
					California Chargemasters Simplified
				</h1>
				<a href="/">
					<h2 className="index-Procedures"> Start finding procedures without logging in. </h2>
				</a>
				<div className="index-Buttons">
					<a href="/login" style={{ marginRight: "1.5em"}}> 
						Sign in 
					</a>
					<a href="/register"> 
						<button className="index-Register"> 
							Sign up
						</button>
					</a> 
				</div>
			</div>
		</div>
	);
}

export default Home;
