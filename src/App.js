import React, { Component } from 'react';
import './App.css';

const Secondstotime=totalSeconds=>{
  const hours=Math.floor(totalSeconds/3600)
  const minutes=Math.floor((totalSeconds%3600)/60)
  const seconds=((totalSeconds%3600)%60)
  return {
    seconds,
    minutes,
    hours
  }
}

/************************************************************************ */
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      seconds:0 ,
      test:true 
    };
  }  
  
  /*********************************************************************** */
   Start=()=>{
     if(this.state.seconds===0 && this.state.test===true){
        this.myVar=setInterval(()=>{ 
        this.setState({seconds:this.state.seconds+1})}, 1000);
        alert("1");
      }
      if(this.state.seconds!==0 && this.state.test===true){
      clearInterval(this.myVar);
      this.setState({test:false});
      alert("2");
     }
     if(this.state.seconds!==0 && this.state.test===false){
      this.myVar=setInterval(()=>{
      this.setState({seconds:this.state.seconds+1})}, 1000);
      this.setState({test:true});
      alert("3");
    }
  }
  /*********************************************************************** */
  Reset=()=>{
    this.setState({seconds:0});
    this.setState({minutes:0});
    this.setState({hours:0});
    this.setState({test:true});
    clearInterval(this.myVar);

  }
 /*********************************************************************** */

  render(props) {
    const timeObject=Secondstotime(this.state.seconds);
    return (
      <div className="body">
          <h1>{String(timeObject.hours).padStart(2,'0')}:{String(timeObject.minutes).padStart(2,'0')}:{String(timeObject.seconds).padStart(2,'0')}</h1> 
          <div className="commande">
             <button className="startbtn" type="button" onClick={() => this.Start()} >Start</button>      
             <button className="resetbtn" type="reset" onClick={() => this.Reset()} >Reset</button>     
          </div>  
     </div>
    );
  }
}

export default App;
