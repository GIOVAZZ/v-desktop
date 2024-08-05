

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1'; 
        }, index * 200); 
    });
});

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-image');
        modal.style.display = 'flex';

        document.addEventListener('DOMContentLoaded', () => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1'; 
                }, index * 200); 
            });
        });
        
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                const modalImg = document.getElementById('modal-image');
                modal.style.display = 'flex';
                modal.classList.add('show');
                modalImg.src = img.src;
            });
        });
        
        document.getElementById('close').addEventListener('click', () => {
            const modal = document.getElementById('modal');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Aguarda a animação de fechamento
        });
        
        // Fechar o modal quando clicar fora da imagem
        window.addEventListener('click', (event) => {
            if (event.target === document.getElementById('modal'))      {
                document.getElementById('modal').classList.remove('show');
                setTimeout(() => {
                    document.getElementById('modal').style.display = 'none';
                }, 300); // Aguarda a animação de fechamento
            }
        });
        
        modal.classList.add('show');
        modalImg.src = img.src;
    });
});

document.getElementById('close').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Aguarda a animação de fechamento
});

// Fechar o modal quando clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').classList.remove('show');
        setTimeout(() => {
            document.getElementById('modal').style.display = 'none';
        }, 300); // Aguarda a animação de fechamento
    }
});
