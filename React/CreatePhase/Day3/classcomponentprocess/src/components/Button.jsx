import { Component } from "react";

class Button extends Component {

constructor(){

     super()

     this.state = {

        count:0

     }

     

     
}

componentDidMount(){

    console.log('Did mount');
    

    this.setState({
        count:this.state.count + 4567
    })

}

componentDidUpdate(){

  console.log('Update mount');

}


increce = ()=>{

     this.setState({
        count:this.state.count + 1
    })
    
}


render(){
   
     return (<>
     
      <div>

        <h1>{this.state.count}</h1>
        <button onClick={this.increce}   style={{height:"60px",backgroundColor:"skyblue",padding:"4px",width:"20%",border:"none",borderRadius:"10px"}}>Class Components</button>
      </div>
     </>)
}


}


export default Button