const React = require('react');
const ReactDOMServer = require('react-dom/server');

const component = React.createElement('div', null, 'Hello World!');
const componentAsString = ReactDOMServer.renderToString(component);

console.log(componentAsString);
