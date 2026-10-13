// Cole aqui a URL direta do asset MacroDeTeclas.exe na GitHub Release publicada.
// Exemplo de onde obter: página da Release > Assets > botão direito no .exe > copiar link.
const RELEASE_ASSET_URL = "";

const downloadButtons = [
  { button: document.getElementById("download-button"), status: document.getElementById("download-status") },
  { button: document.getElementById("download-button-bottom"), status: document.getElementById("download-status-bottom") },
];

for (const { button, status } of downloadButtons) {
  button.addEventListener("click", () => {
    if (!RELEASE_ASSET_URL) {
      status.textContent = "O download será liberado depois que o executável for publicado em uma GitHub Release.";
      return;
    }

    window.location.assign(RELEASE_ASSET_URL);
  });
}
