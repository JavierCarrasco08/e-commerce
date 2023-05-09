import iphone11 from "./assets/images/mobile/iphone11.webp";
import iphone14pro from "./assets/images/mobile/iphone14pro.webp";
import samsungA13 from "./assets/images/mobile/samsungA13.webp";
import samsungA53 from "./assets/images/mobile/samsungA53.webp";
import Nintendo from "./assets/images/consola/nintendoSwitchOledNeon.webp";
import xbox from "./assets/images/consola/xboxSeriesS.webp";
import tablet from "./assets/images/tablet/huionH640p.webp";
import hpElitebook from "./assets/images/laptop/laptopHpElitebook840.webp";
import lenovoN23 from "./assets/images/laptop/lenovoN23.webp";
import macBook from "./assets/images/laptop/macbookProM2.webp";

let data = {
  mobile: [
    {
      id: "m0",
      name: "iPhone 11",
      price: 500,
      src: iphone11,
      characteristics: {
        memory: 128,
        backCamera:
          "Main: 12MP, f/1.8, 26mm, OIS, QuadLED flash Secondary wide-angle: 12MP, f/2.4, 13mm, 120º. Video: 4K/60fps, 1080p/240fps, HDR",
        frontCamera: "12MP, f/2.2, TOF 3D, slow-motion",
        ram: 4,
        software: "IOS 13",
      },
    },
    {
      id: "m1",
      name: "iPhone 14 Pro",
      price: 999,
      src: iphone14pro,
      characteristics: {
        memory: 512,
        backCamera:
          "Main: 48MP, f/1.78, 24mm, OIS Ultra wide-angle: 12MP, f/2.2, 13mm Telephoto: 12MP, f/2.8, 77mm, OIS",
        frontCamera: "12MP, f1.9, auto focus",
        ram: 6,
        software: "IOS 16",
      },
    },
    {
      id: "m2",
      name: "Samsung A13",
      price: 230,
      src: samsungA13,
      characteristics: {
        memory: 128,
        backCamera:
          "Main: 50 megapixels f/1.8 Wide: 5 megapixels f/2.2 Depth: 2 megapixels f/2.4 Macro: 2 megapixels f/2.4",
        frontCamera: "8 megapixels f/2.2",
        ram: 4,
        software: "Android 12",
      },
    },
    {
      id: "m3",
      name: "Samsung A53",
      price: 360,
      src: samsungA53,
      characteristics: {
        memory: 256,
        backCamera:
          "Main: 64-megapixel sensor, f/1.8 aperture value optics and optical stabilization Ultra wide-angle: 12-megapixel sensor and f/2.2 aperture value optics. Depth camera: 5-megapixel sensor and f/2.4 aperture value optics Macro camera: 5-megapixel sensor and f/2.4 aperture value optics",
        frontCamera: "32-megapixel sensor and f/2.2 aperture value optics",
        ram: 6,
        software: "Android 12",
      },
    },
  ],
  console: [
    {
      id: "c0",
      name: "Nintendo Switch Oled Neon",
      price: 360,
      src: Nintendo,
      characteristics: {
        memory: 64,
        screen: "7 inch (17.78 cm) OLED screen",
        audio: "Improved audio",
      },
    },
    {
      id: "c1",
      name: "Xbox Series S",
      price: 600,
      src: xbox,
      characteristics: {
        memory: "10 GB GDDR6 128-bit wide 10 GB GDDR6 bus",
        bandwidth: "8 GB a 224 GB/s, 2 GB a 56 GB/s",
        CPU: "3.6 GHz (3.4 GHz with SMT) custom 8-core Zen 2 CPU",
        GPU: "GPU de 4 TERAFLOPS, 20 CU a 1,565 GHz con RDNA 2 personalizada",
      },
    },
  ],
  tablet: [
    {
      id: "t0",
      name: "Huion H640p",
      price: 500,
      src: tablet,
      characteristics: {
        "Pressure sensitivity": "8192 Levels",
        "Connectivity technology": "USB",
      },
    },
  ],
  laptop: [
    {
      id: "l0",
      name: "HP Elitebook 840 G3",
      price: 600,
      src: hpElitebook,
      characteristics: {
        processor: "Intel Core i5 6200U",
        "Graphics card": "Intel HD Graphics 520",
        "Operating system": "Windows 10 pro 64bits",
        memory: 512,
        ram: 16,
      },
    },
    {
      id: "l1",
      name: "Chormebook Lenovo N23",
      price: 150,
      src: lenovoN23,
      characteristics: {
        processor: "Intel Celeron N3060",
        memory: 16,
        "Operating system": "Windows 10",
        ram: 4,
      },
    },
    {
      id: "l2",
      name: "Mac Book Pro M2",
      price: 900,
      src: macBook,
      characteristics: {
        processor: "M2 8-Core Chip",
        "Graphics card": "M2 10 Cores",
        memory: 512,
        ram: 8,
      },
    },
  ],
};
export default data;
