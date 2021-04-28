
function getColor() {
	return ["FE6284","8093F1","72DDF7","5EFC8D","19297C","FFE45E","FF9505"];
	// Pretty much the same exact syntax!
	var scheme = new ColorScheme;
		scheme.from_hue(33)         
		.scheme('triade')   
		.variation('soft');

	return scheme.colors();
}

// CHANGE TO THE TIME THAT WAS CLICKED 
// INPUT: location of the video in percentage (e.g. 0.5 = 50%)
function changeVideoCurrentTime(percentage) {
	var player = videojs('my-video');
	let new_time = percentage*player.duration()-0.75;
	player.currentTime(new_time);
}

// ON READY
$(function() {

	colors = getColor()

	var counter = 0;

	for (const [key, value] of Object.entries(timeline.face_timeline)) {
		console.log(key, value);
		// STEP 0: CREATE GRID CONTAINERS
		var $grid_item_a = $('<div/>',{
			"class": 'grid-item-a'
			}).html("<img class='face_image thumbnail' src='./img/" + key + ".jpg'/>").appendTo('#grid-container');

		var $grid_item_b = $('<div/>',{
			"class": 'grid-item-b'
			}).appendTo('#grid-container');
		// STEP 1: CREATE CANVAS
		$grid_item_b.html('<canvas id="' + key + '" class="face_canvas"></canvas>')

		$grid_item_b.click(function (e) { //Offset mouse Position
	        var posX = $(this).offset().left,
	            posY = $(this).offset().top;

	        x = e.pageX - posX;
	        changeVideoCurrentTime(x/$(this).width())
	        // alert((e.pageX - posX) + ' , ' + (e.pageY - posY));
	    });

		// STEP 2: DRAW CANVAS
		let canvas = document.getElementById(key);
		let context = canvas.getContext("2d");

		canvas.width = $(canvas).parent().width() ;
		canvas.height = $(canvas).parent().height() ;

		end_frame = timeline.frame.end; //4517

		pixel_per_frame = canvas.width/end_frame;

		// FOR LOOP
		for(var i =0; i < value.length; i = i+ 1) {
			console.log(i);
			console.log(value[i][0]);
			from_frame = value[i][0];
			to_frame = value[i][1];
			duration_frame = to_frame - from_frame;

			x = from_frame*pixel_per_frame;
			y = 0;
			c_width = duration_frame*pixel_per_frame;
			c_height = canvas.height;

			console.log(x);

			console.log(c_width);
			console.log(c_height);

			context.fillStyle = "#" + colors[counter];
			context.fillRect(x, 0, c_width, c_height);

		}

		counter += 1;
		counter = counter % colors.length;
	}

})
