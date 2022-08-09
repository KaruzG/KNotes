const notes = document.querySelectorAll(".draggableNote");

notes.forEach(note => {
    const drag = (e) => {
        note.style.top = e.pageY + "px";
        note.style.left = e.pageX + "px";
        note.style.zindex = 1;
    }
    
    note.addEventListener("mousedown", () => {
        window.addEventListener("mousemove" , drag);
    });
    
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove" , drag);
    }); 
});