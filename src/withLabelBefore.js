import React from 'react'

export default (Base) => {
  const WithLabel = (props) =>
    <div className="label-container">
      {!!props.label && (
        <label
          key="label"
          className="label"
          htmlFor={props.id}
        >
          {props.label}
        </label>
      )}
      <Base
        key="base"
        {...props}
      />
    </div>
  WithLabel.displayName = `withLabel(${Base.displayName})`
  return WithLabel
}
