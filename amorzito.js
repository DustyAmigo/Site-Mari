// Configurações e dados
const photoUrls = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
];

const romanticMessages = [
  "Te pedir em namoro foi a minha melhor escolha.",
  "Adorei ficar durante a madrugada esperando na rodoviária só pra te ver.",
  "Você é a razão do meu sorriso todos os dias.",
  "Acredito que não exista um sinônimo capaz de quantificar sua beleza.",
  "Eu ainda lembro de como foi se prender em seu olhar",
  "Seu sorriso ilumina até os meus dias mais nublados.",
  "Só penso em você, pois meu coração ainda bate.",
  "Queria te mostrar o quanto você é importante pra mim, todos os dias.",
  "deusolivre, Meu amor eu te amo! 🌟💖"
]

// Estado da aplicação
let currentPhotoIndex = 0;
let currentMessageIndex = 0;

// Elementos DOM
const mainPhoto = document.getElementById('main-photo');
const currentPhotoSpan = document.getElementById('current-photo');
const totalPhotosSpan = document.getElementById('total-photos');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const romanticMessage = document.getElementById('romantic-message');
const changeMessageBtn = document.getElementById('change-message-btn');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    // Configurar fotos
    totalPhotosSpan.textContent = photoUrls.length;
    updatePhoto();
}

function setupEventListeners() {
    // Controles de foto
    prevBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + photoUrls.length) % photoUrls.length;
        updatePhoto();
    });
    
    nextBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoUrls.length;
        updatePhoto();
    });
    
    // Mudança de mensagem
    changeMessageBtn.addEventListener('click', () => {
        currentMessageIndex = (currentMessageIndex + 1) % romanticMessages.length;
        updateMessage();
    });
}

function updatePhoto() {
    mainPhoto.style.opacity = '0';
    setTimeout(() => {
        mainPhoto.src = photoUrls[currentPhotoIndex];
        mainPhoto.style.opacity = '1';
        currentPhotoSpan.textContent = currentPhotoIndex + 1;
    }, 300);
}

function updateMessage() {
    romanticMessage.style.opacity = '0';
    changeMessageBtn.textContent = '💖 Carregando...';
    changeMessageBtn.disabled = true;
    
    setTimeout(() => {
        romanticMessage.textContent = romanticMessages[currentMessageIndex];
        romanticMessage.style.opacity = '1';
        changeMessageBtn.textContent = '💕  Aperte Aqui';
        changeMessageBtn.disabled = false;
    }, 500);
}