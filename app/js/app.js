import { gsap } from 'gsap'

let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body')

		cx = window.innerWidth / 2
		cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

	})

	function updateMe() {

		dx      = clientX - cx
		dy      = clientY - cy
		tiltx   = dy / cy
		tilty   = dx / cx
		radius  = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree  = radius * 4
		gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
	}

	gsap.to('.card', { zoom: .98 })
	gsap.to('.card__main-img', { opacity: 1, duration: .15, delay: .1 })
	gsap.to('.card__second-img', { opacity: 1, left: -10, top: 10,  duration: .5, delay: .25 })
	gsap.to('.card__third-img', { opacity: 1, left: -20, top: 20,  duration: .5, delay: .25 })
	gsap.to('.card__russia', { opacity: .07, duration: .15, delay: .1 })
	gsap.to('.card__chip', { opacity: 1, duration: 1.5, delay: .1 })
	gsap.to('.card__logo', { opacity: 1, duration: 1.5, delay: .1 })
	gsap.to('.card__valid', { opacity: 1, zoom: 1, duration: .1, delay: .25 })
	gsap.to('.card__number-holder', { opacity: 1, zoom: 1, duration: .1, delay: .25 })

})
