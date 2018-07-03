// adds quotes from memes.json

var memes = require("js/MEMES.json");

var priv = {
	grab: function(){
		return memes.global.quoteRoulette[Math.floor(Math.random()*memes.global.quoteRoulette.length)];
	}
}

var requote = setInterval(function(){
//	let quote = priv.grab()
	let quote = memes.global.quoteRoulette[Math.floor(Math.random()*memes.global.quoteRoulette.length)]
// dearest sumpunkest, i triedest my hardest to fixest thisest andest itest didn'test workest.
// pls advise
	let quote = "If you can read this sumpunk didn't advise"
	jQuery(".qtarget")
	.text(quote)
	.attr("data-text", quote)
	.addClass("quoteglitch");
	jQuery(setTimeout(function(){
		jQuery(".qtarget").removeClass("quoteglitch");
	}, 2000));
}, 5000);

module.exports = requote