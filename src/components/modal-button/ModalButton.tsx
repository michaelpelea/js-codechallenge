import { memo, useRef } from "react";

export interface IModalButtonProps {
  onClickButton: () => void
  country: string
  currency: string
  language: string
}


  const ModalButton = memo(({ country, currency, language, onClickButton }: IModalButtonProps) => {
    // Render Counter
    const counterRef = useRef(0);

    // Increase render count. 
    counterRef.current++;

    // Log current render count.
    console.log("Render count of button is: " + counterRef.current);

    /* Button */
    return (
      <button onClick={onClickButton}>
        {country} - ({currency} - {language})
      </button>
    );
  });

  export default ModalButton