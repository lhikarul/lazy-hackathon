const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["./src/image/*.{jpg,png}"], {
  destination: "./src/image",
  plugins: [webp({ quality: 60 })],
});
