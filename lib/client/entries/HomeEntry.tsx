import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/Home';
import config from '../../config';

hydrate(<Home title={config.Home.title} />, document.getElementById('main'));
