import React, {Component} from 'react';
class Pages extends Component{
    render(){
        return(
            <div className="div-container">
                <button className="buttons" onClick ={this.props.minusOnepage} >pre</button>
                <button className="buttons" onClick ={this.props.addOnePage} >older</button>
            </div>
        )
  }
}

export default Pages;