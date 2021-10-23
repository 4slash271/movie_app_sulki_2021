import React from 'react';
import PropTypes from 'prop-types';

function Animal({name, pics, rating}){
  return(
  <div>
    <h1>I like a {name}!</h1>
    <h4>{rating}/5.0</h4>
    <img src={pics} alt={name}/>
  </div>
  );
}
Animal.propTypes = {
  name:PropTypes.string.isRequired,
  pics:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
};

const animalLike = [
  { id: 1,
    name: "cat",
    image: "https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg",
    rating: 3.0
  },
  { id:2,
    name: "rabbit",
    image: "https://cuzrabbits.files.wordpress.com/2021/03/polish_20191130_222814796.jpg",
    rating: 6.9
  },
  { id:3,
    name: "dog",
    image: "https://www.memeandfacts.com/wp-content/uploads/2021/03/dog-meme-template-8-780x780.jpg",
    rating: 8.7
  },
  { id:4,
    name: "rat",
    image: "https://i.chzbgr.com/full/8241272832/h3CA500E0/like-the-mouse-version-of-sam-fischer",
    rating: 2.0
  },
  { id:5,
    name: "bear",
    image: "https://i.imgflip.com/222bjf.jpg",
    rating: 6.7
  },
  { id:6,
    name: "bird",
    image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg",
    rating: 3.9
  }
];
function App() {
  return (
    <div>
     {animalLike.map(pets => (
     <Animal key ={pets.id} 
             name = {pets.name} 
             pics = {pets.image} 
             rating = {pets. rating}/>
     ))}
    </div>
   
  );
}

export default App;
