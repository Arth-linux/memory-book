function startBook() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("book").style.display = "flex";

    render();
}

function render() {
    const spread = spreads[index];

    const left = document.getElementById("leftPage");
    const right = document.getElementById("rightPage");

    left.innerHTML = "";
    right.innerHTML = "";

    // LEFT PAGE IMAGES
    spread.left.forEach(img => {
        let el = document.createElement("img");
        el.src = img;
        left.appendChild(el);
    });

    // RIGHT PAGE IMAGES
    spread.right.forEach(img => {
        let el = document.createElement("img");
        el.src = img;
        right.appendChild(el);
    });
}

function next() {
    if (index < spreads.length - 1) {
        index++;
        render();
    }
}

function prev() {
    if (index > 0) {
        index--;
        render();
    }
}