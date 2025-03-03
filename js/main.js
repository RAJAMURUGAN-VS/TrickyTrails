document.addEventListener("DOMContentLoaded", () => {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }
                return response.text();
            })
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error("Error loading component:", error));
    }

    loadComponent("header", "components/header.html");
    loadComponent("secondary-nav", "components/secondary-nav.html");
    loadComponent("hero-section", "components/hero-section.html");
    loadComponent("game-cards", "components/game-cards.html");
    loadComponent("promo", "components/promo.html");
    loadComponent("footer-links", "components/footer-links.html");
    loadComponent("footer-bottom", "components/footer-bottom.html");
});
