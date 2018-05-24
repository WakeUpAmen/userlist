import React, {Component} from 'react';
class Pages extends Component{
    render(){
        return(
            <div>
                <button onClick ={this.props.minusOnepage} >pre</button>
                <button onClick ={this.props.addOnePage} >older</button>
            </div>
        )
  }
}

export default Pages;