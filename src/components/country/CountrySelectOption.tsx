import { OptionProps, components } from "react-select";
import { ISelectOption } from "./countryInterfaces";

/* --- [TASK] ---
Country flags in select field

CURRENT SCENARIO
- The `CountrySelect` displays only the names of the countries.

DESIRED SCENARIO
- The `CountrySelect` displays the corresponding country flag next to the title.
- Flags are visible in both the options and the input field, drawing inspiration from this example:

FURTHER DETAILS
- No expectation to alter the dimensions of the select field, though it's optional.
- Implement a well-considered layout strategy.
- Retrieve flag icons from:
    `https://catamphetamine.gitlab.io/country-flag-icons/3x2/<ISO_CODE>.svg` (codes are in uppercase)
- Note that the `'i18n-iso-countries'` package in use already contains the compatible codes.
- Flags appearing on the `SettingsSelector`-Button is optional
--- [TASK] --- */

// Component
export const CountrySelectOption = (props: OptionProps<ISelectOption>) => {
  return (
    <div className="country-select-option">
      <components.Option {...props}>
        <img src={props.data.value.icon} alt={props.data.label} />
        {props.data.label}
        </components.Option>
    </div>
  );
};
