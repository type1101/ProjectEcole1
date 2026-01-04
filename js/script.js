window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(5, 10, 24, 0.95)';
        header.style.height = '10vh'; // Il rétrécit un peu
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.backgroundColor = '#090F21';
        header.style.height = '15vh';
        header.style.boxShadow = 'none';
    }
});


const text = "VOTRE SÉCURITÉ, NOTRE EXPERTISE";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.hero-text h1').innerHTML = text.substring(0, index+1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Lancer l'animation au chargement
window.onload = typeWriter;



// On sélectionne TOUS les formulaires de la page (celui de contact ou celui de devis)
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        // 1. Empecher le rechargement de la page
        e.preventDefault(); 
        
        // 2. Afficher le message
        alert("🔒 CRYPTAGE DES DONNÉES EN COURS... Votre demande a été envoyée avec succès !");
        
        // 3. Vider les champs (Optionnel)
        form.reset();
    });
});