export const MAPS_API_KEY = 'AIzaSyBWGCto2uGh-nU8T1rfYwpoe8F-aIScDLU'

export const LOCATIONS = {
  CAR: { lng: 39.697304, lat: 9.245346 },
  ORIGIN: {
    name: "London",
    lng: 0.1280567,
    lat: 51.5073059
  },
  DEST: {
    name: "Ulan-Ude, Buryatia, Russia",
    lng: 107.6075645,
    lat:51.8238783
  },
  CENTER: {lng: 51.1068074, lat: 43.6595313},
  SE: { lng: 116.391281, lat: 44.978003 },
  NW: {lng: -3.436838, lat: 50.525846 },
}

export const ROUTE = [
  [{
    name: "London",
    lng: 0.1280567,
    lat: 51.5073059
  }, {
    name: "Budapest, Ungheria",
    lng: 19.0404073,
    lat: 47.498171
  },{
    name: "Istanbul, İstanbul, Turkey",
    lng: 28.978375,
    lat: 41.0082329
  },{
    name: "Baku, Azerbaijan",
    lng: 49.8669603,
    lat: 40.4092025
  }],

  [{
    name: "Aktau, Mangystau Province, Kazakhstan",
    lng: 51.1994574,
    lat: 43.6415213
  },{
    name: "Turkmenbashi, Balkan, Turkmenistan",
    lng: 52.9778613,
    lat: 40.0342886
  },{
    name: "Door To Hell, Darvaza, Ahal, Turkmenistan",
    lng: 58.41371,
    lat: 40.1668251
  },{
    name: "Samarkand, Samarkand Province, Uzbekistan",
    lng: 66.9749731,
    lat: 39.6280277
  },{
    name: "Balkhash, Karagandy Region, Kazakhstan",
    lng: 74.980933,
    lat: 46.8438196
  },{
    name: "Ulan-Ude, Buryatia, Russia",
    lng: 107.6075645,
    lat:51.8238783
  }]
]

export const MAP_STYLE = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
