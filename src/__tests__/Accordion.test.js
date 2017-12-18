import React from 'react'
import T from 'prop-types'
import Accordion from '../'
import {shallow, mount} from 'enzyme'
import {ShouldReceiveContext, ShouldReceiveProps} from './fixtures';

test('it should render children', () => {
  const CoolKid = () => <div />
  const wrapper = shallow(<Accordion paneClassName="open"><CoolKid /></Accordion>)
  expect(wrapper.contains(<CoolKid />)).toBe(true)
})

test.only('it should add index to its children', () => {
  const CoolKid = () => <div />
  const BadKid = () => <div />
  const wrapper = mount(<Accordion paneClassName="open"><CoolKid /><BadKid /></Accordion>)
  expect(wrapper.find(CoolKid).first().prop('index')).toEqual(0)
  expect(wrapper.find(BadKid).first().prop('index')).toEqual(1)
})

test('it should default active to first index', () => {
  const wrapper = mount(<Accordion paneClassName="open"><ShouldReceiveContext /></Accordion>)
  expect(wrapper.find(ShouldReceiveProps).props().accordion.active).toBe(0)
})

test('it should default active to prop', () => {
  const wrapper = mount(<Accordion paneClassName="open" defaultActive={1}><ShouldReceiveContext /></Accordion>)
  expect(wrapper.find(ShouldReceiveProps).props().accordion.active).toBe(1)
})

test('switch should change current active', () => {
  const wrapper = mount(<Accordion paneClassName="open"><ShouldReceiveContext /></Accordion>)
  const node = wrapper.find(ShouldReceiveProps)
  node.props().accordion.onOpen(255)
  expect(node.props().accordion.active).toBe(255)
})

test('switch to same active should close all tabs', () => {
  const wrapper = mount(<Accordion paneClassName="open"><ShouldReceiveContext /></Accordion>)
  const node = wrapper.find(ShouldReceiveProps)
  node.props().accordion.onOpen(255)
  expect(node.props().accordion.active).toBe(255)
  node.props().accordion.onOpen(255)
  expect(node.props().accordion.active).toBe(-1)
})

test('it should pass props to the node element except a few', () => {
  const CoolKid = () => <div />
  const wrapper = shallow(<Accordion paneClassName="open"><CoolKid /></Accordion>)
  expect(wrapper.contains(<CoolKid />)).toBe(true)
})
