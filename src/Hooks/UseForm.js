import { useState } from "react"

export const UseForm = (initialState={}) => {
  const [formValues, setformValues] = useState(initialState)

  const handleInputChange = ({target}) =>{
    setformValues({
      ...formValues,
      [target.name] : target.value
    });
  };

  return [formValues, handleInputChange];
}
