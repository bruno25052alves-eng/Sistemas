// Barra de progresso ao rolar
window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Animação de entrada nas seções
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Botão voltar ao topo
const topButton = document.createElement("button");
topButton.innerHTML = "⬆";
topButton.id = "topButton";
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.background = "#00f5ff";
topButton.style.boxShadow = "0 0 20px #00f5ff";
topButton.style.zIndex = "999";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Efeito neon nos links da sidebar
const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.boxShadow = "0 0 20px #00f5ff";
    });

    link.addEventListener("mouseleave", () => {
        link.style.boxShadow = "none";
    });
});
