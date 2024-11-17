mapboxgl.accessToken = 'pk.eyJ1IjoidWJpbGFicyIsImEiOiJjaXc3dGQzb2wwMDEwMnlwNXlsejAyOXF6In0.2C7DfhUhiVWgE_ek5N5GzQ';

// Some data to render. The IDs are the NUTS area IDs
const min = 0;
const max = 35;
const data = {AT11:5.2,AT12:5.2,AT13:10.6,AT21:6.1,AT22:4.7,AT31:4.1,AT32:3.5,AT33:3,AT34:3.5,BE10:17.3,BE21:6.1,BE22:6,BE23:4.4,BE24:5.1,BE25:4.2,BE31:7.8,BE32:13.3,BE33:12.8,BE34:9.3,BE35:10.9,BG31:12.1,BG32:10.6,BG33:10.3,BG34:10.4,BG41:6.7,BG42:9.2,CH01:7,CH02:4.1,CH03:4,CH04:3.9,CH05:3.8,CH06:3.3,CH07:6.4,CY00:14.9,CZ01:2.8,CZ02:3.5,CZ03:3.9,CZ04:7.3,CZ05:5.2,CZ06:4.9,CZ07:5.3,CZ08:8.1,DE11:3.3,DE12:3.3,DE13:2.5,DE14:3,DE21:2.7,DE22:2.5,DE23:2.7,DE24:3.8,DE25:3,DE26:3,DE27:3,DE30:9.4,DE40:5.7,DE50:5.6,DE60:4.3,DE71:4.1,DE72:3.8,DE73:3.6,DE80:7.8,DE91:4.9,DE92:4.7,DE93:3.5,DE94:3.9,DEA1:5.9,DEA2:4.8,DEA3:4.4,DEA4:4.7,DEA5:5.7,DEB1:3.4,DEB2:2.9,DEB3:4.1,DEC0:5.6,DED2:6.2,DED4:5.4,DED5:7.7,DEE0:8,DEF0:4.2,DEG0:5.8,DK01:6.7,DK02:5.9,DK03:6.1,DK04:5.6,DK05:6.3,EE00:6.2,EL30:25.2,EL41:18,EL42:14.9,EL43:24.2,EL51:23.4,EL52:26,EL53:30.7,EL54:24.5,EL61:26.9,EL62:19,EL63:28.5,EL64:25.8,EL65:22.3,ES11:19.3,ES12:19.1,ES13:17.6,ES21:14.8,ES22:13.8,ES23:15.4,ES24:16.3,ES30:17.1,ES41:18.3,ES42:26.3,ES43:29.1,ES51:18.6,ES52:22.8,ES53:17.3,ES61:31.5,ES62:24.6,ES63:27.6,ES64:34,ES70:29.1,FI19:9.8,FI1B:8,FI1C:10,FI1D:10.4,FI20:null,FR10:9.6,FR21:13,FR22:10.8,FR23:10.6,FR24:10.7,FR25:8.2,FR26:8.7,FR30:14,FR41:12.2,FR42:9.3,FR43:9.2,FR51:9.1,FR52:7.8,FR53:9.7,FR61:9.8,FR62:8.5,FR63:8.9,FR71:9.1,FR72:8.6,FR81:12.9,FR82:11,FR83:8.5,FRA1:23.7,FRA2:18.6,FRA3:21.9,FRA4:24.1,FRA5:23.7,HR03:17,HR04:15.9,HU10:5.3,HU21:4.4,HU22:3.8,HU23:8.1,HU31:8.7,HU32:10.9,HU33:7.9,IE01:10.6,IE02:9,IS00:4,ITC1:10.2,ITC2:8.9,ITC3:9.2,ITC4:7.9,ITF1:12.6,ITF2:14.3,ITF3:19.8,ITF4:19.7,ITF5:13.7,ITF6:22.9,ITG1:21.4,ITG2:17.4,ITH1:3.8,ITH2:6.8,ITH3:7.1,ITH4:8,ITH5:7.7,ITI1:9.2,ITI2:10.4,ITI3:9.9,ITI4:11.8,LI00:null,LT00:9.1,LU00:6.7,LV00:9.9,ME00:null,MK00:26.1,MT00:5.4,NL11:9.1,NL12:7.9,NL13:7.5,NL21:6.9,NL22:6.3,NL23:7.9,NL31:6.4,NL32:6.2,NL33:7.8,NL34:5.3,NL41:6.5,NL42:6.3,NO01:4.7,NO02:4.5,NO03:4.5,NO04:4.6,NO05:3.9,NO06:3.7,NO07:3.4,PL11:7.7,PL12:6.4,PL21:7.1,PL22:7.2,PL31:9.3,PL32:11.6,PL33:10.1,PL34:7,PL41:5.8,PL42:7.5,PL43:6.4,PL51:7,PL52:6.5,PL61:7.9,PL62:9.5,PL63:6.6,PT11:13.7,PT15:12.5,PT16:9.2,PT17:13.1,PT18:13.3,PT20:12.8,PT30:14.7,RO11:4.6,RO12:7.4,RO21:3.6,RO22:9,RO31:10.3,RO32:5.3,RO41:10.1,RO42:5.4,SE11:7,SE12:7.9,SE21:6,SE22:9.5,SE23:6.6,SE31:7.9,SE32:7.1,SE33:7.2,SI03:10.3,SI04:7.5,SK01:5.7,SK02:9.7,SK03:12.8,SK04:15,TR10:12.8,TR21:7.3,TR22:5.3,TR31:14.9,TR32:6.8,TR33:4.1,TR41:7.7,TR42:10.1,TR51:11.1,TR52:6.5,TR61:9.4,TR62:9.8,TR63:16.3,TR71:9.9,TR72:9.7,TR81:6.9,TR82:6.8,TR83:6.6,TR90:4.8,TRA1:6,TRA2:3.9,TRB1:7.9,TRB2:9.7,TRC1:9.7,TRC2:17.4,TRC3:24.4,UKC1:8.5,UKC2:7.7,UKD1:4.2,UKD3:6.5,UKD4:4.5,UKD6:3.5,UKD7:5.8,UKE1:6.4,UKE2:3.2,UKE3:7.4,UKE4:6.6,UKF1:4.8,UKF2:4.4,UKF3:4.5,UKG1:3.2,UKG2:4.6,UKG3:7.9,UKH1:4.3,UKH2:3.8,UKH3:4.3,UKI3:5.4,UKI4:7.2,UKI5:7.5,UKI6:4.6,UKI7:5.5,UKJ1:3.5,UKJ2:3.7,UKJ3:4.1,UKJ4:5.3,UKK1:3.9,UKK2:3.9,UKK3:4.5,UKK4:3.7,UKL1:6.5,UKL2:4.8,UKM2:6,UKM3:6.6,UKM5:3.2,UKM6:4.1,UKN0:6.1};

// Get the percentage for a value
function getPercentage(value) {
  if (!Number(value)) {
    return 0;
  }

  const totalDiff = max - min,
    valueDiff = value - min;
  let percentage = valueDiff / totalDiff * 100;

  percentage = Math.max(percentage, 0);
  percentage = Math.min(percentage, 100);

  return percentage;
}

// Get the color for a value depending on the percentage
const begin = {red: 255, green: 242, blue: 0};
const end = {red: 237, green: 66, blue: 100};
function getColor(value) {
  const percentage = getPercentage(value) / 100;

  const red = begin.red + Math.floor(percentage * (end.red - begin.red));
	const green = begin.green + Math.floor(percentage * (end.green - begin.green));
	const blue = begin.blue + Math.floor(percentage * (end.blue - begin.blue));
  
  return `rgb(${red},${green},${blue})`;
}

// Get the categorical color stops for the areas
function getColorStops() {
  const stops = [
    ['no match', '#f2f2f2']
  ];

  Object.keys(data).forEach(id => {
    const value = data[id];

    if (!value || isNaN(value)) {
      return;
    }

    const color = getColor(value, min, max);
    stops.push([id, color]);
  });

  return stops;
}

// Get the height stops for the areas
function getHeightStops() {
  const stops = [
    ['no match', 0]
  ];

  Object.keys(data).forEach(id => {
    const value = data[id];

    if (!value || isNaN(value)) {
      return;
    }

    const percentage = Math.floor(getPercentage(value));
    const height = percentage * 700;
    stops.push([id, height]);
  });

  return stops;
}

// Create the mapbox map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ubilabs/ciw7jzkux000i2qnu6blrgeks',
  center: [1.230, 52],
  zoom: 3
});

map.on('load', () => {
  // Add the NUTS data as a source to use
  map.addSource('NUTS2', {
    type: 'vector',
    url: 'mapbox://ubilabs.2e400788'
  });

  // Create a layer from the NUTS data
  map.addLayer(
    {
      source: 'NUTS2',
      'source-layer': 'NUTS2_3m',
      id: 'NUTS2-layer',
      type: 'fill-extrusion',
      paint: {
        'fill-extrusion-opacity': 0.75,
        'fill-extrusion-color': {
          property: 'NUTS_ID',
          type: 'categorical',
          stops: getColorStops()
        },
        'fill-extrusion-height': {
          property: 'NUTS_ID',
          type: 'categorical',
          stops: getHeightStops()
        }
      }
    },
    'waterway-label'
  );
  
  setTimeout(() => {
    map.easeTo({
      duration: 2000,
      pitch: 45,
      bearing: 10,
      easing: (t) => {
        return t * (2 - t);
      }
    });
  }, 500)
});