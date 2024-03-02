import { useState } from "react";

export const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const handlerOnchange = (event) => {
        setInputValue(event.target.value);
    }
    const handlerOnSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return;
        addCategory(inputValue.trim());
        setInputValue("");
    }

  return (
    <form onSubmit={(event)=>handlerOnSubmit(event)} >
        <input 
            value={inputValue}
            type="text" 
            name="category" 
            id="category" 
            placeholder="Buscar Gifs"
            onChange={handlerOnchange}
            />
        <button>Agregar</button>
    </form>
  )
};
