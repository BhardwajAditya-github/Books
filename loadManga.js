const data = null;

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jikan1.p.rapidapi.com/top/anime/1/upcoming");
xhr.setRequestHeader("X-RapidAPI-Key", "1392d4150fmshe0f1c4f89704249p1b705fjsnd0a13fcb3124");
xhr.setRequestHeader("X-RapidAPI-Host", "jikan1.p.rapidapi.com");

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		let json = JSON.parse(this.responseText);
        let top = json.top;
        for(obj=0;obj<top.length;obj++){
            console.log(top[obj]);
        }
        // console.log(top)
	}
});

// xhr.open("GET", "https://jikan1.p.rapidapi.com/top/anime/1/upcoming");
// xhr.setRequestHeader("X-RapidAPI-Key", "1392d4150fmshe0f1c4f89704249p1b705fjsnd0a13fcb3124");
// xhr.setRequestHeader("X-RapidAPI-Host", "jikan1.p.rapidapi.com");

xhr.send(data);