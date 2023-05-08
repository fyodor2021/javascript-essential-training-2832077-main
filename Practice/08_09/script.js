/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

function helper(){
  let figure = document.createElement("figure");
  let img = document.createElement("img")
  img.setAttribute("src","frogpack.image");
  let figureCaption = document.createElement("figcaption");
  figureCaption.innerHTML = `Contrary to popular belief, 
  Lorem Ipsum is not simply random text. It has roots in a
   piece of classical Latin literature from 45 BC, making i
   t over 2000 years old. Richard McClintock, a Latin profes
   sor at Hampden-Sydney College in Virginia, looked up one of
    the more obscure Latin words, consectetur, from a Lorem Ips
    um passage, and going through the cites of the word in class
    ical literature, discovered the undoubtable source. Lorem I
    psum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
    Bonorum et Malorum" (The Extremes of Good and Evil) by Cice
    ro, written in 45 BC. This book is a treatise on the theory
     of ethics, very popular during the Renaissance. The first 
     line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
  comes from a line in section 1.10.32.`;
  figure.append(img);
  figure.append(figureCaption);
  return figure;

}



function main(content){

  let newArticle = document.createElement("article");
  newArticle.innerHTML = content;
  let figure = helper();
  newArticle.append(figure);
  return newArticle;

}


let body = document.querySelector("body");
let newAritcle  = main(content);
body.append(newAritcle);