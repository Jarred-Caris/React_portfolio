import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Particles from './Particles.jsx';

var particles = (
	<Particles
		width={window.innerWidth}
		height={window.innerHeight} />
)

var root = ReactDOM.render(particles, document.getElementById('content'));

if (__DEV__) {
	require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
		getRootInstances: () => {
			return [root];
		}
	});
}
