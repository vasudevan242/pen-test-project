import svgtofont from 'svgtofont';
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.resolve(__dirname, "./");

svgtofont({
  src: path.resolve(process.cwd(), "images"), // svg path, only searches one level, not recursive
  dist: path.resolve(process.cwd(), "fonts"), // output path
  fontName: "pentest", // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  // website = null, no demo html files
  website: {
    title: "pentest",
    logo: path.resolve(process.cwd(), "svg", "git.svg"),
    // Ensure you import pkg if you use pkg.version or assign a version string
    version: "1.0.0", 
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: "",
    corners: {
      url: 'https://github.com/jaywcjlove/svgtofont',
      width: 62, // default: 60
      height: 62, // default: 60
      bgColor: '#dc3545' // default: '#151513'
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/jaywcjlove/svgtofont"
      },
      {
        title: "Feedback",
        url: "https://github.com/jaywcjlove/svgtofont/issues"
      },
      {
        title: "Font Class",
        url: "index.html"
      },
      {
        title: "Unicode",
        url: "unicode.html"
      }
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/jaywcjlove/svgtofont">open-sourced</a>)`
  }
}).then(() => {
  console.log('done!');
}).catch(err => {
  console.error(err);
});