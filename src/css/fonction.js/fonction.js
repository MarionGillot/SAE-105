function carrousel() {
	
	var images15 = document.querySelectorAll('.image15');

	var dureeTransition = 2000;
	var deltaEntreTransition = 1000;
	var dureeAnimation = dureeTransition + images15.length * dureeTransition + 
		((images15.length - 1) * deltaEntreTransition);

	images15.forEach(function(img15, indiceImg15) {

		img15.style.zIndex = images15.length - indiceImg15;

	});

	var animation15 = anime.timeline({loop: true, delay: 0});
	animation15.add({
       	targets: images15,
        translateX: [
        	{value:'500', duration: dureeTransition},
        	{value: '-500', 
        	 duration: 0, 
        	 delay: function(img15,indiceImg15) {
        	 	if (indiceImg15 < 3) 
        	 		return (((3 - indiceImg15) * deltaEntreTransition) + 
        	 			((2 - indiceImg15) * dureeTransition)); return 0}},
        	{value: '0', 
        	 duration: function(img15, indiceImg15) {
        		if (indiceImg15 < 3) return dureeTransition; return 0;}, 
        	 easing: 'linear'}
        ],
        delay: function(img15,indiceImg15) {
        	return deltaEntreTransition + (indiceImg15 * dureeTransition) + (indiceImg15 * deltaEntreTransition) ;
        },
        easing: 'linear'
    });

}