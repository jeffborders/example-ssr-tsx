import React from 'react';
import { hydrate } from 'react-dom';
import About from '../pages/About';
import config from '../../config';

hydrate(<About title={config.About.title} />, document.getElementById('main'));
