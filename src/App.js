import './App.css';
import ReactPlayer from 'react-player/lazy'
import React, { useEffect, useState} from 'react'
import env from "react-dotenv";
import backgroud from './backgrounds'

function App() {
  const [running, setRunning] = useState("")
  const [videoPlayer, setVideoPlayer] = useState(true)
  
  useEffect(()=>{
      setRunning(`${backgroud[0].name}.${backgroud[0].type}`)     
  }, [backgroud])

  const handleOption = (e) => {
    setRunning(e.target.value)
    if(e.target.value.includes(".mp4")){
      setVideoPlayer(true)
    }else{
      setVideoPlayer(false)
    }
    return
  }

  return (
    <div className="App-header">     
      {videoPlayer ? 
        <ReactPlayer 
        url={`${env.PUBLIC_URL}${running}`} 
        muted={true}
        volume={0}
        playing={true}
        controls={true}
        loop={true}
        fallback={null}
        /> 
        :
        <img src={`${env.PUBLIC_URL}${running}`}  alt="logo" /> 
      }      
      <select 
        name="select-bg" 
        id="select-bg"
        value={running}
        onChange={(e) => handleOption(e)}
      >
      {backgroud.map((item) => (
          <option key={item.name + "." +item.type} value={item.name + "." +item.type}>
              {" "}
              {item.name}.{item.type}{" "}
          </option>
      ))}
      </select>
    </div>
  );
}

export default App;


// value={item.name + "." +item.type}