const wallet = "0x35cb65d96069F420E45999752C0c13594d6479Ea";

document.getElementById('coin').addEventListener('click', settings);
const qrcode = document.getElementById("qrcode");

function settings() {
    if (qrcode.hidden) {
      qrcode.hidden = false;
    } else {
      qrcode.hidden = true;
    }
}

QRCode.toCanvas(wallet, { width: 128 }, function (err, canvas) {
    if (err) throw err;
    const container = document.getElementById('qrcode');
    container.appendChild(canvas);
});
