import * as echarts  from 'echarts';
import { geoCoordMap, data } from './geo';
var convertData = function (data) { 
   var res = [];
   for (var i = 0; i < data.length; i++) {
      // var geoCoord = (geoCoordMap as any)[data[i].name];
      var geoCoord;
      geoCoordMap.forEach(e => {
         let { name, geo } = e;
         if (name == data[i].name) {
            geoCoord = geo
         }
      })
      if (geoCoord) {
         res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
         });
      }
   }
   return res;
};
class MapClass {
   echarts = echarts; 
   option = {
      title: {
         text: '疫情地图',
         sublink: 'http://www.pm25.in',
         left: 'center',
         // subtextStyle.color
         textStyle:{
            color:"#fff"
         }
      },
      tooltip: {
         trigger: 'item',
         formatter:(obj)=>{
            let data = obj['data'];
            return ` ${data['name']}: ${data['value'][2]} 人`;
            
         }
      },
      bmap: {
         center: [114.505449, 36.647504],
         zoom: 5,
         roam: true,
         mapStyle: {
            styleJson: [
               {
                  "featureType": "land",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#091220ff"
                  }
               }, {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#0B4174"
                  }
               }, {
                  "featureType": "green",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#0e1b30ff"
                  }
               }, {
                  "featureType": "building",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "building",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#ffffffb3"
                  }
               }, {
                  "featureType": "building",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#dadadab3"
                  }
               }, {
                  "featureType": "subwaystation",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#b15454B2"
                  }
               }, {
                  "featureType": "education",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#e4f1f1ff"
                  }
               }, {
                  "featureType": "medical",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#f0dedeff"
                  }
               }, {
                  "featureType": "scenicspots",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "color": "#e2efe5ff"
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "weight": 4
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#f7c54dff"
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#fed669ff"
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#8f5a33ff"
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "highway",
                  "elementType": "labels.icon",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "arterial",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "weight": 2
                  }
               }, {
                  "featureType": "arterial",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#d8d8d8ff"
                  }
               }, {
                  "featureType": "arterial",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#ffeebbff"
                  }
               }, {
                  "featureType": "arterial",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "arterial",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#525355ff"
                  }
               }, {
                  "featureType": "arterial",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "local",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "weight": 1
                  }
               }, {
                  "featureType": "local",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#d8d8d8ff"
                  }
               }, {
                  "featureType": "local",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "local",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "local",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#979c9aff"
                  }
               }, {
                  "featureType": "local",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "railway",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "weight": 1
                  }
               }, {
                  "featureType": "railway",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#123c52ff"
                  }
               }, {
                  "featureType": "railway",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#12223dff"
                  }
               }, {
                  "featureType": "subway",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on",
                     "weight": 1
                  }
               }, {
                  "featureType": "subway",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#d8d8d8ff"
                  }
               }, {
                  "featureType": "subway",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#ffffff00"
                  }
               }, {
                  "featureType": "subway",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "subway",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#979c9aff"
                  }
               }, {
                  "featureType": "subway",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "continent",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "continent",
                  "elementType": "labels.icon",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "continent",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#333333ff"
                  }
               }, {
                  "featureType": "continent",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "city",
                  "elementType": "labels.icon",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "city",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "city",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#454d50ff"
                  }
               }, {
                  "featureType": "city",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "town",
                  "elementType": "labels.icon",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "town",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "town",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#454d50ff"
                  }
               }, {
                  "featureType": "town",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": {
                     "color": "#12223dff"
                  }
               }, {
                  "featureType": "poilabel",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "districtlabel",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "off"
                  }
               }, {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": {
                     "visibility": "on"
                  }
               }, {
                  "featureType": "road",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "off"
                  }
               }, {
                  "featureType": "road",
                  "elementType": "geometry.stroke",
                  "stylers": {
                     "color": "#ffffff00"
                  }
               }, {
                  "featureType": "district",
                  "elementType": "labels",
                  "stylers": {
                     "visibility": "off"
                  }
               }, {
                  "featureType": "poilabel",
                  "elementType": "labels.icon",
                  "stylers": {
                     "visibility": "off"
                  }
               }, {
                  "featureType": "poilabel",
                  "elementType": "labels.text.fill",
                  "stylers": {
                     "color": "#2dc4bbff"
                  }
               }, {
                  "featureType": "poilabel",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffff00"
                  }
               }, {
                  "featureType": "manmade",
                  "elementType": "geometry",
                  "stylers": {
                     "color": "#12223dff"
                  }
               }, {
                  "featureType": "districtlabel",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "entertainment",
                  "elementType": "geometry",
                  "stylers": {
                     "color": "#ffffffff"
                  }
               }, {
                  "featureType": "shopping",
                  "elementType": "geometry",
                  "stylers": {
                     "color": "#12223dff"
                  }
               }
            ]
         }
      },
      series: [
         {
            name: '确诊人数',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            large:true,
            largeThreshold:2000,
            symbolSize: function (val) {
               val[2] = +val[2];

               if(val[2] < 10 && val[2] >= 1){
                  return val[2]
               }
               if( val[2] > 10 &&val[2] < 100){
                  return val[2] /10
               }
               if(val[2] < 1000 && val[2]>100){
                  return val[2] /100;
               }
              if(val[2] > 10000){
                 return val[2] / 1000
              }
            },
            label: {
               formatter: '{b}',
               position: 'right',
               show: false
            },
            itemStyle: {
               color: 'yellow'
            },
            emphasis: {
               label: {
                  show: true,
                  formatter : (obj) => {
                     let data = obj['data'];
                     return ` ${data['name']}: ${data['value'][2]} 人`;
                  }
               }
            }
         },
         {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
               return +b.value - +a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
               val[2] = +val[2];
                     if(val[2] < 100){
                        return val[2] /10
                     }
                     if(val[2] < 1000 && val[2]>100){
                        return val[2] /100;
                     }
                  if(val[2] > 1000){
                     return val[2] / 1000
                  }
            },
            showEffectOn: 'render',
            rippleEffect: {
               brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
               formatter: (obj)=>{
                  let data = obj['data'];
                  return `${data['name']}`
               },
               position: 'right',
               show: true
            },
            itemStyle: {
               color: 'red',
               shadowBlur: 10,
               shadowColor: '#333'
            },
            zlevel: 1
         }
      ]
   }
};

export default new MapClass();