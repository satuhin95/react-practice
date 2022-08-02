import React from "react"
import Counter from "./Counter"
import HoverCounter from "./HoverCounter"
import ThemeContext from "../context/themContext"
export default class Content extends React.Component {
  componentDidMount(){
    console.log('ok')
  }
render(){
  const {theme,switchTheme} = this.context
  return (
    <div>
        <h1>This is a counter</h1>
        <Counter>
            {(counter,incrementCount)=>{
              
                <HoverCounter
                  count= {counter} incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
               />
            
            }}
        </Counter>
    </div>
  )
}
}
Content.contextType = ThemeContext;
