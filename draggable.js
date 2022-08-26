var draggableElements = document.getElementsByClassName("draggableNote");
var notes = document.querySelectorAll(".draggableNote");
var lastSelectedNote = null;

console.log(draggableElements.length)

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById(elmnt.id + "TopSpace").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        
        // zIndex changer
        if (lastSelectedNote != elmnt) { // If the same note is clicked multiple times, doesnt need to do anything with zIndex
            elmnt.style.zIndex = draggableElements.length + 1; // Set the zIndex to the top
            
            console.log("⚠️   " + elmnt.id + " selected!");            // 
            if(lastSelectedNote != null) {                             //       DEBUG THINGS
                console.log(lastSelectedNote.id + " ES LA DE ANTES");  //
            }

            notes.forEach(function(note){   // -1 to every note but cant go below 0
                if (note.style.zIndex != 0) {
                    note.style.zIndex = note.style.zIndex - 1;   
                }
                console.log(note.id + " " + note.style.zIndex);
            });
    
            lastSelectedNote = elmnt;   // Save for later the selected note
            console.log(lastSelectedNote.id + "ES LA NUEVA");
        }
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}