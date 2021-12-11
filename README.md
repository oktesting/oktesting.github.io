# tailwind-css-scaffolding
npm init the project and install install packages: vite (live dev server), autoprefixer, postcss, tailwindcss

to scaffold project with tailwindcss run, it creates 2 config files, `tailwind.config.js` and `postcss.config.js`
```
npx tailwindcss init -p
```

in `tailwind.config.js` set mode to 'jit' and set the purge to ['./**/*.html']. it help the development process lighter when the dev server serves only needed css to the browser. otherwise,the css file in the browser while developing is bloated with unused css.

> checkout `npx tailwind -h` and `npx vite --help` first and try out more options.

to output the production css file from ./css/tailwind.css run 
```
npx tailwindcss -i ./css/tailwind.css -o css/style.production.css --purge="./**/*.html"
```

to build the production codes run 
```
npx vite build --outDir=build --minify=false
```