import React from 'react';
import {render} from 'react-dom';

const component = <div>Hello World!</div>;

render(
  component,
  document.getElementById('render-app-here')
);
