const mapbox = require("mapbox-gl");

const buildmkr = (type, cord) => {
    const element = document.createElement('div')
     if(type === 'activity'){
         element.style.width = "32px";
         element.style.height = "39px";
         element.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
     }
 
     else if(type === 'hotel'){
         element.style.width = "32px";
         element.style.height = "39px";
         element.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
     }
 
     else if(type === 'restaurants'){
         element.style.width = "32px";
         element.style.height = "39px";
         element.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
     }
     
     return new mapbox.Marker(element).setLngLat(cord);
 };

module.exports = buildmkr;