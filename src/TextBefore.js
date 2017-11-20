import React from 'react'
import compose from './compose'
import withLabel from './withLabelBefore'
import withError from './withErrorBefore'

const Text = (props) => <input className="input" {...props} />

Text.displayName = 'Text'

export default compose(
  withLabel,
  withError,
)(Text)
