import React, {cloneElement} from 'react'
import T from 'prop-types' 

export function ShouldReceiveContext(props, context) {
  return <ShouldReceiveProps {...context} />
}

ShouldReceiveContext.contextTypes = {
  accordion: T.object
}

export function ShouldReceiveProps(props) {
  return props.children || <div />
}