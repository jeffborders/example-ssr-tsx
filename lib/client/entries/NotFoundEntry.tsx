import React from 'react';
import { hydrate } from 'react-dom';
import NotFound from '../pages/NotFound';

hydrate(<NotFound />, document.getElementById('main'));
