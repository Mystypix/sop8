import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapboxGl = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
})

const Map = ({
    width = '100%', 
    height = '100%',
    center,
    ...otherProps
}) => {    
  const containerStyle = {
    height,
    width
  }
  return (
    <MapboxGl style='mapbox://styles/mapbox/streets-v11' containerStyle={containerStyle} center={center} {...otherProps}>
        <Marker
        coordinates={center}
        anchor='bottom'>
            <div style={{width: '10px', height: '15px', background: 'red'}} />
        </Marker>
    </MapboxGl>
  )
}

export default Map