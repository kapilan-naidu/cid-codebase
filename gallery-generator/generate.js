const fs = require("fs-extra");
const path = require("path");

// Path to directories
const imagesDir = path.join(__dirname, "input_images");
const stylesDir = path.join(__dirname, "template/css");
const outputDir = path.join(__dirname, "dist");

// Ensure the output directory exists
fs.ensureDirSync(outputDir);

// Read all image files from the images directory
const images = fs.readdirSync(imagesDir).filter((file) => {
  return [".jpg", ".jpeg", ".png", ".gif"].includes(path.extname(file).toLowerCase());
});

// Create the HTML content
const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- Update page title -->
      <title>15 Minutes of Coding – CiD 1 AY2425 | Code Drawing Gallery</title>
      <link rel="stylesheet" href="css/normalize.css" />
      <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body>
      <header>
        <!-- Update heading -->
        <div class="heading">
          <h2>15 Minutes of Coding</h2>
          <p>Computation in Design 1, August 2024</p>
          <p>Activity – Week 1</p>
        </div>
        <!-- Update link to slides -->
        <a href="https://slides.com/sojamo/cid-1-2425/fullscreen#/7/12">Link to slides →</a>
      </header>
      <main>
        <div class="gallery">
          ${images.map((img) => `<img src="images/${img}" alt="${img}">`).join("")}
        </div>
      </main>
      <dialog>
        <img src="images/test_3.jpg" />
        <form method="dialog">
          <button>×</button>
        </form>
      </dialog>
      <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", () => {
          let images = document.querySelectorAll(".gallery img");
          let modal = document.querySelector("dialog");
  
          images.forEach((image) => {
            image.addEventListener("click", () => {
              let modalImg = modal.querySelector("img");
              modalImg.src = image.src;
              modal.showModal();
            });
          });
        });
      </script>
    </body>
  </html>
`;

// Write the HTML file to the output directory
fs.writeFileSync(path.join(outputDir, "index.html"), htmlContent);

// Copy images to the output directory
fs.copySync(imagesDir, path.join(outputDir, "images"));

// Copy stylesheets to the output directory
fs.copySync(stylesDir, path.join(outputDir, "css"));

console.log("Gallery generated successfully!");
