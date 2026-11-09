# Birthday.exe — Editable Ninja Birthday Website

A static HTML/CSS/JavaScript birthday website featuring ten tiny anime-style ninjas, glowing micro-pieces that assemble into a birthday message, a cake with candles that light sequentially, confetti, a secret letter, and a make-a-wish button.

## Files

- `index.html` — all page sections and HTML structure
- `style.css` — colors, typography, layout, cake illustration, responsive design
- `settings.js` — **edit this first** to personalize headings, the birthday letter, and footer
- `script.js` — ninja animation, particle field, interactive cake and sounds

## Run locally

Double-click `index.html`. It opens directly in your browser. No installation, npm, or server is needed. The site fetches Google Fonts if you are online and uses fallback fonts otherwise.

## Make it personal

1. Open `settings.js` in VS Code, Notepad, or any text editor.
2. Change the phrases inside quotation marks, especially `heroDescription` and `letterBody`.
3. Save and refresh the page in your browser.
4. Edit `style.css` to change the theme, or `index.html` to modify sections.
5. Edit `script.js` only if you want to change the animation timing, particle effects, or candle behavior.

**Note:** The “millions” are part of the story. To keep animation smooth, the website uses optimized canvas effects to represent a huge number of glowing fragments, rather than rendering one million separate HTML elements.

## Host your website free with Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag the **extracted** `birthday-ninja-editable` folder onto the drop zone, not the ZIP itself.
3. Netlify will give you a public `.netlify.app` link you can share.
4. To publish future updates, edit the files, then redeploy the folder to the same site.

Optional GitHub Pages: upload the files to a GitHub repository and enable Pages from the repository settings. Make sure `index.html` is at the project root.

## Rights

The page contains original browser-drawn ninja graphics and does not rely on copyrighted character sprite images.
