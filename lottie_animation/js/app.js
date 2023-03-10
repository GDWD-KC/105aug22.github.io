// Set container variable for animation
let animatedMonster = document.getElementById("animatedMonster");


// Load in animation with Lottie Syntax
let monster =
bodymovin.loadAnimation({
      container: animatedMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/13ccd244-4d13-4b69-bbe3-6ce58822a6f2/MQP60e3E6c.json"
    });

// Animation for Monster
// Excited Frames
animatedMonster.addEventListener('click', function() {
    monster.playSegments([30,70], true);
});

//Cry
animatedMonster.addEventListener('mouseenter', function() {
    monster.playSegments([105,220], true);
});

animatedMonster.addEventListener('mouseleave', function() {
    monster.playSegments([240,300], true);
});
