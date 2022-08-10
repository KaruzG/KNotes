const notes = document.querySelectorAll(".draggableNote");
const allElements = document.querySelectorAll("*");

notes.forEach(note => {
    const drag = (e) => {
        note.style.top = e.pageY + "px";
        note.style.left = e.pageX + "px";
        note.style.zindex = 1;
    }
    
    note.addEventListener("mousedown", () => {
        allElements.forEach(element => {
            element.style.userSelect = "none";
        });
        window.addEventListener("mousemove" , drag);

    });
    
    window.addEventListener("mouseup", () => {
        allElements.forEach(element => {
            element.style.userSelect = "text";
        });
        window.removeEventListener("mousemove" , drag);
    }); 
});