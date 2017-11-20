import React from 'react'
import compose from './compose'
import withLabel from './withLabel'
import withError from './withError'

const TextArea = (props) => <textarea className="input" {...props} />

TextArea.displayName = 'Text'

export default compose(
  withLabel,
  withError,
)(TextArea)
