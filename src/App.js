import { useEffect, useState } from "react";
import {useTransition,animated} from "react-spring"

function App() {


  const image=[
    "4338151/pexels-photo-4338151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "4915976/pexels-photo-4915976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "4318239/pexels-photo-4318239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]

  const [position,setPosition] = useState(0)

  const transitions = useTransition(position,{

    //this will help us to add fade in effect by changing opacity
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    //in order to add smooth transition we will use a config property
    config:{duration:2000}
  })

  useEffect(()=>{
      setInterval(()=>{
        setPosition(index=>(index+1)%image.length)
      },4000)
  },[])
  return (
    <div >
        {transitions((style,index)=>(
          // in order to use animation a div must be animated
          <animated.div
          style={{
            ...style,
            position: "absolute",
            width:"100vw",
            height:"100vh",
            backgroundPosition:"center",
            backgroundSize:"cover",
            top:0,
            left:0,

            backgroundImage:`url(https://images.pexels.com/photos/${image[index]})`
          }}
            
          />
        ))}
    </div>
  );
}

export default App;
