import { COUNTRY_CODES } from "../../constants/technicalEvaluation.constant";
import style from "./CountryDropDown.module.scss";
const CountryDropDown = ({ onOptionClick, value }: any) => {
  return (
    <div className="dropdown ">
      <button
        className={`form-select dropdown-toggle text-start ${style.dropdown_toggle_button} bg-light`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {value ? (
          <>
            <img
              src={value.icon}
              alt={value.name}
              className={`ms-2 ${style.icon_image}`}
            />

            <span className="text-secondary ms-2">+{value.dialCode}</span>
          </>
        ) : (
          "Select"
        )}
      </button>
      <ul
        className={`dropdown-menu overflow-scroll ${style.option_height}`}
        aria-labelledby="dropdownMenuButton1"
      >
        {COUNTRY_CODES.map((el) => (
          <li
            className={`${style.item}`}
            onClick={() => onOptionClick("personalDetails.countryCode", el)}
            key={el.countryCode}
          >
            <img
              src={el.icon}
              alt={el.name}
              className={`ms-2 ${style.icon_image}`}
            />{" "}
            {el.name} <span className="text-secondary">+{el.dialCode}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CountryDropDown;
