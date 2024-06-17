document.getElementById('availableTag').onclick = function() {
    document.getElementById('workModal').style.display = 'block';
};

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('workModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('workModal')) {
        document.getElementById('workModal').style.display = 'none';
    }
};
