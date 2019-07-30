import * as React from 'react';
//import {PAGE_STATE} from '../../actions/index';

import './style.scss';

export interface Props {x: string; y: string;}

class Deskmark extends React.Component<Props, {}>{
  /*
  constructor(props) {
    super(props);
  }
*/

  render() {

    return (
      <div className="deskmark-component">
        hello world {this.props.x} "__" {this.props.y};
      </div>
    );
    Deskmark
  }
}

export default Deskmark;
