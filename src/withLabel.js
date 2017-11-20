import React from 'react'

export default (Base) => {
  const WithLabel = (props) => [
    !!props.label && (
      <label
        key="label"
        className="label"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    ),
    <Base
      key="base"
      {...props}
    />
  ]
  WithLabel.displayName = `withLabel(${Base.displayName})`
  return WithLabel
}
