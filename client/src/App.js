// import {UseState, UseEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  // const [result, setResult] = UseState(undefined);

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
      const result = await axios.delete('http://localhost:3333/posts/608938d2176b2140ec1b9c84')
      console.log(result.data);
    }catch(e) {console.error(e.message)}
  };

  async function AxiosPatch(){
    try{
      const result = await axios.patch('http://localhost:3333/posts/60893a1a176b2140ec1b9c85',{title:'Whoops it is not the last one'});
      console.log(result.data);
    }
    catch(e) {console.error(e.message)}
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center text-white bg-black py-5 w-5/6 mx-auto rounded">
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
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping">Send GET request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping">Send POST request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping">Send DELETE request</button>
          <button className="w-1/4 py-3 my-2 text-white bg-black rounded casual jumping">Send PATCH request</button>
        </div>
      </div>
    </div>
  );
}

export default App;
