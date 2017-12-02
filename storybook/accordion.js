import React from 'react';
import {storiesOf} from '@storybook/react';
import Accordion, {AccordionButton, AccordionPane} from '../src';

storiesOf('Accordion', module)
  .addDecorator(story => {
    return <div className="app">{story()}</div>
  })
  .add('basic', () => (
    <Accordion paneClassName="panel" openClassName="-open">
      <AccordionPane index={0}>
        <div className="heading">
          <h4 className="title">What does X mean?</h4>

          <AccordionButton className="button">
            {(open) => {
              return open ? '▼' : '▲';
            }}
          </AccordionButton>
        </div>

        <div className="body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </AccordionPane>

      <AccordionPane index={1}>
        <div className="heading">
          <h4 className="title">What does X mean?</h4>

          <AccordionButton className="button">
            {(open) => {
              return open ? '▼' : '▲';
            }}
          </AccordionButton>
        </div>

        <div className="body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </AccordionPane>
    </Accordion>
  ))
  