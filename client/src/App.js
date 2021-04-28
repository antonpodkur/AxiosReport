import axios from 'axios';

import './App.css';


function App() {

  // Axios request functions

  async function AxiosGet(){
    try {
      const data = await axios.get('http://localhost:3333/posts/')
      console.log(data.data);
    }catch(e){
      console.error(e.message);
    }
  };

  async function AxiosPost(){
    try{
      const post = {title: 'axios test post', description: 'axios test post. I hope it was sent successfuly'};
      const result = await axios.post('http://localhost:3333/posts/', post);
      console.log(result.data);
    }catch(e){console.error(e.mesasge)}
  };

  async function AxiosDelete(){
    try{
      const result = await axios.delete('http://localhost:3333/posts/60895d53176b2140ec1b9c8b')
      console.log(result.data);
    }catch(e) {console.error(e.message)}
  };

  async function AxiosPatch(){
    try{
      const result = await axios.patch('http://localhost:3333/posts/60895c73176b2140ec1b9c8a',{title:'Whoops it is not the last one2 '});
      console.log(result.data);
    }
    catch(e) {console.error(e.message)}
  };


  // Fetch request functions

  async function FetchGet(){
    try{
      const response = await fetch('http://localhost:3333/posts/');
      const data = await response.json();
      console.log(data);
    }catch(e){
      console.log(e.message);
    }
  };

  async function FetchPost(){
    try{
      const response = await fetch('http://localhost:3333/posts/', {
        method: 'POST',
        body: JSON.stringify({title: 'axios test post', description: 'axios test post. I hope it was sent successfuly'}), 
        headers: {
          'Content-Type': 'application/json'
        }    
      });
      const json = await response.json();
      console.log(json);
    }catch(e) {console.error(e.message)}
  }


  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center text-center text-white bg-black py-5 w-5/6 mx-auto rounded mt-5">
        <header>
          <h1 className="text-5xl font-bold header">Axios Report</h1>
          <h2 className="pt-2 text-2xl casual">Axios vs Fetch</h2>
        </header>
      </div>

      <div className="pt-20 grid grid-cols-2">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold header">Axios</h2>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping" onClick={AxiosGet}>Send GET request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping" onClick={AxiosPost}>Send POST request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping" onClick={AxiosDelete}>Send DELETE request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping" onClick={AxiosPatch}>Send PATCH request</button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold header">Fetch</h2>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping" onClick={FetchGet}>Send GET request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping" onClick={FetchPost}>Send POST request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping">Send DELETE request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping">Send PATCH request</button>
        </div>
      </div>
      <div className="flex flex-col text-center text-white bg-black py-5 w-5/6 mx-auto rounded mt-auto mb-5">
        <div className="pl-10 casual">by Anton Podkur, IV-92</div> 
      </div>
      
    </div>
  );
}

export default App;
