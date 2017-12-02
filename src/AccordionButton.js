import React, {Component} from 'react';
import T from 'prop-types'

export default class AccordionButton extends Component {
  render() {
    const active = this.context.accordion.active === this.context.accordion.index;
    
    return (
      <button {...this.props} type="button" onClick={this.handleClick}>
        {this.props.children(active)}
      </button>
    );
  }

  handleClick = () => {
    this.context.accordion.onOpen(this.context.accordion.index);
  }
}

AccordionButton.contextTypes = {
  accordion: T.object
}

AccordionButton.propTypes = {
  children: T.func.isRequired
}