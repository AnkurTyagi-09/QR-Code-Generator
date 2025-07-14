function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCode = document.getElementById("qrCode");

    if (qrText.trim() === "") {
        alert("Please enter text or a URL!");
        return;
    }

    // Generate QR code using API
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;
    qrCode.style.display = "block";
}
