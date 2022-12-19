type Props = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  type?: string;
  disabled?: boolean;
  className?: string;
};

const ButtonTypes = {
  'blue': 'enabled:bg-blue-500 enabled:hover:bg-blue-600 ',
  'green': 'enabled:bg-green-500 enabled:hover:bg-green-600',
  'yellow': 'enabled:bg-yellow-500 enabled:hover:bg-yellow-600',
  'orange': 'enabled:bg-orange-500 enabled:hover:bg-orange-600',
  'red': 'enabled:bg-red-500 enabled:hover:bg-red-600',
  'violet': 'enabled:bg-violet-500 enabled:hover:bg-violet-600',
  'opacity': 'enabled:bg-white/20 enabled:hover:bg-white/30 '
}

const Button = (props: Props) => {
  const {
    type = "pink",
    size = "md",
    disabled = false,
    className = "",
    children,
    icon,
  } = props;

  // 按鈕的尺寸
  const btnSize = "btn-" + size;

  // 按鈕的顏色
  const bgStyle = "btn-" + type;

  return (
    <button
      disabled={disabled}
      className={`
        ${children ? "btn" : "btn-icon"}
        ${ButtonTypes[type as keyof typeof ButtonTypes]}
        ${bgStyle}
        ${btnSize}
        ${className}
      `}
    >
      {children ? (
        <>
          {icon}
          {children}
        </>
      ) : icon}
    </button>
  );
};

export default Button;
