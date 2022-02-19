import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];

  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onCLick = () => {
    if (props.onCLick) props.onCLick();
  };

  if (props.isDisable || props.isLoading) {
    if (props.isDisable) className.push("disable");

    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading ...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    props.isExternal ? (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        href={props.href}
        className={className.join(" ")}
        style={props.style}
        target={props.target === "_blank" ? "_blank" : null}
        rel={props.target === "_blank" ? "noopener noreferrer" : null}
      >
        {props.children}
      </a>
    ) : (
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={onCLick}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onCLick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onCLick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisable: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool
};