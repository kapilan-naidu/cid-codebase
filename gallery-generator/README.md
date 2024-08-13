# Image Gallery Generator

This is a simple static site generator that creates an image gallery from a directory of input images.

## Prerequisites

- Node.js and npm

## Installation

1. Clone the repository and switch to the project directory:
   ```
   git clone https://github.com/kapilan-naidu/cid-codebase.git
   cd cid-codebase/gallery-generator
   ```
2. Install dependencies:
   ```
   npm install
3. Add your images to the ``input_images`` directory. You may choose to delete the provided sample images so they do not appear within your own gallery after building.
4. Generate the gallery:
   ```
    npm run build
5. View the generated site files in the `dist` directory.
   
## Customization

You can change the titles and headings before building a gallery. Make the required changes directly within `template/index.html`.

## Deployment

You can now deploy the generated static site to any hosting platform of your choice. It is recommended to optimize image files using a tool like imageOptim before running the `build` command.
