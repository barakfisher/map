import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import VisibilityButton from './VisibilityButton';
import { connect } from 'react-redux';
import {changeVisibility} from '../actions/map';
import {getVisibility} from '../actions/map';
import LocationInput from './LocationInput';

const mapsJson = require('json-loader!../data.json');

class Map extends React.Component {
  state = {
    isShown : true
  }

  changeMapVisibility = () =>{
    this.setState(() => ({ isShown: !this.state.isShown }));
  }


  render(){
    const MyGoogleMap = withGoogleMap(props => (
      <GoogleMap 
            defaultCenter = { { lat: 31.77, lng: 35.21 } }
            defaultZoom = { 9 }
          >
          {
            mapsJson.flags.map((flag,count)=>{
            return(
            <Marker
             position = {{ lat: flag.position.lat, lng: flag.position.lng }}
             title= {flag.title}
             key={count}
             />
            )
          })}
          
          </GoogleMap>
      ));

    return(
      <div>
        {this.props.isShown ? 'true' : 'false'}
        <VisibilityButton 
          changeVisibility={this.props.changeVisibility} 
          // buttonText={this.props.isShown}
          buttonText ={this.isVisible}
          />
          
          <LocationInput/>        
        { this.state.isShown && 
            <div className='map'>
              <MyGoogleMap 
              containerElement={ <div style={{ height: `400px`, width: '400px' }} /> }
              mapElement={ <div style={{ height: `100%`, borderRadius:'100%' }} /> }
              >
                
              </MyGoogleMap>
            </div>
        }
        

      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  isShown : state.isShown
});
const mapDispatchToProps = (dispatch) => ({
  changeVisibility : () => dispatch(changeVisibility()),
  getVisibility: () => dispatch(getVisibility())
});

export default connect(mapStateToProps,mapDispatchToProps)(Map);