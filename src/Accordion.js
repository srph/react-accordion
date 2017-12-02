import React, {Component, Children, cloneElement} from 'react';
import T from 'prop-types'
import AccordionPane from './AccordionPane'
import AccordionButton from './AccordionButton'

export default class Accordion extends Component {
  state = {
    active: this.props.defaultActive
  }

  getChildContext() {
    return {
      accordion: {
        active: this.state.active,
        paneClassName: this.props.paneClassName,
        openClassName: this.props.openClassName,
        onOpen: this.handleOpen
      }
    }
  }

  render() {
    const {paneClassName, openClassName, defaultActive, component, ...props} = this.props;
    const Component = component;

    return (
      <Component {...props} />
    );
  }

  handleOpen = (index) => {
    this.setState({ active: this.state.active === index ? -1 : index })
  }
}

Accordion.Pane = AccordionPane;
Accordion.Button = AccordionButton;

Accordion.childContextTypes = {
  accordion: T.object
}

Accordion.propTypes = {
  component: T.oneOfType([T.element, T.string]),
  paneClassName: T.string.isRequired,
  openClassName: T.string,
  defaultActive: T.number
}

Accordion.defaultProps = {
  component: 'div',
  openClassName: 'active',
  defaultActive: 0
}