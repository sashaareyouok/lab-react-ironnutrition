import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import foodData from "./foods.json"
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';

function App() {

const [foods, setFoods] = useState(foodData)

const addFood = (foodToAdd) => {
  setFoods((prevFoodList)=>{
  return [foodToAdd, ...prevFoodList]
})
}
  
  return (

  
    <div className="App">
     
    <AddFoodForm addFood={addFood}></AddFoodForm>
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(food=><FoodBox  {...food} key={food.name}/>)}
      </Row>

      

    </div>
  );
}

export default App;


// iteration 1 we rendering a simple  

// {foodData.map(food=><FoodBox  {...food}/>)}list with map method 

// this can be <FoodBox food={food}/> but we destructure it 
// we also destructured it in props in FoodBox component 

// we creating foods state here as our food list is gonna change, state will help to change it dinamicly 
// than creating a function that we grab info that we put in form and save it as state 



// const addFood = (foodToAdd) => {

// const newList = [foodToAdd, ...foods]

// setFoods(newList) =>

// const addFood = (foodToAdd) => {
  // setFoods((prevFoodList)=>{
  //   return [foodToAdd, ...prevFoodList]
  // })
  // }