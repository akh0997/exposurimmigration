import { FieldValues, UseFormRegister } from "react-hook-form";

const Input = ({
  type,
  register,
  label,
  placeholder,
  controlName,
  errorMessage,
  customClass,
}: {
  type: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  controlName: string;
  customClass?: string;
}) => {
  return (
    <div className={`text-start ${customClass}`}>
      {label && <label className="form-label">{label}</label>}
      <div className="mb-3">
        <input
          className="form-control"
          type={type}
          {...register(controlName)}
          placeholder={placeholder}
        />
        {type === "password" && <span className={`text-danger`}> </span>}
      </div>
      {errorMessage && <span className={`text-danger`}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
