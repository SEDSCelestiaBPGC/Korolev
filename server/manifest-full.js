export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","404.html","CNAME","Galileo/about.html","Galileo/css/about.css","Galileo/css/events.css","Galileo/css/index.css","Galileo/css/navbar.css","Galileo/css/observations.css","Galileo/css/projects.css","Galileo/css/talks.css","Galileo/css/talksmobile.css","Galileo/events.html","Galileo/img/Back.jpg","Galileo/img/Bodyback.jpg","Galileo/img/Celestron-Astromaster.jpg","Galileo/img/Cosmic.jpeg","Galileo/img/Cosmic1.jpg","Galileo/img/Dobsonian.jpg","Galileo/img/Earth.jpg","Galileo/img/Jupiter.jpg","Galileo/img/Mars.jpg","Galileo/img/Mercury.jpg","Galileo/img/Neptune.jpg","Galileo/img/Numerical.jpeg","Galileo/img/Numerical1.jpg","Galileo/img/Saturn.jpg","Galileo/img/Sun.jpg","Galileo/img/Tejinder.jpeg","Galileo/img/Uranus.jpg","Galileo/img/Venus.jpg","Galileo/img/acoustic.jpg","Galileo/img/allnight.jpeg","Galileo/img/atoms.jpg","Galileo/img/atoms1.jpg","Galileo/img/bodies.JPG","Galileo/img/can.jpg","Galileo/img/comet.jpg","Galileo/img/eclipse.jpeg","Galileo/img/fault.jpeg","Galileo/img/gal1.jpg","Galileo/img/halzen.jpeg","Galileo/img/halzen1.jpg","Galileo/img/lidar.jpg","Galileo/img/meteors.jpeg","Galileo/img/micro.jpg","Galileo/img/pushkar.png","Galileo/img/pyro.jpg","Galileo/img/pyro2.jpg","Galileo/img/salt.jpeg","Galileo/img/starparty.jpg","Galileo/img/storm.jpeg","Galileo/img/stpty.JPG","Galileo/img/tesla.jpg","Galileo/img/tracker.jpg","Galileo/index.html","Galileo/observations.html","Galileo/projects.html","Galileo/scripts/about.js","Galileo/scripts/app.js","Galileo/scripts/events.js","Galileo/scripts/jquery.min.js","Galileo/scripts/nav-bar.js","Galileo/scripts/observations.js","Galileo/scripts/particles.min.js","Galileo/scripts/planetdata.js","Galileo/scripts/projects.js","Galileo/scripts/script.js","Galileo/talks.html","Galileo/talksmobile.html","assets/cbimage.png","assets/cursor/saturn.png","assets/icons/astronaut.svg","assets/icons/cast.svg","assets/icons/clock.svg","assets/icons/dish.svg","assets/icons/empire.svg","assets/icons/facebook.svg","assets/icons/git.svg","assets/icons/heart.svg","assets/icons/insta.svg","assets/icons/jedi.svg","assets/icons/lec.svg","assets/icons/meteor.svg","assets/icons/sat.svg","assets/icons/scroll.svg","assets/icons/spotify.svg","assets/icons/tasks.svg","assets/icons/twitter.svg","assets/icons/youtube.svg","assets/images/bci.png","assets/images/core.jpg","assets/images/lectures.png","assets/images/podcast.png","assets/images/projects-2020/3coin.jpg","assets/images/projects-2020/bci.png","assets/images/projects-2020/bincalc.png","assets/images/projects-2020/cloud.jpg","assets/images/projects-2020/einsat.png","assets/images/projects-2020/qchess.jpeg","assets/images/projects-2020/rocketry.png","assets/images/projects-2020/track.jpg","assets/images/qc.png","assets/images/team.jpg","assets/legacy.svg","assets/links.json","assets/logo-max.png","assets/logo-sq-black.png","assets/logo-sq-max-black.png","assets/logo-sq-max.png","assets/logo-sq.png","assets/logo.svg","assets/obs/astro-ph/0.jpeg","assets/obs/astro-ph/1.jpeg","assets/obs/astro-ph/2.jpeg","assets/obs/astro-ph/3.jpeg","assets/obs/astro-ph/4.jpeg","assets/obs/astro-ph/5.jpg","assets/obs/celestron.jpg","assets/obs/dobbynew.jpeg","assets/obs/dobbyold.jpeg","assets/obs/stpty/0.jpg","assets/obs/stpty/1.jpg","assets/obs/stpty/2.jpg","assets/obs/stpty/3.jpg","assets/obs/stpty/4.jpg","assets/obs/stpty/5.jpg","assets/obs/stpty/6.jpg","assets/onthehouse/lecsArt-0rig.png","assets/onthehouse/lecsArt.png","assets/onthehouse/obsArt-orig.png","assets/onthehouse/obsArt.png","assets/onthehouse/projArt-orig.png","assets/onthehouse/projArt.png","assets/projects/apeiro.jpg","assets/projects/kratos.png","assets/projects/rt.jpg","assets/svgs/bars.svg","assets/svgs/breaker.png","assets/svgs/google.svg","assets/svgs/korolev.svg","assets/svgs/pocketcast.svg","assets/svgs/radiopublic.svg","assets/svgs/spotify.svg","assets/svgs/times.svg","assets/svgs/youtube.svg","assets/team/ankit.jpg","assets/team/avani.jpeg","assets/team/cube.jpg","assets/team/dubal.jpg","assets/team/frogu.jpg","assets/team/gupte.jpg","assets/team/hvcs.png","assets/team/neil.jpeg","assets/team/patidar.jpg","assets/team/pj.jpeg","assets/team/pradeep.jpeg","assets/team/prorush.jpg","assets/team/saiees.jpeg","assets/team/samarth.jpg","assets/team/shlok.jpeg","assets/team/tanmay.jpeg","assets/team/vaid.jpeg","assets/team/venu.jpg","assets/team/vices.jpeg","assets/team/vivek.jpg","assets/team/yash.jpg","css/atomic.css","css/atomic.scss","css/global.css","css/global.scss","favicon.ico","favicon.png","js/celestial-invaders.js","js/cursor.js","js/molecular.js","js/startup.js"]),
	mimeTypes: {".html":"text/html",".css":"text/css",".jpg":"image/jpeg",".jpeg":"image/jpeg",".JPG":"image/jpeg",".png":"image/png",".js":"text/javascript",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.DgiEim9j.js","app":"_app/immutable/entry/app.rVDzQLXQ.js","imports":["_app/immutable/entry/start.DgiEim9j.js","_app/immutable/chunks/entry.BOBt4CJA.js","_app/immutable/chunks/scheduler.DzV7pw1l.js","_app/immutable/chunks/paths.CyVMUgen.js","_app/immutable/entry/app.rVDzQLXQ.js","_app/immutable/chunks/scheduler.DzV7pw1l.js","_app/immutable/chunks/index.OuQUVrRW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/observations",
				pattern: /^\/observations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/team",
				pattern: /^\/team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
