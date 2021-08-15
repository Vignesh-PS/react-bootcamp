import React, {Component} from 'react';
import './home.css';

class Homepage extends Component {

  storeDetails:any = {};
  
  constructor(props:any){
    super(props);
    this.storeDetails.storeName = 'My Store';
  }
  
  render() {

    return (
    <div className="App">
      <div className="app-content">
       <h2 className="app-heading">Homepage</h2>
       <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto ex nisi animi blanditiis quo dicta recusandae. Obcaecati placeat, ea asperiores a veniam tenetur, veritatis officia sint porro expedita aliquid.</div>
      </div>

    </div>
    );
  };
}
  

export default Homepage;
