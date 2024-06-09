const Button = ({
  text,
  className,
  type,
}: {
  text: string;
  className?: string;
  type?: string;
}) => {
  return <button className={`btn ${className}`}>{text}</button>;
};

export default Button;
