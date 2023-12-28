const container = document.getElementById('major-square');

function createDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        //creates new elements
        let innersquare = document.createElement('div');
        //creates a class for the div
        innersquare.className = 'square';

        container.appendChild(innersquare);
    }
}

document.getElementById('click').addEventListener('click', function() {
    return createDivs(256);
})