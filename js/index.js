const darkModeButton = document.getElementById('darkMode');
const lightModeButton = document.getElementById('lightMode');

darkModeButton.onclick = function() {
        document.body.style.backgroundColor = '#090C0B';
        darkModeButton.style.display = 'none';
        lightModeButton.style.display = 'block';
}

lightModeButton.onclick = function() {
    document.body.style.backgroundColor = '#E5E3DC';
    darkModeButton.style.display = 'block';
    lightModeButton.style.display = 'none';
}