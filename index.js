import fs from "fs";
import path from "path";
import webfontPkg from "webfont";
const webfont = webfontPkg.default;

const destDir = './dist/fonts';

// Ensure the output directory exists
fs.mkdirSync(destDir, { recursive: true });

webfont({
  files: "images/*.svg",
  dest: destDir,
  fontName: "pentest",
  template: "css",
  templateFontPath: "./", // Path used in the generated CSS for @font-face src
}).then((result) => {
    // Write font files
    if (result.woff2) fs.writeFileSync(path.join(destDir, `pentest.woff2`), result.woff2);
    if (result.woff) fs.writeFileSync(path.join(destDir, `pentest.woff`), result.woff);
    if (result.ttf) fs.writeFileSync(path.join(destDir, `pentest.ttf`), result.ttf);
    if (result.eot) fs.writeFileSync(path.join(destDir, `pentest.eot`), result.eot);
    if (result.svg) fs.writeFileSync(path.join(destDir, `pentest.svg`), result.svg);

    // Update CSS to include woff2 at the top of src
    let css = result.template;
    css = css.replace(
      /src:\s*url\("pentest\.woff"\) format\("woff"\),/i,
      `src: url("pentest.woff2") format("woff2"),
       url("pentest.woff") format("woff"),`
    );
    fs.writeFileSync(path.join(destDir, `pentest.css`), css);

    console.log("Font files and CSS (with woff2) generated in", destDir);
  }).catch((error) => {
    throw error;
  });