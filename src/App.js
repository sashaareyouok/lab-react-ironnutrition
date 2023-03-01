import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import foodData from "./foods.json"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useState } from 'react';

function App() {

const [foods, setFoods] = useState(foodData)
//first state 

//we doing that as it holds all products / before search functionality 
const [display, setDisplay] = useState(foodData)
//master state 

const addFood = (foodToAdd) => {

  const newList = [foodToAdd, ...foods]
  const  newDisplay = [foodToAdd, ...display]
  setFoods(newList)
  setDisplay(newList)


// Functional update on the setFood 

//It will take the last version of the state and execute the update 
//we should not update state directly, 
// first copy the state and then change the copy 

// setFoods((prevFoodList)=>{
// return [foodToAdd, ...prevFoodList]
// })


const filterDisplay = (foodName) => {
  const filteredFoods = foods.filter((food) => 
    food.name.toLowerCase().includes(foodName.toLowerCase())
    );
    setDisplay(filteredFoods)
};

//this will look at what we put in search and compare with what we have in display(master state)


}
  
  return (

  
    <div className="App">
     
    <AddFoodForm addFood={addFood}></AddFoodForm>
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      <Search filterDisplay={filterDisplay}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {display.map(food=><FoodBox  {...food} key={food.name}/>)}
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