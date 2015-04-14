var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 54.989653,
				lng: -1.597683
			  });
			  
			  var marker = map.addMarker({
				lat: 54.989653,
				lng: -1.597683,
	            title: 'Select Information Systems'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
				lat: 54.989653,
				lng: -1.597683
		      });
		    });
		}        

    };
}();