import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import './stylesheet.css';

function load() {
  /**
   * Basic presentation styling
   */
  addDecorator(story => {
    return (
      <div>
        {story()}

        {/* https://github.com/blog/273-github-ribbons */}
        <a href="https://github.com/srph/react-accordion" target="_blank">
          <img style={{ position: 'absolute',  top: 0, right: 0, border: 0 }} src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
        </a>
      </div>
    );
  });

  require('./accordion');
}

configure(load, module);
