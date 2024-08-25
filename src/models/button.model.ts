export interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  buttonClass?: string;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: any;
  onClick?: (e?: any) => void;
}
