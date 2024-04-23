import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin);
    return (
      <MapView
        style={tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
      >
        {/* {origin?.location && (
            // <Marker
            //     coordinate={{
            //         latitude: origin.location.lat,
            //         longitude: origin.location.lng,
            //     }}
            //     // title='Origin'
            //     // description={origin.description}
            //     // identifier='origin'
            // />
        )} */}
      </MapView>
    )
  }


export default Map;

const styles = StyleSheet.create({});
