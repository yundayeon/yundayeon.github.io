document.getElementById("agree").onclick = function() {
    alert("당신은 천재입니다!");
}
document.getElementById("disagree").onclick = function() {
    alert("당신은 바보입니다.");
}

function changeImage() {
    const img = document.getElementById('myHamster');

    if (img.src.includes("hamster1.jpeg")) {
        img.src = "hamster2.jpeg";
    } else {
        img.src = "hamster1.jpeg";
    }
}