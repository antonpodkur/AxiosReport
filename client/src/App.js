import axios from 'axios';
import {useState} from 'react';

import './App.css';


function App() {

  const [type, setType] = useState('Choose something :-)');
  const [text, setText] = useState(undefined);
  const [id, setId] = useState('');

  // Axios request functions

  async function AxiosGet(){
    try {
      const data = await axios.get(`${window.location}posts/`)
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
      const result = await axios.post(`${window.location}posts/`, post);
      console.log(result.data);
      setType('Axios/POST');
      setText(JSON.stringify(result.data, null, 2));
    }catch(e){console.error(e.message)}
  };

  async function AxiosDelete(){
    try{
      const result = await axios.delete(`${window.location}posts/${id}`)
      setId('');
      console.log(result.data);
      setType('Axios/Delete');
      setText(JSON.stringify(result.data, null, 2));
    }catch(e) {console.error(e.message)}
  };

  async function AxiosPatch(){
    try{
      const result = await axios.patch(`${window.location}posts/${id}`,{title:'Whoops it is not the last one2 '});
      setId('');
      console.log(result.data);
      setType('Axios/Patch');
      setText(JSON.stringify(result.data, null, 2));
    }
    catch(e) {console.error(e.message)}
  };


  // Fetch request functions

  async function FetchGet(){
    try{
      const response = await fetch(`${window.location}posts/`);
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
      const response = await fetch(`${window.location}posts/`, {
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
      const response = await fetch(`${window.location}posts/${id}`,{method:'DELETE'});
      setId('');
      const json = await response.json();
      console.log(json);
      setType('Fetch/Delete');
      setText(JSON.stringify(json, null, 2));
    }catch(e){console.error(e.message)}
  }

  async function FetchPatch(){
    try{
      const response = await fetch(`${window.location}posts/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({title:'Whoops it is not the last one'}),
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      setId('');
      const json = await response.json();
      console.log(json);
      setType('Fetch/Patch');
      setText(JSON.stringify(json, null, 2));
    }catch(e){console.error(e.message)}
  };


  async function DownloadFile(){
    try{
      window.open(`${window.location}files/getFile`);
    }catch(e){console.error(e.message)}
  }


  const handleChange = (event) => setId(event.target.value);



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
          <h2 className="text-xl sm:text-2xl font-bold header">Axios</h2>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={AxiosGet}>Send GET request</button>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={AxiosPost}>Send POST request</button>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={AxiosDelete}>Send DELETE request</button>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={AxiosPatch}>Send PATCH request</button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl sm:text-2xl font-bold header">Fetch</h2>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={FetchGet}>Send GET request</button>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={FetchPost}>Send POST request</button>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={FetchDelete}>Send DELETE request</button>
          <button className="w-1/2 sm:w-1/3 py-3 my-2 text-white text-sm sm:text-base bg-black rounded-xl focus:outline-none casual jumping" onClick={FetchPatch}>Send PATCH request</button>
        </div>
      </div>

      <div className="mx-auto pt-2" >
        <input type="text" placeholder="id:" value={id} className="rounded-xl bg-black text-white outline-none border-2 border-black px-2 py-1 casual font-bold" onChange={handleChange}/>
      </div>

      <div className="flex flex-col items-center w-full sm:w-5/6 text-white bg-black mx-auto my-10 rounded-xl ">
        <div className="pt-5 font-bold text-xl">
          {type}
        </div>
        <div className="w-full sm:w-5/6 py-5 text-xs sm:text-lg">
        <pre>{text}</pre>
        </div>
      </div>

      <button className="w-1/4 py-3 mb-10 text-white bg-black font-bold rounded-xl focus:outline-none casual jumping mx-auto"
      onClick={DownloadFile}>
        Get File
      </button>
      
      <div className="flex flex-col text-center text-white bg-black py-5 w-5/6 mx-auto rounded mt-auto mb-5">
        <div className="pl-10 casual text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">by Anton Podkur, IV-92</div> 
      </div>
      
    </div>
  );
}

export default App;
