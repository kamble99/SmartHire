import React from 'react'

const Button = (props) => {
  return (
    <>
      <a to="/register" className={`btn ${props.class}`}>{props.text}</a>
    </>
  )
}

export default Button
