import React from 'react';
import { render } from 'react-dom';

import Application from './Application';

import './styles/style.scss';

const rootElement = document.getElementById('root');
render(<Application />, rootElement);
