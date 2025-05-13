document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    
    if (path === '/free-video-shoot' && !document.URL.includes('index-freevideo.html')) {
        window.location.href = '/index-freevideo.html';
    } else if (path === '/' && !document.URL.includes('index.html')) {
        window.location.href = '/index.html';
    }
});
