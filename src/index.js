import React from 'react';
import ReactDOMServer from 'react-dom/server';

const component = <div>Hello World!</div>;
const componentAsString = ReactDOMServer.renderToString(component);

console.log(componentAsString);
