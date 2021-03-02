let nb=0;

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('#w2content', .1, {y:100, opacity: 0});
tl2.from('#arrowup', .1, {x:200});



const scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
            triggerHook: "onLeave",
            duration: "15%"
})
  .setTween(tl)
		.addTo(controller);

		const scene2 = new ScrollMagic.Scene({
			triggerElement: "#trigger",
					  triggerHook: "onLeave",
					  duration: "25%"
		  })
			.setTween(tl2)
				  .addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  if(tl.progress()===1){	
	const counters = document.querySelectorAll('.counter');
	const speed = 200;	
	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;
			const inc = target / speed;	
			if(count < target) {
				counter.innerText = count+inc;
				setTimeout(updateCount, 1)
			}else{
				count.innerText = target;
			}
		}
		updateCount();
	});
  } else {
	  nb=0;
  }
};

// Testimonials

let x = 1;

function arrowCheck(){
	if(x===1){
		document.querySelector('.w4arrow1').style.display = "none";
		document.querySelector('.w4spacer1').style.display = "block";
		document.querySelector('.w4content').style.transform = "none";
		document.getElementById('dot1').style.background = "#9c88ff";
		document.getElementById('dot2').style.background = "white";
		document.getElementById('dot3').style.background = "white";
	} else if(x===2) {
		document.querySelector('.w4arrow1').style.display = "block";
		document.querySelector('.w4spacer1').style.display = "none";
		document.querySelector('.w4arrow2').style.display = "block";
		document.querySelector('.w4spacer2').style.display = "none";
		document.querySelector('.w4content').style.transform = "translateX(-33.33%)";
		document.getElementById('dot1').style.background = "white";
		document.getElementById('dot2').style.background = "#9c88ff";
		document.getElementById('dot3').style.background = "white";
	} else if(x===3) {
		document.querySelector('.w4arrow2').style.display = "none";
		document.querySelector('.w4spacer2').style.display = "block";
		document.querySelector('.w4content').style.transform = "translateX(-66.66%)";
		document.getElementById('dot1').style.background = "white";
		document.getElementById('dot2').style.background = "white";
		document.getElementById('dot3').style.background = "#9c88ff";
	}
}

function plus(){
	x +=1;
	arrowCheck();
	console.log(x)
}

function minus(){
	x -=1;
	arrowCheck();
	console.log(x)
}