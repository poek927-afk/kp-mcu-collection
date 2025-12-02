// Home button animation
const homeBtn = document.getElementById("homeBtn");

if (homeBtn) {
    homeBtn.addEventListener("mouseover", () => {
        homeBtn.style.transform = "scale(1.15)";
        homeBtn.style.backgroundColor = "#ff7f7f";
    });

    homeBtn.addEventListener("mouseout", () => {
        homeBtn.style.transform = "scale(1)";
        homeBtn.style.backgroundColor = "#ff1f1f";
    });
}