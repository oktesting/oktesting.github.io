[![Build and Deploy](https://github.com/oktesting/oktesting.github.io/actions/workflows/build-and-deploy.yaml/badge.svg)](https://github.com/oktesting/oktesting.github.io/actions/workflows/build-and-deploy.yaml)

# nextjs-scaffolding

install nextjs dependencies: next, react-dom, react...

create `/src/pages` and other nextjs's files inside. convert the `index.html` code into `/pages/index.js` and break it down into reusable layout components

move css and scss file from `/assets` folder in to `/src/styles`. import and use tailwind.css globally in `/pages/_app.js`. rename the `*.scss` file into `*.module.scss` in order to import and use in a specific component

update `tailwind.config.js`, `.gitignore` file

add and update `.eslintrc.js` and `next.config.js`

remove unused files: `vite.config.js`, `/assets/index.js`, `index.html`

## support themes in nextjs to work with tailwind darkmode

install `next-themes`

surround the `/pages/_app.js` component with `<ThemeProvider attribute="class">` tag

create `/pages/_document.js` file to control `<body className="dark:bg-dark-mode">` tag with tailwind darkmode

add the class `.content-wrapper` to smooth the theme transition

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
