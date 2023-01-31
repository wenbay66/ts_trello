type Props = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  type?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void
};

const ButtonTypes: Record<string , string> = {
  'blue': 'btn-blue',
  'white': 'btn-white',
  'green': 'btn-green',
  'yellow': 'btn-yellow',
  'orange': 'btn-orange',
  'red': 'btn-red',
  'violet': 'btn-violet',
  'opacity': 'btn-opacity',
  'navbar': 'btn-navbar'
}

const Button = (props: Props) => {
  const {
    type = "blue",
    size = "sm",
    disabled = false,
    className = "",
    children,
    icon,
    onClick,
  } = props;

  // 按鈕的尺寸
  const btnSize = "btn-" + size;

  // 按鈕的顏色
  const bgStyle = "btn-" + type;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${children ? "btn" : "btn-icon"}
        ${ButtonTypes[type as keyof typeof ButtonTypes]}
        ${bgStyle}
        ${btnSize}
        ${className}
      `}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
