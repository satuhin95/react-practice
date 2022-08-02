import React from "react";
import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import Section from "./components/Section";
import ThemeContext from "./context/themContext";
export default class App extends React.Component {
    state ={
      theme:'light'
    }
    switchTheme = ()=>{
      this.setState(({theme})=>{
        if(theme==='dark'){
          return{
            theme:'light',
          }
        }else{
          return{
            theme:'dark',
          }
        }
      })
    }
  render(){
    // const {theme} = this.state
    return (
      <div className="App">
        <Counter>
          {(counter,incrementCount)=>(
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={this.state}>    
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}


