// tijd.js
function updateTijdsdeel() {
  const uur = new Date().getHours();
  const span = document.getElementById('tijdsdeel');
  
  if (uur >= 6 && uur < 12) {
    span.textContent = 'ochtend';
  } else if (uur >= 12 && uur < 18) {
    span.textContent = 'middag';
  } else if (uur >= 18 && uur < 24) {
    span.textContent = 'avond';
  } else {
    span.textContent = 'nacht';
  }
}

// Direct uitvoeren bij laden
updateTijdsdeel();