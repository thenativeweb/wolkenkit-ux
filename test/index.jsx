import { Brand } from '../src';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <div>
    <section>
      <h2>Brand</h2>
      <Brand suffix='Documentation' />
      <h3>size: s</h3>
      <Brand suffix='console' size='s' />
      <h3>showLogo: false</h3>
      <Brand showLogo={ false } />
    </section>
  </div>
  ,
  document.querySelector('.ui-app')
);
