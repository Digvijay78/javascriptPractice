// console.log("welcome");

const tabs = document.querySelector(".tabs")

const gallery = document.querySelectorAll(".images")

gallery.forEach((image) => {
    image.style.display = "none"
})
// console.log(gallery);  it will give you node list

tabs.addEventListener("click" , (event) => {
    // console.log(event.target.dataset.category);
    filterSearch(event.target.dataset.category)

})


function filterSearch(value) {
    gallery.forEach((image) => {
        // console.log(image.dataset.category);

        // console.log(image);
        if(value === 'all'){
            image.style.display = "block"
        }
        else if(image.dataset.category === value){
            image.style.display = "block"
        } else {
            image.style.display = "none"
        }
    } )
}