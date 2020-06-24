import React from 'react';
import { renderToString } from 'react-dom/server';
import template from '../template';
import config from '../../config';

export default function (module, componentName) {
  const Component = module.default;
  const props = config[componentName];

  return template({
    title: props.title,
    entry: props.entry,
    body: renderToString(<Component {...props} />)
  });
}
