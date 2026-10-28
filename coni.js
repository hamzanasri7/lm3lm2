document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Gestion de l'affichage du mot de passe
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function (e) {
        // Alterner entre le type "password" et "text"
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Changer l'icône de l'œil (fa-eye vs fa-eye-slash)
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // 2. Gestion de la soumission du formulaire
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        // Simulation d'une connexion
        if(email && password) {
            // Ici vous pourriez ajouter un appel API (fetch)
            alert(`Connexion réussie pour : ${email}`);
            // Redirection exemple : window.location.href = "/dashboard";
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});