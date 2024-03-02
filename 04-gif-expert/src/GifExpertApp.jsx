import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Naruto']);

  const addCategory = (newCategory) => {
    if(!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  }

  return (
    <div>
      <h1>GifExpertApp</h1>
 
        {categories.map(category => 
        (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))}
 
      <AddCategory addCategory={addCategory}/>
    </div>
  )
};
