import React,{ useState } from 'react' ;
import Tweet from './Tweet';
import data from './characters.json';

function App(){

  const [searchTerm,setSearchTerm] = useState('')

  return(

    <div className='app' align = 'center'>
    <div class="md-form mt-0">
      <input class="form-control" type="text" onChange={event =>{setSearchTerm(event.target.value)}} placeholder="Search Characters in The Breaking Bad" aria-label="Search"></input>
    </div>
    <div class='spacer'></div>
    <b>Click on boxes to toggle between informative mode and normal mode</b>
      {data.filter((user)=>{
        if(searchTerm=="")
        {
          return user ;
        }
        else if(user.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return user ;
        }
      }).map(user =>(
        <Tweet char_id = {user.char_id} name={user.name} image={user.img} message={user.occupation} dob ={user.birthday} status ={user.status} nick={user.nickname} appearance ={user.appearance} category={user.category} portrayed={user.portrayed}/>
      ))
    }
    </div>
  );
}

export default App ;
