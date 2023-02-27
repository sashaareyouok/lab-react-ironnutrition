import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(addFood) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')


    const handleName = e => setName(e.target.value)


    const handleSubmit = e => {
        e.preventDefault()

        const newFood = {
            name,
            image,
            calories,
            servings
        }

        addFood(newFood)

        setName("")
        setImage('')
        setCalories('')
        setServings('')
    }

  return (
    <form style={{width: "40%", margin: 'auto'}} onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name
      <Input value={name} type="text" onChange={handleName} />
      </label>

      <label>Image
      <Input value={image} type="text" onChange={(e)=>{setImage(e.target.value)}} />
      </label>
      
      <label>Calories
      <Input value={calories} type="number" onChange={(e)=>{setCalories(e.target.value)}} />
      </label>
      
      <label>Servings
      <Input value={servings} type="number" onChange={(e)=>{setServings(e.target.value)}} />
      </label>
      

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
