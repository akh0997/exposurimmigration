import { Controller } from "react-hook-form";
const DropDown = ({
  options,
  control,
  label,
  controlName,
  errorMessage,
  customClass,
  dropDownClass,
}: {
  options: { value: string; label: string }[];
  control: any;
  label: string;
  controlName: string;
  errorMessage?: string;
  customClass?: string;
  dropDownClass?: string;
}) => {
  return (
    <div className={`text-start ${customClass}`}>
      {label && <label className="form-label">{label}</label>}
      <Controller
        control={control}
        name={controlName}
        render={({ field: { onChange, value } }) => (
          <select
            className={`form-select ${dropDownClass}`}
            aria-label="Default select example"
            onChange={onChange}
            value={value}
          >
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      ></Controller>
      {errorMessage && <span className={`text-danger`}>{errorMessage}</span>}
    </div>
  );
};
export default DropDown;
