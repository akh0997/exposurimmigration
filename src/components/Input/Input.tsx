import { Controller, FieldValues, UseFormRegister } from "react-hook-form";
import { InputType } from "../../enums/Input.enum";

const Input = ({
  type,
  register,
  label,
  placeholder,
  controlName,
  errorMessage,
  customClass,
  control,
}: {
  type: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  controlName: string;
  customClass?: string;
  control?: any;
}) => {
  const getInputByType = () => {
    switch (type) {
      case InputType.Numeric: {
        return (
          control && (
            <Controller
              render={({ field }) => (
                <input
                  className="form-control"
                  type="text"
                  placeholder={placeholder}
                  onChange={(e) => {
                    const re = /^[-][0-9]*$/;
                    const re2 = /^[0-9]+$/;
                    if (
                      e.target.value === "" ||
                      re2.test(e.target.value) ||
                      (re.test(e.target.value) &&
                        e.target.value.lastIndexOf("-") <= 0)
                    ) {
                      field.onChange(e.target.value);
                    } else if (e.target.value.length === 1) {
                      field.onChange("");
                    }
                  }}
                  value={field.value}
                />
              )}
              name={controlName}
              control={control}
            />
          )
        );
      }
      default: {
        return (
          <input
            className="form-control"
            type={type}
            {...register(controlName)}
            placeholder={placeholder}
          />
        );
      }
    }
  };

  return (
    <div className={`text-start ${customClass}`}>
      {label && <label className="form-label">{label}</label>}
      <div className="mb-3">
        {/* <input
          className="form-control"
          type={type}
          {...register(controlName)}
          placeholder={placeholder}
        /> */}
        {getInputByType()}
        {type === "password" && <span className={`text-danger`}> </span>}
      </div>
      {errorMessage && <span className={`text-danger`}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
