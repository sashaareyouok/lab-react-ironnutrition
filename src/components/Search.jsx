import { Divider, Input } from 'antd';
import { useState } from 'react';


// Iteration 5
function Search({filterDisplay}) {
    const [query, setQuery] = useState('')
  return (

    <div style= {{width:'40%' , margin: 'auto'}}> 
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="text" onChange={(e) => {
        setQuery(e.target.value)
        filterDisplay(e.target.value)
    }}

     />
    
      </div>
  )
}

export default Search;