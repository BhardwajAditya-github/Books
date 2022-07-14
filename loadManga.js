const data = null;

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jikan1.p.rapidapi.com/top/anime/1/upcoming");
xhr.setRequestHeader("X-RapidAPI-Key", "1392d4150fmshe0f1c4f89704249p1b705fjsnd0a13fcb3124");
xhr.setRequestHeader("X-RapidAPI-Host", "jikan1.p.rapidapi.com");

myMangas = document.getElementById("myMangas");
var mangaData = "";

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		let json = JSON.parse(this.responseText);
        let top = json.top;
        for(x=0;x<6;x++){
            obj = top[x];
            image = obj.image_url;
            title = obj.title;
            console.log(obj)
            url = obj.url;

          var book =`<div class="col-lg-2 col-md-4">
            <div class="card manga-card">
                <a href="${url}"><img src="${image}" class="card-img-top card-images manga-img" alt="..."></a>
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                </div>
            </div>  
      </div>` 

      mangaData += book;
            // console.log(obj)
        }
        myMangas.innerHTML = mangaData;
        // console.log(top)
	}
});

// xhr.open("GET", "https://jikan1.p.rapidapi.com/top/anime/1/upcoming");
// xhr.setRequestHeader("X-RapidAPI-Key", "1392d4150fmshe0f1c4f89704249p1b705fjsnd0a13fcb3124");
// xhr.setRequestHeader("X-RapidAPI-Host", "jikan1.p.rapidapi.com");

xhr.send(data);