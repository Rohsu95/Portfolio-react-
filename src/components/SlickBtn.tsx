import React from "react";

interface SlickProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function SampleNextArrow(props: SlickProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "20px" }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props: SlickProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "40px" }}
      onClick={onClick}
    />
  );
}
