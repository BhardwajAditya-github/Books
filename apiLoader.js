yourApiKey = "AIzaSyCmMcLAlgv2cuEmBO2QtQGqoOrQsZVw5qE"

var topic = "";
function loadSearchTopic(){
    window.topic = document.getElementById("nav-keyword-id").value;
    // check();


// function check(){
if(topic==""){}
else{
const xhr = new XMLHttpRequest();

xhr.open('GET',`https://www.googleapis.com/books/v1/volumes?q=${window.topic}+&key=${yourApiKey}`,true)

var mybooks = document.getElementById("mybooks");
var mybookscode = "";

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let items = json.items;
        for(i=0;i<items.length;i++){
            var subItems = items[i]
            var volumeInfo = subItems.volumeInfo;
            var title = volumeInfo.title;
            var description = volumeInfo.description;
            var publisher = volumeInfo.publisher;
            var pageCount = volumeInfo.pageCount;
            var publishedDate = volumeInfo.publishedDate;
            var desclen = description?.length || 0;
    
            if(desclen > 30){
                description = description.substring(0,110)
            }
            let book = "";
            var largeImage = volumeInfo.imageLinks?.thumbnail;
            if(desclen == 0){
            //     book = `<div class="col-lg-4 col-md-6">
            // <div class="card">
            // <img src="${largeImage}" class="card-img-top card-images" alt="...">
            // <div class="card-body">
            // <h5 class="card-title">${title}</h5>
            // </div>
            // <ul class="list-group list-group-flush">
            // <li class="list-group-item">Publisher - ${publisher}</li>
            // <li class="list-group-item">Pages - ${pageCount}</li>
            // <li class="list-group-item">Published on - ${publishedDate}</li>
            // </ul>
            // <div class="card-body">
            // <a href="#" class="card-link">Card link</a>
            // <a href="#" class="card-link">Another link</a>
            // </div>
            // </div></div>`;
            // console.log(volumeInfo)
            // mybookscode += book;
            }
            else if(largeImage == undefined){

            }
            else if(desclen>20){
            book = `<div class="col-lg-4 col-md-6">
            <div class="card mycard">
            <img src="${largeImage}" class="card-img-top card-images" alt="...">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description} .......</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Publisher - ${publisher}</li>
            <li class="list-group-item">Pages - ${pageCount}</li>
            <li class="list-group-item">Published on - ${publishedDate}</li>
            </ul>
            <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
            </div></div>`;
            console.log(volumeInfo)
            mybookscode += book;
        }
    }
        mybooks.innerHTML = mybookscode;

    }
    else{
        console.log("Some error occured")
    }
}


xhr.send();
}
}