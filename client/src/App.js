import axios from 'axios';
import {useState, UseEffect} from 'react';

import './App.css';


function App() {

  const [type, setType] = useState('Choose something :-)');
  const [text, setText] = useState(undefined);

  // Axios request functions

  async function AxiosGet(){
    try {
      const data = await axios.get('http://localhost:3333/posts/')
      console.log(data.data);
      setType('Axios/Get');
      setText(JSON.stringify(data.data, null, 2));
    }catch(e){
      console.error(e.message);
    }
  };

  async function AxiosPost(){
    try{
      const post = {title: 'axios test post', description: 'axios test post. I hope it was sent successfuly'};
      const result = await axios.post('http://localhost:3333/posts/', post);
      console.log(result.data);
      setType('Axios/POST');
      setText(JSON.stringify(result.data, null, 2));
    }catch(e){console.error(e.message)}
  };

  async function AxiosDelete(){
    try{
      const result = await axios.delete('http://localhost:3333/posts/60897587176b2140ec1b9c8d')
      console.log(result.data);
      setType('Axios/Delete');
      setText(JSON.stringify(result.data, null, 2));
    }catch(e) {console.error(e.message)}
  };

  async function AxiosPatch(){
    try{
      const result = await axios.patch('http://localhost:3333/posts/60896930176b2140ec1b9c8c',{title:'Whoops it is not the last one2 '});
      console.log(result.data);
      setType('Axios/Patch');
      setText(JSON.stringify(result.data, null, 2));
    }
    catch(e) {console.error(e.message)}
  };


  // Fetch request functions

  async function FetchGet(){
    try{
      const response = await fetch('http://localhost:3333/posts/');
      const data = await response.json();
      console.log(data);
      setType('Fetch/Get');
      setText(JSON.stringify(data, null, 2));
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
      setType('Fetch/Post');
      setText(JSON.stringify(json, null, 2));
      console.log(json);
    }catch(e) {console.error(e.message)}
  }

  async function FetchDelete(){
    try{
      const response = await fetch('http://localhost:3333/posts/60898491176b2140ec1b9c90',{method:'DELETE'});
      const json = await response.json();
      console.log(json);
      setType('Fetch/Delete');
      setText(JSON.stringify(json, null, 2));
    }catch(e){console.error(e.message)}
  }

  async function FetchPatch(){
    try{
      const response = await fetch('http://localhost:3333/posts/608976e1176b2140ec1b9c8e',{
        method: 'PATCH',
        body: JSON.stringify({title:'Whoops it is not the last one'}),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      const json = await response.json();
      console.log(json);
      setType('Fetch/Patch');
      setText(JSON.stringify(json, null, 2));
    }catch(e){console.error(e.message)}
  };




  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="flex flex-col items-center text-center text-white bg-black py-5 w-5/6 mx-auto rounded mt-5">
        <header>
          <h1 className="text-5xl font-bold header text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">Axios Report</h1>
          <h2 className="pt-2 text-2xl casual text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">Axios vs Fetch</h2>
        </header>
      </div>

      <div className="pt-20 grid grid-cols-2">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold header">Axios</h2>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={AxiosGet}>Send GET request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={AxiosPost}>Send POST request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={AxiosDelete}>Send DELETE request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={AxiosPatch}>Send PATCH request</button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold header">Fetch</h2>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={FetchGet}>Send GET request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={FetchPost}>Send POST request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={FetchDelete}>Send DELETE request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded-xl casual jumping" onClick={FetchPatch}>Send PATCH request</button>
        </div>
      </div>
      <div className="flex flex-col items-center w-5/6 text-white bg-black mx-auto my-10 rounded-xl ">
        <div className="pt-5 font-bold text-xl">
          {type}
        </div>
        <div className="w-5/6 py-5 text-lg">
        <pre>{text}</pre>
        </div>
      </div>

      <button className="w-1/4 py-3 mb-10 text-white bg-black font-bold rounded-xl casual jumping mx-auto">
        Get File
      </button>
      
      <div className="flex flex-col text-center text-white bg-black py-5 w-5/6 mx-auto rounded mt-auto mb-5">
        <div className="pl-10 casual text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">by Anton Podkur, IV-92</div> 
      </div>
      
    </div>
  );
}

export default App;
