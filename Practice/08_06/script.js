/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
function addToTheDom(){
    let main = document.querySelector("main");
    let newArticle = document.createElement("p");
    newArticle.innerHTML = `Contrary to popular belief, 
    Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin
    literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
    looked up one of the more obscure Latin words,
    consectetur, from a Lorem Ipsum passage, 
    and going through the cites of the word in classical literature,
    discovered the undoubtable source. 
    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et M
    alorum" (The Extremes of Good and Evil) by Cicero,
    written in 45 BC. This book is a treatise on the theory of ethics,
    very popular during the Renaissance. The first line of`;
    newArticle.classList.add("lorem-para");
    newArticle.setAttribute("id","lorem-para");
    main.append(newArticle);

};
addToTheDom();


let navItems = ["Home",
                "Information",
                "Profile",
                "About"];

let body = document.querySelector("body");
let header = document.createElement("header");
let navList = document.createElement("ul");
navList.style.display = "flex";
navList.style.justifyContent = "flex-end";

header.append(navList);

navItems.forEach(item => {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = item;
    li.style.marginRight = "20px";
    li.style.listStyleType = "none";
    li.style.fontSize = "25px";
    navList.append(li);
});


const createEmenti  = function (){
    body.prepend(header);
};

createEmenti();


( () => {
    let heading = document.createElement("h1");
    heading.innerHTML = "my first javaScript mod";
    console.log(heading);
    header.append(heading);
})();
