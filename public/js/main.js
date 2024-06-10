document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.querySelector('.content');

    const files = [
        'doc/index.html',
        'img/index.html',
        'other/index.htm',
        'public/css/index.html',
        'public/img/doc.png',
        'public/img/favicon.png',
        'public/img/img.png',
        'public/img/index.html',
        'public/img/other.png',
        'public/img/video.png',
        'public/img/voice.png',
        'public/img/wenjianjia.png',
        'public/img/zip.png',
        'video/index.html',
        'voice/index.html',
        'zip/index.html'
    ];

    files.forEach(file => {
        const fileLink = document.createElement('a');
        fileLink.href = file;
        fileLink.textContent = file;
        fileLink.style.display = 'block';
        contentDiv.appendChild(fileLink);
    });
});
