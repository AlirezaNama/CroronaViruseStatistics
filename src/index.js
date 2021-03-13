import React from 'react';
import reactDom from 'react-dom';
import App from './App';

//First param is the app component & Sec one is the element we wanna render it on
//root  => public/index.html => inside the body
reactDom.render(<App/>, document.getElementById('root'));