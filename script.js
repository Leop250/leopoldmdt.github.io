

document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio chargé avec succès !");

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const text = "Je transforme des données complexes en visualisations claires et en analyses exploitables pour aider les entreprises à prendre des décisions éclairées.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 30);
        }
    }

    typeText();
});