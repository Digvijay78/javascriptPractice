import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';

function App() {

  const [index , setIndex] = useState(0)

  const imageSider = ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
                       "https://static.vecteezy.com/system/resources/thumbnails/025/061/745/small/4k-beautiful-colorful-abstract-wallpaper-photo.jpg",
                       "https://www.lifewire.com/thmb/T7a6QlzUPEpua3OKx7V_pCvBY14=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/forest-wallpaper-af78609605b14f7c9b999d8b2f49c0d9.jpg",
                       "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg"

  ]
  
  const handlePrev = () => {
     if (index ===0) return setIndex(prevIndex => imageSider.length -1 );

     setIndex(prevIndex => prevIndex - 1)
  }
  const handleAfter = () => {
     if (index === imageSider.length -1) return  setIndex(prevIndex => 0 );

     setIndex(prevIndex => prevIndex + 1)
  }


  useEffect(() => {
   const timer = setTimeout(() => {
      handleAfter();
      // console.log("hi");
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  },[index])

  return (
    <div className="App">
      <Header  />

      <div>
        <button onClick={handlePrev} > prev </button>

        {imageSider.map((el,i) => {
          return <img key = {new Date() + i}  src = {el} alt = "" className={'image ' + (i === index ? "" : "hidden") }  />
        })}

      
        <button onClick={handleAfter} > next </button>
      </div>
    </div>
  );
}

export default App;
