// src/components/Button/Button.jsx
import React from "react";
import "./Button.css";

const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      className = "",
      disabled = false,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`btn btn-${variant} btn-${size} ${
          fullWidth ? "btn-full" : ""
        } ${isLoading ? "btn-loading" : ""} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="btn-loader" aria-hidden="true"></span>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;