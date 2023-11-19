const accesskey="MbzKcrMYqXgwdz6CjalqqFTqNcRD_eCApJSmi5Cxy6w"; 
const user_input=document.getElementById("input_data");
const images=document.querySelector(".images");
const showmore=document.querySelector(".show-more");
const search_bar=document.querySelector(".search-bar");
let input_value=""
let page=1;
async function searchimages(){
    input_value=user_input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${input_value}&client_id=${accesskey}`;
    const response= await fetch(url);
    const data= await response.json();
    const results= data.results; 
    if(page===1)
    images.innerHTML="";
    results.map((result)=>{
    const imageWrapper=document.createElement("div"); 
    imageWrapper.classList.add("image");
    const image=document.createElement('img');
    image.src=result.urls.small;
    image.alt=result.alt_description;
    const imageLink=document.createElement('a');
    imageLink.href= result.links.html;
    imageLink.target="_blank";
    imageLink.textContent= result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    images.appendChild(imageWrapper);
});
page++;
if(page>1)
{
    showmore.style.display="block";
}
}
search_bar.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchimages();
})
showmore.addEventListener("click",()=>{
    searchimages(); 
})






