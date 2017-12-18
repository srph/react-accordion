import React from 'react'
import {shallow, mount} from 'enzyme'
import Accordion, {AccordionPane, AccordionButton} from '../'
import {ShouldReceiveContext, ShouldReceiveProps} from './fixtures';
import sinon from 'sinon';

let sandbox = null

beforeEach(() => {
  sandbox = sinon.createSandbox()
})

afterEach(() => {
  sandbox.restore()
})

test('it should call change active when clicked', () => {
  const wrapper = mount(
    <Accordion paneClassName="pane">
      <AccordionPane>
        <AccordionButton>{() => 'Step 1'}</AccordionButton>
        <ShouldReceiveContext />
      </AccordionPane>

      <AccordionPane index={1}>
        <AccordionButton>{() => 'Step 2'}</AccordionButton>
        <ShouldReceiveContext />
      </AccordionPane>
    </Accordion>
  )

  const node = wrapper.find(ShouldReceiveProps).first()
  expect(node.props().accordion.active).toBe(0)

  wrapper.find(AccordionPane).last().find('button').simulate('click')
  expect(node.props().accordion.active).toBe(1)
})

test('it should pass active to children', () => {
  const wrapper = mount(
    <Accordion paneClassName="pane">
      <AccordionPane>
        <AccordionButton>{(active) => active ? 'Yes' : 'No'}</AccordionButton>
      </AccordionPane>
    </Accordion>
  )

  const button = wrapper.find(AccordionButton)
  expect(button.text()).toBe('Yes')

  wrapper.find(AccordionPane).last().find('button').simulate('click')
  expect(button.text()).toBe('No')
})

test('it should pass through props to the node element except some', () => {
  const handleOpen = sandbox.spy()

  const wrapper = mount(
    <Accordion paneClassName="pane">
      <AccordionPane>
        Sup
        <AccordionButton data-hehe="69" title="hehe" onClick={handleOpen}>{() => 'Step 1'}</AccordionButton>
      </AccordionPane>
    </Accordion>
  )

  const node = wrapper.find('button');
  expect(node.prop('data-hehe')).toBe('69')
  expect(node.prop('title')).toBe('hehe')
  expect(node.prop('type')).toBe('button')
  expect(node.prop('onClick')).not.toBe(handleOpen)
})
