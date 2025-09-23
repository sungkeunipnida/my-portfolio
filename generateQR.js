import QRCode from "qrcode";

// PNG 생성 (흑백)
QRCode.toFile("./domain-qr.png", "https://sungkeun.com", {
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
});

// SVG 생성 (흑백)
QRCode.toFile("./domain-qr.svg", "https://sungkeun.com", {
  type: "svg",
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
});
