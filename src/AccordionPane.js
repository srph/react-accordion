import React, {Component} from 'react';
import T from 'prop-types'
import c from 'classnames'

export default class AccordionPane extends Component {
  getChildContext() {
    return {
      accordion: {
        ...this.context.accordion,
        index: this.props.index
      }
    }
  }

  render() {
    const {accordion} = this.context;
    const {index, ...props} = this.props;

    return (
      <div {...props} className={c(accordion.paneClassName, {
        [accordion.openClassName]: accordion.active === index
      })} />
    );
  }
}

AccordionPane.contextTypes = {
  accordion: T.object
}

AccordionPane.childContextTypes = {
  accordion: T.object
}
