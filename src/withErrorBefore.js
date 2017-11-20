import React from 'react'

const errorId = id => `${id}-error`

export default (Base) => {
  const WithError = (props) =>
    <div className="error-container">
      <Base
        key="base"
        aria-describedby={!!props.error ? errorId(props.id) : null}
        aria-invalid={!!props.error}
        {...props}
      />
      {!!props.error && (
        <span
          key="error"
          className="error"
          id={errorId(props.id)}
        >
          {props.error}
        </span>
      )}
    </div>
  WithError.displayName = `withError(${Base.displayName})`
  return WithError
}
