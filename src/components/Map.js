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

  componentDidMount(){
    console.log('asdasdasd')
  }
  componentWillUpdate(){
    console.log('asdasdasd2')
  }


  render(){
    const MyGoogleMap = withGoogleMap(props => (
      <GoogleMap 
            defaultCenter = { { lat: 31.77, lng: 35.21 } }
            defaultZoom = { 9 }
          >
          {
            mapsJson.flags.map((flag,count)=>{
              // console.log(mapsJson);
              // mapsJson.write("asd");
              // console.log(mapsJson);

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

      let buttonTxt = this.state.isShown ? 'Hide Map' : 'Show Map';
      let isVisible = this.props.getVisibility;

    return(
      <div>
        {this.props.isShown ? 'true' : 'false'}
        {/* <VisibilityButton 
          changeVisibility={this.props.changeVisibility} 
          // buttonText={this.props.isShown}
          buttonText ={this.isVisible}
          /> */}
          
          <LocationInput/>
        <button 
          onClick={this.props.changeVisibility} 
          >{isVisible ? 'hide1' : 'show'}</button>

        
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



// import React from 'react';

// class MyMap extends React.Component {

//     initMap = () =>{
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: {lat: -34.397, lng: 150.644},
//             zoom: 6
//         });
//     }

//     render(){
//         const infoWindow = new google.maps.InfoWindow;
//         let map;
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(function(position) {
//               var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//               };
  
//               infoWindow.setPosition(pos);
//               infoWindow.setContent('Location found.');
//               infoWindow.open(map);
//               map.setCenter(pos);
//             }, function() {
//               handleLocationError(true, infoWindow, map.getCenter());
//             });
//           } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//           }
        
//         return(
//             <div id="googleMap"></div>
//         );
//     }
// };

// export default MyMap;
