/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
let cells = document.querySelectorAll("li");
cells.forEach(cell => {
   cell.addEventListener("mouseenter",(e)=>{
        cell.style.backgroundColor = "red";
 }) 
})
cells.forEach(cell => {
    cell.addEventListener("mouseout",(e)=>{
         cell.style.backgroundColor = "hsl(0, 0%, 90%)"
    }) 
 })

 cells.forEach(cell => {
   cell.addEventListener("click",(e) => {
    cell.classList.toggle("clicked");
   })
 })