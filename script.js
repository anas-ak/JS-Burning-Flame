let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG'),
		mid = gsap.utils.toArray('#mid *')//.reverse()

gsap.set('svg', {
	visibility: 'visible'
})

let fatTl = gsap.timeline();
fatTl.fromTo('#fat *', {
	drawSVG: '70% 0%'
}, {
		drawSVG: '40% 60%',
	stagger: {
		each: 0.05,
		repeat: -1,
		yoyo: true
	},
	duration: 0.75,
	ease: 'sine.inOut'
})

let midTl = gsap.timeline();
midTl.fromTo(mid, {
	drawSVG: '50% 0%'
}, {
		drawSVG: '50% 60%',
	stagger: {
		each: 0.05,
		repeat: -1,
		yoyo: true
	},
	duration: 0.75,
	ease: 'sine.inOut'
})

let thinTl = gsap.timeline();
thinTl.fromTo('#thin *', {
	drawSVG: '0% 30%'
}, {
		drawSVG: '60% 60%',
	stagger: {
		each: 0.05,
		repeat: -1,
		yoyo: true
	},
	duration: 0.75,
	ease: 'sine.inOut'
})

let mainTl = gsap.timeline();
mainTl.add(fatTl)
.add(midTl, 0.1)
.add(thinTl, 0.2).seek(100)
