function createcard(title, cname, views, monthsold, duration, thumbnail) {
    let viewstr
 if(views<1000){
   viewstr =views;
 }
else if(views>1000000){
     viewstr =views/1000000 +"M";
 }
 else{
    viewstr =views/1000 + "k";
 }
    let html= `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="harry image">
            <div class="capsule">${duration}</div>

    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cname}. ${viewstr}views. ${monthsold}months ago</p>
    </div>
</div>`

 document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html;
}
createcard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry",560000,7,"31:06","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")
