import React from "react";
import Content from "./Content"

export default class Section extends React.Component {
  render(){
    return (
      <div>
        <h2>This is a Section</h2>
          <Content/>
      </div>
    );
  }

}
