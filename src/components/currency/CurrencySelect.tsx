import CurrencyData from "currency-codes";
import Select from "react-select";
import { DEFAULT_CURRENCY } from "../../constants/defaultValues";

// Props
export interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: string) => void;
}


// Component
const CurrencySelect = ({
  value = DEFAULT_CURRENCY,
  onChange,
}: CurrencySelectProps) => {
  // Prepare data
  const data = CurrencyData.data.map(({ code, currency }) => {
    return {
      value: code + " - " + currency,
      label: code + " - " + currency,
    };
  });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          isMulti={false}
          onChange={(newValue) => {
            onChange?.(newValue?.value ?? '');
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
