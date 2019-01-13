import React from 'react';
import { connect } from 'react-redux';
import {changeVisibility} from '../actions/map';

import map from '../reducers/map';

// const VisibilityButton = ({ChangeVisibility}) => (
export class VisibilityButton extends React.Component{

    componentWillUpdate(){
        debugger;
      }

    render(){
        return (
            <div>
                <button onClick= {this.props.changeVisibility}>
                    {this.props.buttonText ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    isShown : state.isShown
  });
  
  const mapDispatchToProps = (dispatch) => ({
    changeVisibility : () => dispatch(changeVisibility())
  });
export default connect(mapStateToProps,mapDispatchToProps)(VisibilityButton);
// export default VisibilityButton;
//   