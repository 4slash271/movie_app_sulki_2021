import React from 'react';

function Animal({name, pics}){
  return(
  <div>
    <h1>I like a {name}!</h1>
    <img src={pics} alt={name}/>
  </div>
  );
}

const animalLike = [
  { id: 1,
    name: "cat",
    image: "https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg" 
  },
  { id:2,
    name: "rabbit",
    image: "https://cuzrabbits.files.wordpress.com/2021/03/polish_20191130_222814796.jpg"
  },
  { id:3,
    name: "dog",
    image: "https://www.memeandfacts.com/wp-content/uploads/2021/03/dog-meme-template-8-780x780.jpg"
  },
  { id:4,
    name: "rat",
    image: "https://i.chzbgr.com/full/8241272832/h3CA500E0/like-the-mouse-version-of-sam-fischer"
  },
  { id:5,
    name: "bear",
    image: "https://i.imgflip.com/222bjf.jpg"
  },
  { id:6,
    name: "bird",
    image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg"
  }
];
function App() {
  return (
    <div>
     {animalLike.map(pets => (
     <Animal key ={pets.id} name = {pets.name} pics = {pets.image}/>
     ))}
    </div>
   
  );
}

export default App;
