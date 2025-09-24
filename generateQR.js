import QRCode from "qrcode";

const url = "https://sungkeun.com";

QRCode.toFile(
  "domain-qr-transparent.png",
  url,
  {
    width: 1000, // 크기
    margin: 2, // 여백
    color: {
      dark: "#000000", // 전경(검정)
      light: "#00000000", // ✅ 투명 (RGBA Hex: 마지막 두 자리 00 = 투명)
    },
  },
  function (err) {
    if (err) throw err;
    console.log("✅ 투명 배경 PNG QR 코드가 생성되었습니다!");
  }
);

QRCode.toFile(
  "domain-qr-transparent.svg",
  url,
  {
    margin: 2,
    color: {
      dark: "#000000", // 전경
      light: "#00000000", // 배경 투명
    },
  },
  function (err) {
    if (err) throw err;
    console.log("✅ 투명 배경 SVG QR 코드가 생성되었습니다!");
  }
);
