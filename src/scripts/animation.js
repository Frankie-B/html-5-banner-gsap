
(function () {
	let tl = gsap.timeline();

  tl
	  .to('#myAd', {duration: .5, autoAlpha: 1})
	  .from("#myAd_text-2", { duration: 1.3, y: -100, ease: "power2.out"})
	  // .to("#myAd_text-1", { duration: 1.3, y: 210, ease: "power2.out"}, '-=.9')
	  .to('#myAd_letter-1',{duration: 2, y: 210, x: -70, rotation: -100, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-2',{duration: 2, y: 210, x: -60, rotation: 45, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-3',{duration: 2, y: 210, x: -50, rotation: 200, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-4',{duration: 2, y: 210, x: -40, rotation: -130, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-5',{duration: 2, y: 210, x: -30, rotation: 140, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-6',{duration: 2, y: 210, x: -20, rotation: 125, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-7',{duration: 2, y: 210, x:  0, rotation: -100, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-8',{duration: 2, y: 210, x:  10, rotation: 95, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-9',{duration: 2, y: 210, x:  20, rotation: -80, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-10',{duration: 2, y: 210, x: 30, rotation: 220, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-11',{duration: 2, y: 210, x: 40, rotation: -310, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-12',{duration: 2, y: 210, x: 50, rotation: 48, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-13',{duration: 2, y: 210, x: 60, rotation: -30, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-14',{duration: 2, y: 210, x: 70, rotation: -67, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-15',{duration: 2, y: 210, x: 80, rotation: -83, ease: "power2.out"}, 'myAddChar-=.9')
	  .to('#myAd_letter-16',{duration: 2, y: 210, x: 90, rotation: 200, ease: "power2.out"}, 'myAddChar-=.9')
	  .from('#myAd_marker', {duration: 1.2, y: -210, ease: "bounce.out"}, '-=.5')
	  .from('#myAd_shadow', {duration: 1.2, autoAlpha: 0, ease: "bounce.out"}, '-=1.2') // setting the offset to the total duration of the prev animation they will start at the same time
	  .from('#myAd_text-3', {duration: 1.2, autoAlpha: 0, ease: "power2.out", scale: .2}, '-=.9')
	  .from('#myAd_surfboard', {duration: 1.3, y: 230, rotation: -130, left: 300, ease: "back.out(1.7)"}, 'cta')
	  .call(cloudAnimation())
	  .add('endFrame');

	//tl.seek('cta'); // animate from this position
	function cloudAnimation()  {
		let tl = gsap.timeline({repeat:  -1});
		tl
		  .to('#myAd_clouds', {duration: 45, backgroundPositionX: 649, ease: "none"})
	}
	return tl;
})();
