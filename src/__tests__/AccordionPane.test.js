import React from 'react'
import {shallow, mount} from 'enzyme'
import Accordion, {AccordionPane} from '../'

test('it should display paneClassName from context', () => {
  const wrapper = mount(
    <Accordion paneClassName="pane">
      <AccordionPane index={0}>Sup</AccordionPane>
      <AccordionPane index={1}>Sup 2</AccordionPane>
    </Accordion>
  )

  expect(wrapper.find(AccordionPane).first().hasClass('pane')).toBe(true)
  expect(wrapper.find(AccordionPane).at(1).hasClass('pane')).toBe(true)
})

test('it should display active classname', () => {
  const wrapper = mount(
    <Accordion paneClassName="pane">
      <AccordionPane index={0}>Sup</AccordionPane>
      <AccordionPane index={1}>Sup 2</AccordionPane>
    </Accordion>
  )

  expect(wrapper.find(AccordionPane).first().hasClass('active')).toBe(true)
  expect(wrapper.find(AccordionPane).at(1).hasClass('active')).toBe(false)
})

test('it should pass through props to the node element except index', () => {
  const wrapper = mount(
    <Accordion paneClassName="pane">
      <AccordionPane index={0} target="_blank" data-cool="69">
        foo
      </AccordionPane>
    </Accordion>
  )

  const node = wrapper.children().find('div');
  expect(node.find('div').prop('index')).toBe(undefined)
  expect(node.prop('data-cool')).toBe('69')
  expect(node.prop('target')).toBe('_blank')
})