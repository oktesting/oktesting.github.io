# tailwind-css-scaffolding

## development

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

or create `vite.config.js` file then setup command in `package.json`

## deployment

- add `build-and-deploy.yaml` file to `.github/workflows` dir.

 - in yaml file, set `dev` as the destination branch for latest features to be applied.

 - after build step, the output `build` folder will be push to branch `dev-preview`.

- create new secret in github setting

- add created secret to repo's Settings/Secrets (must be matched with `GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN_GITHUB }}` in yaml file)

- push current branch, create pull req to dev, wait for workflows run ok, merge

- in repo's Settings/Pages, change current source to `dev-preview` branch. (the latest changes resulted in `dev`, is also applied to `dev-preview` after build process, which will be picked up and served in github pages as static site)

---
