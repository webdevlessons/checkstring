var kaptcha = document.getElementById('kaptcha'),
	button = document.getElementById('btn'),
	table = $('#result');

button.addEventListener('click', function() {
	// Clean tbody
	table.html('');

	// Input value
	var val = kaptcha.value;

	for (var i = 0; i < val.length; i++) {
		var symbol = val[i],
			code = symbol.charCodeAt(0),
			hex = Number(code).toString(16),
			lang  = getLang(code);

			table.append('<tr><td>'+ lang +'</td><td>'+ symbol +'</td><td>'+ code +'</td><td>'+ hex +'</td></tr>');
	}

});

// Lang filter
function getLang(code) {
	if ((code >= 0x0041 && code <= 0x005A) || (code >= 0x0061 && code <= 0x007A)) {
		return 'eng';
	} if ( code >= 0x0400 && code <= 0x045F ) {
		return 'rus';
	} else {
		return 'other';
	}
}


/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
var disqus_config = function () {
this.page.url = "https://webdevlessons.github.io/checkstring/";  // Replace PAGE_URL with your page's canonical URL variable
// this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://checkstring.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();