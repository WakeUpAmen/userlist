import React, {Component} from 'react';
class Pages extends Component{
    render(){
        return(
            <div class="div-container">
                <button class="buttons page-button" onClick ={this.props.minusOnepage} >pre</button>
                <button class="buttons page-button" onClick ={this.props.addOnePage} >older</button>
            </div>
        )
  }
}

export default Pages;