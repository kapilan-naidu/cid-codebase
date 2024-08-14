const fs = require("fs-extra");
const path = require("path");

// Paths
const imagesDir = path.join(__dirname, "input_images");
const stylesDir = path.join(__dirname, "template/css");
const outputDir = path.join(__dirname, "dist");

const templateFile = path.join(__dirname, "template/index.html");
const outputFile = path.join(outputDir, "index.html");

// Ensure the output directory exists
fs.ensureDirSync(outputDir);

// Read the template file
let templateContent = fs.readFileSync(templateFile, "utf-8");

// Get the image files from the images input directory
const images = fs.readdirSync(imagesDir).filter((file) => {
  return [".jpg", ".jpeg", ".png", ".gif"].includes(path.extname(file).toLowerCase());
});

// Generate the HTML for the images
const imagesHTML = images.map((img) => `<img src="images/${img}" alt="${img}">`).join("");

// Replace the placeholder in the template with the images HTML
templateContent = templateContent.replace("<!-- IMAGES_PLACEHOLDER -->", imagesHTML);

// Write the final HTML to the output file
fs.writeFileSync(outputFile, templateContent);

// Ensure the output images directory exists and is empty
const outputImagesDir = path.join(outputDir, "images");
fs.emptyDirSync(outputImagesDir);

// Copy images & stylesheets to the output directory
fs.copySync(imagesDir, outputImagesDir);
fs.copySync(stylesDir, path.join(outputDir, "css"));

console.log("Gallery generated successfully!");
