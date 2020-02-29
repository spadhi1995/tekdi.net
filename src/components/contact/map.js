import React from 'react';
import {Gmaps, Marker, Circle} from 'react-gmaps';
 
const coords = {
  lat: 18.500700,
  lng: 73.814450
};
const params = {v: '3.exp', key: 'AIzaSyDzY289BBxu3loiioXT3GokyCy4uREQhy4'};
 
class map extends React.Component {
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      MapTypeId: 'terrain',
      mapTypeId: 'hybrid',
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'350px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={18}
        //loadingMessage={}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        {/* <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Tekdi Technologies Pvt. Ltd'}
          onCloseClick={this.onCloseClick}
           /> */}
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
 
};

export default map