import React, { Component } from 'react';

class Button extends Component {
  render(props) {
    return (
      <div className="commande">
         <button className="startbtn" type="button" onClick={() => this.props.Start()} >Start</button>      
         <button className="resetbtn" type="reset" onClick={() => this.props.Reset()} >Reset</button>     
     </div>
    );
  }
}

export default Button ;