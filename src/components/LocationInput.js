import React from 'react';

// let fs = require('fs');
// fs.appendFile('../data.json','Hello',(err)=>{
//     if (err) throw err;
//     console.log('hello saved');
// });
class LocationInput extends React.Component {
    
        render(){
        
        
        return(
            <div className=''>
                <input placeholder='location - Lat' type='text'/>
                <input placeholder='location - Lng' type='text'/>
                <button type='submit'> Submit </button>
            </div>   
        );
    }
}

export default LocationInput;

