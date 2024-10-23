// Script to handle modal opening and closing
document.getElementById('addContactBtn').onclick = function() {
    document.getElementById('contactModal').style.display = 'block';
};

document.getElementById('closeContact').onclick = function() {
    document.getElementById('contactModal').style.display = 'none';
};

document.getElementById('addProjectBtn').onclick = function() {
    document.getElementById('projectModal').style.display = 'block';
};

document.getElementById('closeProject').onclick = function() {
    document.getElementById('projectModal').style.display = 'none';
};

document.getElementById('addTaskBtn').onclick = function() {
    document.getElementById('taskModal').style.display = 'block';
};

document.getElementById('closeTask').onclick = function() {
    document.getElementById('taskModal').style.display = 'none';
};

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
