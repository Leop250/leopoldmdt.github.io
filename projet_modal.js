document.addEventListener('DOMContentLoaded', function() {
    const projetBtns = document.querySelectorAll('.btn-small');
    const modal = document.querySelector('.projet-modal');
    const closeBtn = document.querySelector('.close-btn');

    projetBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});