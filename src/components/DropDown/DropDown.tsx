import { Controller } from "react-hook-form";
const DropDown = ({
  options,
  control,
  label,
  controlName,
  errorMessage,
  customClass,
  dropDownClass,
  required,
}: {
  options: { value: string; label: string; icon?: string }[];
  control: any;
  label: string;
  controlName: string;
  errorMessage?: string;
  customClass?: string;
  dropDownClass?: string;
  required?: boolean;
}) => {
  return (
    <div className={`text-start ${customClass}`}>
      {label && (
        <label className="form-label">
          {label}
           {required && <span className="text-danger"> *</span>}
        </label>
      )}
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
            <option disabled selected>
              Select
            </option>
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
