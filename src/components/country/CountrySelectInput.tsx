import { ValueContainerProps, components } from "react-select";
import { ISelectOption } from "./countryInterfaces";

// Component
export const CountrySelectInput = ({children, ...props}: ValueContainerProps<ISelectOption>) => {
  const selectedCountry = props.getValue()?.[0] ?? {}

  return components.ValueContainer && (
    <div className="country-select-input">
      <components.ValueContainer {...props}>
        <img src={selectedCountry.value.icon} alt={selectedCountry.value.name} />
        {children}
        </components.ValueContainer>
    </div>
  );
};