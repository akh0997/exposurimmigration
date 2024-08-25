import { CustomButtonProps } from "../../models/button.model";
const Button = ({
  label = "",
  buttonClass,
  loading = false,
  type = "button",
  disabled = false,
  children,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`${buttonClass}`}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
