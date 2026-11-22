// ---- Música: "Aliança" (Tribalistas, ao vivo) via YouTube ----
const VIDEOS = ['DbjaBvcsJmk', '4118vSxbktc']; // principal + alternativa
let player, ready = false, wantPlay = false, vi = 0;
const toggle = document.getElementById('musicToggle');

window.onYouTubeIframeAPIReady = function () {
  const vars = { rel: 0, playsinline: 1, modestbranding: 1 };
  if (location.protocol.startsWith('http')) vars.origin = location.origin;
  player = new YT.Player('yt', {
    videoId: VIDEOS[0], width: '100%', height: '100%', playerVars: vars,
    events: {
      onReady() { ready = true; if (wantPlay) player.playVideo(); },
      onStateChange(e) { toggle.classList.toggle('playing', e.data === YT.PlayerState.PLAYING); },
      onError() { if (vi < VIDEOS.length - 1) { vi++; player.loadVideoById(VIDEOS[vi]); } }
    }
  });
};
function startMusic() { wantPlay = true; if (ready) player.playVideo(); }
toggle.addEventListener('click', () => {
  if (!ready) return;
  player.getPlayerState() === YT.PlayerState.PLAYING ? player.pauseVideo() : player.playVideo();
});

// ---- Carta ----

    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const hint = document.getElementById('hint');
    envelope.addEventListener('click', () => {
      envelope.classList.add('open');
      startMusic();
      hint.textContent = 'UMA CARTA ESPECIAL, SÓ PARA TI';
      setTimeout(() => {
        letter.classList.add('show');
        letter.scrollIntoView({behavior:'smooth',block:'start'});
      }, 650);
    });
    function hearts() {
      const h = document.createElement('span');
      h.className = 'heart';
      h.textContent = ['♡','♥','✧'][Math.floor(Math.random()*3)];
      h.style.left = Math.random()*100 + 'vw';
      h.style.fontSize = (14+Math.random()*23)+'px';
      h.style.animationDuration = (5+Math.random()*4)+'s';
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),9500);
    }
    document.getElementById('yes').addEventListener('click', () => {
      const answer = document.getElementById('answer');
      answer.innerHTML = 'Então que comece a nossa história. Que seja bonita, verdadeira e nossa. Obrigado por me dares esta alegria, Sheila. ♡';
      answer.classList.add('show');
      for(let i=0;i<32;i++) setTimeout(hearts,i*90);
    });
    document.getElementById('later').addEventListener('click', () => {
      const answer = document.getElementById('answer');
      answer.textContent = 'Claro. Não quero que sintas pressão. O que mais importa é que a tua resposta seja sincera. ♡';
      answer.classList.add('show');
    });
