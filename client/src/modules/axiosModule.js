import axios from 'axios';

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
      const result = await axios.delete('http://localhost:3333/posts/60893a1a176b2140ec1b9c85')
      console.log(result.data);
    }catch(e) {console.error(e.message)}
  };

  async function AxiosPatch(){
    try{
      const result = await axios.patch('http://localhost:3333/posts/60895200176b2140ec1b9c87',{title:'Whoops it is not the last one2 '});
      console.log(result.data);
    }
    catch(e) {console.error(e.message)}
  };

export {
    AxiosGet,
    AxiosPost,
    AxiosPatch,
    AxiosDelete
}