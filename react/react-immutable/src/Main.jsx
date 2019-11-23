import React from 'react';
import BaseCom from './BaseComponent'
class Main extends BaseCom {
  state = {  }
  render() { 
    window.c++
    return ( 
      <div>
        { this.props.value.get('c') }
      </div>
     );
  }
}
 
export default Main;