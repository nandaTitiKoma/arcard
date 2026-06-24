// Custom component for drawing vector brand icons dynamically on Canvas
AFRAME.registerComponent('social-icon', {
    schema: {
        type: { type: 'string', default: 'globe' },
        iconColor: { type: 'string', default: '#ffffff' }
    },
    init: function () {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        // Transparent background
        ctx.clearRect(0, 0, 256, 256);

        // Draw SVG icon
        ctx.fillStyle = this.data.iconColor;
        ctx.save();
        ctx.translate(32, 32); // Center 192x192 icon inside 256x256 canvas
        ctx.scale(12, 12);    // Scale 16x16 Bootstrap path to 192x192

        let pathStr = '';
        const type = this.data.type;
        if (type === 'tiktok') {
            pathStr = "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.38 13.84 3.99 15 4v2c-.775-.016-1.747-.252-2.626-.879a5.25 5.25 0 0 1-1.374-1.405v6.52A5.11 5.11 0 0 1 6 15a5.05 5.05 0 0 1-5-5.07c0-2.76 2.24-5 5-5 .54 0 1.04.09 1.51.25V7.4A3.01 3.01 0 0 0 6 7a3.07 3.07 0 0 0-3 3.07C3 11.72 4.3 13 6 13c1.61 0 3-1.25 3-2.92V0z";
        } else if (type === 'youtube') {
            pathStr = "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.104 2.06l-.008.105-.024.277-.01.104c-.049.516-.12 1.018-.22 1.399a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.277-.01-.172-.007C2.9 14.183 1.83 14.074 1.365 13.9a2.01 2.01 0 0 1-1.415-1.419C-.15 12.1.034 11 .034 11s-.116-.856-.118-2.022L-.085 8.878V8.12l.006-.104c.066-.914.074-1.77.075-1.956v-.076c.002-.194.01-1.108.104-2.06l.008-.105.024-.277.01-.104c.049-.516.12-1.018.22-1.399a2.01 2.01 0 0 1 1.415-1.42c1.09-.293 4.884-.332 5.922-.335h.089zM6.157 5.737V10.27l3.967-2.27z";
        } else if (type === 'instagram') {
            pathStr = "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0zm-.08 1.44h.08c2.133 0 2.384.008 3.226.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.908 2.47a2.76 2.76 0 1 0 0 5.52 2.76 2.76 0 0 0 0-5.52m0 1.44a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64";
        } else if (type === 'github') {
            pathStr = "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8";
        }

        const path = new Path2D(pathStr);
        ctx.fill(path);
        ctx.restore();

        // Generate texture and apply to entity mesh
        const texture = new THREE.CanvasTexture(canvas);
        const material = this.el.getObject3D('mesh').material;
        material.map = texture;
        material.needsUpdate = true;
    }
});

// Custom component for handling hover animations, click feedback, and URL navigation
AFRAME.registerComponent('clickable-button', {
    schema: {
        url: { type: 'string', default: '' }
    },
    init: function () {
        const el = this.el;
        const data = this.data;

        // Scale up on mouseenter (Hover)
        el.addEventListener('mouseenter', () => {
            el.setAttribute('animation__scale', {
                property: 'scale',
                to: '1.15 1.15 1.15',
                dur: 150,
                easing: 'easeOutQuad'
            });
        });

        // Scale back to normal on mouseleave
        el.addEventListener('mouseleave', () => {
            el.setAttribute('animation__scale', {
                property: 'scale',
                to: '1 1 1',
                dur: 150,
                easing: 'easeOutQuad'
            });
        });

        // Tactile feedback on click press
        el.addEventListener('mousedown', () => {
            el.setAttribute('scale', '0.9 0.9 0.9');
        });

        el.addEventListener('mouseup', () => {
            el.setAttribute('scale', '1.15 1.15 1.15');
        });

        // Action on click/tap (with popup blocker fallback)
        el.addEventListener('click', () => {
            if (data.url) {
                try {
                    const newWindow = window.open(data.url, '_blank');
                    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                        // Fallback: open in same window if popup is blocked
                        window.location.href = data.url;
                    }
                } catch (e) {
                    window.location.href = data.url;
                }
            }
        });
    }
});

// Handle Marker visibility states to toggle the visual overlay helper and HUD social menu
window.addEventListener('DOMContentLoaded', () => {
    const marker = document.querySelector('a-marker');
    const overlay = document.getElementById('ar-overlay');
    const socialMenu = document.getElementById('social-overlay-menu');

    marker.addEventListener('markerFound', () => {
        // Hide scan overlay
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);

        // Show social media overlay HUD menu
        if (socialMenu) {
            socialMenu.style.display = 'flex';
            // Force layout reflow
            socialMenu.offsetHeight;
            socialMenu.classList.add('show');
        }
    });

    marker.addEventListener('markerLost', () => {
        // Show scan overlay
        overlay.style.display = 'flex';
        overlay.offsetHeight;
        overlay.style.opacity = '1';

        // Hide social media overlay HUD menu
        if (socialMenu) {
            socialMenu.classList.remove('show');
            setTimeout(() => {
                if (!socialMenu.classList.contains('show')) {
                    socialMenu.style.display = 'none';
                }
            }, 400);
        }
    });
});
