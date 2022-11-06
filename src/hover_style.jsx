const K_SIZE = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '0px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  color: '#dcdee8',
  padding: 0,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: '#223bc7',
  fontSize: 11,
  textAlign: 'center',
  fontWeight: 'bold'
};

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};