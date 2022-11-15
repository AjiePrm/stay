import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

//declare type of props
export default function Button(props) {
  const className = [props.className]
  if (props.isPrimary) className.push("btn-primary")
  if (props.isLarge) className.push("btn-lg")
  if (props.isSmall) className.push("btn-sm")
  if (props.isBlock) className.push("btn-block")
  if (props.hasShadow) className.push("btn-shadow")

  //onClick func
  const onClick = () => {
    if(props.onClick) props.onClick()
  }

  //func to render disabled button
  if(props.isDisabled || props.isLoading){
    if(props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
        <React.Fragment>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
        </React.Fragment>) : (
            props.children
          )
        }
      </span>
    )
  }

  //props external link
  if (props.type === "link"){
    if(props.isExternal){
      return (
      <a href={props.href}  className={className.join(" ")} style={props.style} target={props.target === "_blank" ?"_blank": undefined} rel = {props.target === "_blank" ?"noopener noreferer": undefined}>{props.children}</a>
      )
    }else{
      //props to internal app link
      return(
        <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>{props.children}</Link>
      )

    }
  }

  return (
    <button className={className.join(" ")} style={props.style} onClick={onClick}>{props.children}</button>
  )
}

//declare proptype of component button
Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool


}