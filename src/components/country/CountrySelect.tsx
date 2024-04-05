import countries from "i18n-iso-countries";
import Select from "react-select";
import { DEFAULT_COUNTRY } from "../../constants/defaultValues";
import { getCountryIcon } from "../libs/utils";
import { CountrySelectInput } from "./CountrySelectInput";
import { CountrySelectOption } from "./CountrySelectOption";
import { ISelectOption, IValue } from "./countryInterfaces";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).


// Props
export interface CountrySelectProps {
  value?: IValue;
  onChange?: (value: any) => void;
}

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name, icon: getCountryIcon(code) },
      label: name,
    };
  });
  
  const defaultValue: ISelectOption = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        Country
        <Select
          options={data}
          isMulti={false}
          components={{ Option: CountrySelectOption, ValueContainer: CountrySelectInput }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            onChange?.(newValue?.value ?? '');
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
