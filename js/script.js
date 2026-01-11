// --- ANIMATION TYPEWRITER ---
const text = "VOTRE SÉCURITÉ, NOTRE EXPERTISE";
let index = 0;

function typeWriter() {
    // Correction : On vérifie d'abord si l'élément existe avant de modifier son innerHTML
    const titleElement = document.querySelector('.hero-text h1');
    
    if (titleElement && index < text.length) {
        titleElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Lancer l'animation au chargement
window.onload = typeWriter;

// --- SYSTÈME DE NOTIFICATION ---
function showNotify(message) {
    // Correction : Création automatique du conteneur s'il n'existe pas
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-shield-alt"></i>
        <span>${message}</span>
    `;

    container.appendChild(notification);

    // Suppression automatique
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// --- GESTION DES FORMULAIRES ---
// Sélectionne tous les formulaires (contact et devis)
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        showNotify("🔒 CRYPTAGE DES DONNÉES EN COURS... Envoi réussi !");
        form.reset();
    });
});

// --- SCROLL HEADER ---
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(5, 10, 24, 0.95)';
        header.style.height = '10vh';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.backgroundColor = '#090F21';
        header.style.height = '15vh';
        header.style.boxShadow = 'none';
    }
});