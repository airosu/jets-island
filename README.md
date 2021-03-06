# Jet's Island

Setetup steps for next js application from scratch and online business "Jet's Island" presentation.

## Architecture

This section will include all steps and packages needed to setup the codebase.

### Installation

First, the next.js project needs to be initialized. Make sure you have node installed locally, then run the create-next-app command with the --ts flag, for TypeScript. You can also add the . if you wish to install in the current folder, instead of creating a new one.

```
npx create-next-app@latest --ts .
```

### Engine locking

First, we will define the fact that this project is designed to be built and run with yarn (the default for create-next-app, instead of npm). We already initialized the project with yarn during the initial step, and a .yarnlock file was autogenerated.

##### .npmrc

We will create a .npmrc file, where we specify that the engine that we defined (yarn / npm) must strictly be used when workgin with this project

```
engine-strict=true
```

##### .nvmrc

We will create a .nvmrc to clarify which version of node we are using

```
v16.13.1
```

Depending on your needs, you may need to use an older node version (e.g. if you want to deploy on something like vercel, you may need to use a speciffic or older node version)

##### "engines" field to package.json

Add the following engine to the package.json file; with this engine locking in place, if someone tries to run 'npm install', which could create a package.lock file and cause conflicts, an error will be thrown.

### Eslint

By default, eslint also come preconfigured in the next app, so you can already run `yarn lint` and it will work, but we do want to add more configurations to make it a bit more strict.

The .eslint.json file already extends next/core-web-vitals, we will turn this into an array and add next and eslint/recommended

```
{
  "extends": [
    "next",
    "next/core-web-vitals",
    "eslint:recommended"
  ]
}
```

!!!NOTE!!! DO NOT ADD PRETTIER TO THIS LIST! I do not think you need it and it will make the rules not work.

When using react version 17 or newer, the React object is global, so you no longer need to import it in the scope of your components; to tell the linter that it does not need to warn us that we are using a variable that is not defined, we will add React it to the "globals" key:

```
{
  "globals": {
    "React": "readonly"
  }
}
```

Lastly, we will add an entry for rules, where we can manually turn on/off different rules we like / don't like. For example, we can set the no-unused-vars to X (0 = ok, 1 = warning, 2 = error) and make it ignore variables prefixed with "\_". All possible rules are documented here: https://nextjs.org/docs/basic-features/eslint

```
{
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

### Prettier

For code formatting, we will install prettier as a dev dependency.

```
yarn add -D prettier
```

With VS Code it is also highly recommended to use the prettier extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode, which will allow your editor to automatically format the code (e.g. on save), instead of relying on the command line tool.

##### .prettierignore

Used to set patterns of files and folders that we do not prettier to format:

```
.yarn
.next
dist
node_modules
```

##### .prettierrc

Can also be named .prettierrc.json, used to create rules for formatting code. Like thie .prettierignore, this file will also be used by both the "prettier" command, and the vs code plugin.

```
{
  "trailingComma": "all",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "overrides": [
    {
      "files": ["*.json", ".prettierrc"],
      "options": {
        "tabWidth": 2
      }
    },
    {
      "files": ["paths.ts", "apis.ts", "urls.ts"],
      "options": {
        "printWidth": 140
      }
    }
  ]
}
```

##### Add command to package.json

Adding amd running this script to the package.json file will enforce the code formatting rules (.prettierrc) on all files, except the ignored ones (.prettierignore). The --write flag is used to also save the files after changing them, and the . means to run in the whole project directory:

```
{
  "scripts": {
    "prettier": "prettier --write ."
  }
}
```

##### Personal settings.json file

I presonally have this configuration in my settings.json file, I prefer to only format on save and not on paste/type, and I also use a plugin called "Formatting Toggle" https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle, for situations where I need to turn off formatOnX (only the values in "formattingToggle.affects" will be affected, formatOnSave in my case as it is the only one that is't always set to false). Setting "prettier.requireConfig" to true will also only format projects that have a .prettierrc file, and not just everything.

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "formattingToggle.affects": ["formatOnSave"],
  "prettier.requireConfig": false, // Only format projects with Prettier config file
  "editor.tabSize": 4, // In sync with value from .prittierrc file
}
```

### Git hooks

Git hooks are scripts that run at different stages of the git process (commit, push, etc.). If the scripts fail, the git action is not completd. For example, you can make sure that the linter will pass before finishing the commit, or that the app can be successfully built before pushing the code to remote.

First, we need to install husky:

```
yarn add -D husky
```

Then, we need to initialize it. Running the husky install command will generate a .husky folder in our project; all scripts created here will be executed for all contributing developers:

```
npx husky install
```

!IMPORTANT! When creating a hook for the first time, it is highly recommended to use the cli commands (e.g. npx husky add...), as manually creating / copying the files can result in git related errors

##### pre-commit hook

To create a hook that runs each time we commit to the project, we need to add to "pre-commit"; here, we can add the "yarn lint" script to make sure that there are no linter errors before commiting

```
npx husky add .husky/pre-commit "yarn lint"
```

You can also add a rule to prevent commit on the main / master branch directly:

```
branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "master" ]; then
  echo "You can't commit directly to master branch"
  exit 1
fi
```

##### pre-push hook

To create a hook that runs each time we push to origin, we need to add to "pre-push"; here, er can add the "yarn build" script to make sure that the app can be successfully build before pushing.

```
npx husky add .husky/pre-push "yarn build"
```

##### prepare script

The prepare script will also need to be added to package.json.

When other people clone the project and run yarn install, this script it will also automatically install husky to make sure they all are making use of the git hooks.

```
"prepare": "husky install"
```

#### Debugging:

Check that git config core.hooksPath returns .husky (or your custom hooks directory):

```
git config core.hooksPath
```

Update git version:

```
git --version
git update-git-for-windows
```

##### Workaround for Windows 10, Git Bash and Yarn

Git hooks may fail when using Yarn on Windows with Git Bash (stdin is not a tty). If you have users on Windows, it's highly recommended to add the following workaround.
https://typicode.github.io/husky/#/?id=yarn-on-windows

1. Create .husky/common.sh:

```
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
```

2. Source it in in places where Yarn is used to run commands:

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
. "$(dirname -- "$0")/common.sh"

yarn ...
```

### Commit messages linter

To make sure commit messages follow a convention, we can add commitlint. First, install as dev dependencies:

```
yarn add -D @commitlint/config-conventional
yarn add -D @commitlint/cli
```

In order to customise this linter we need to create a file named `commitlint.config.js`. This file is not necessary, or if you do use it it's usually enough just to extend @commitlint/config-conventional, however for this repo we will also manually add all the rules that come in from @commitlint/config-conventional, just to see what they are, and to have a clear list of all prefixes allowed:

```
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'translation',
                'security',
                'changeset',
            ],
        ],
    },
}
```

Lastly, in order for it to actually work we need to enavble it with husky:

```
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

```
# Sometimes above command doesn't work in some command interpreters
# You can try other commands below to write npx --no -- commitlint --edit $1
# in the commit-msg file.
npx husky add .husky/commit-msg \"npx --no -- commitlint --edit '$1'\"
# or
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
```

Commit message convention:

-   https://www.conventionalcommits.org/en/v1.0.0/#specification
-   https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709
-   https://github.com/conventional-changelog/commitlint/#what-is-commitlint

### VS Code Settings

Apart from our onw personal settgins.json file, we can also create one in our codebase (a project speciffic file) in which we can enforce some settings, that will override / take precedence over the globals; the biggest advantage is that other developers using VS Code will have the same settings:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

### VS Code Debugger

First, we create a file called "launch.json" in our .vscode directory, to enable launching in different kinds of debug modes. The content of this file is also provided by next.js: https://nextjs.org/docs/advanced-features/debugging

These scripts can be found and ran from the "Run and Debug" tab in VS Code (ctrl + shift + d)

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

In case of source map error, also add this line:

```
"resolveSourceMapLocations": ["${workspaceFolder}/**", "!**/node_modules/**"]
```

### ENABLE INSPECTING OF SERVER-SIDE LOGS IN THE BROWSER

As also recommended by the next.js docs, automatic debugger for the dev environment can be added as welll, when running from the command line. This will enable you to see the server-side logs in the chrome developer tools.

First, install cross env to set environment variables the same way on linux / mac / windows on the comand line:

```
yarn add -D cross-env
```

Then, you can either update your dev script in package json, or create a separate one:

```
{
    "scripts": {
    "dev": "next dev",
    "dev:debug": "cross-env NODE_OPTIONS='--inspect' next dev",
  }
}
```

## Folder Structure

By default, the next app will not have a `src` folder, and the `pages` folder that it comes bundled with by default is placed at the root level. You can create a src folder to group your files (components, styles, types, utils, hooks, etc), and next also supports adding the pages folder here, but remember to remove it from the root level, so it's not duplicated; in case both `pages` and `src/pages` exist, the one from src will be ignored.

The `public` folder however can only be placed at the root level: https://nextjs.org/docs/advanced-features/src-directory

##### Grouping folders and files

This is subject to change:

```
public/
src/
|
| - pages/
|   | - api/
|       | - hello.ts
|       | - users.ts
|   | - account/
|           | - dashboard/
|               | - index.ts
|       | - index.ts
|   | - cart/
|       | - index.ts
|   | - about/
|       | - index.ts
|   | - _app.tsx
|   | - index.tsx
|   ???
|
| - components/
|   |- page-components/
|       | - account/
|           | - AccountNavigation/
|               | - AccountNavigation.tsx
|               | - AccountNavigation.constants.ts
|               | - AccountNavigation.types.ts
|               | - AccountNavigation.mocks.ts
|               | - AccountNavigation.utils.ts
|               | - AccountNavigation.test.ts
|               | - AccountNavigation.stories.ts
|               | - index.ts
|               ???
|           | - AccountModal/
|           | - Sidebar/
|           | - Dashboard/
|           | - PaymentMethods/
|       | - Admin/
|           | - AdminActionsBar/
|           | - AdminModal/
|   |- elements/
|       |- Button/
|       |- Modal/
|       |- Typography/
|       |- Toast/
|       | ???
|   |- modules/
|       |- Header/
|       |- Footer/
|   |- templates/
|       |- BaseTemplate/
|           |- BaseTemplate.tsx
|           |- BaseTemplate.constants.tsx
|           |- BaseTemplate.types.tsx
|           |- BaseTemplate.constants.tsx
|           |- BaseTemplate.constants.tsx
|           ???
|
| - styles/
| - hooks/
| - utils/
| - store/
```

## Storybook

We will not actually add storybook as a dependency, just because it installs so many different things, and creates so many configs and files within the project. We will run it with npx. Make sure to also add the --builder webpack5 because (at least at the time i am writing this) storybook init defaults to webpack 4 instead of 5. After running this command you will see a .storybook folder has been created, along with a `stories` folder in src:

```
npx sb init --builder webpack5
```

Adding eslint rule: during installation it will ask you if you want to update .eslintrc; it may throw an error (seems it does not like the .json extension), but this can manually be added: "plugin:storybook/recommended" -> recommended eslint config for sb. We woll also add the overrides section (and add the thing that is mentioned in storybook documentation, not sure what it does):

```
{
  "extends": [
    "plugin:storybook/recommended",
    "next",
    "next/core-web-vitals",
    "eslint:recommended"
  ]
  "overrides": [
    {
      "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      "rules": {
        // example of overriding a rule
        "storybook/hierarchy-separator": "error"
      }
    }
  ]
}
```

We will also add webpack 5 resolutions to our package.json; to ensure that storybook and any other tools are using version 5 of webpack, whenever they are importing webpack (our project itself does not have a dependency on webpack, we do not need to have it in our dev dependencies, BUT the tools that we are using we want to make sure that are using webpack version 5)

```
{
  "resolutions": {
    "webpack": "^5"
  }
}
```

Now, because we added this resolution, we need to run yarn install again, to make sure all webpack dependendcies are updated:

```
yarn install
```

We will need to check the `.storybook/main.js` file, to make sure that all \*.stories.ts files are taken from the src folder (should be done automatically, assuming the src folder existed before installing storybook, otherwise it may need to pe updated manually), and also specify the static assets directory:

```
staticDirs: ['../public']
```

Lastly, in the `.storybook/preview.js` we also need to tell storybook how to work with next.js <Image /> component:

```
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
})
```

!ERROR! Because webpack 5 is amazing, you may end upt with an error like this one:

```
    BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
    This is no longer the case. Verify if you need this module and configure a polyfill for it.

    If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "util": require.resolve("util/") }'
        - install 'util'
    If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "util": false }
```

To fix it, do exaclty what it sais: create a webpack.config.js file, and add this to it:

```
module.exports = {
    resolve: {
        fallback: {
            util: require.resolve('util/'),
        },
    },
}
```

It seems that making storybook to work is a fun task, especially from one version to another. Have fun!

```
yarn run storybook
```

## Configure TypeScript

There are multiple configs you can add, please consult tsconfig.json in this project for a few examples (all are documented here: https://www.typescriptlang.org/tsconfig).

Please note that these configs are taken into account when building / exporting the app, so it is a good idea to keep them in sync with the eslint settings.

##### Absolute Path

In order to create a base url, to import for example from `components/MyComponent` directly, instead of using `../../../components/MyComponent`, you can add "src" to the "baseUrl" in tsconfig compiler options; another option would be to create a separate file, e.g. tsconfig.paths.json and then add "extends": "./tsconfig.paths.json" in your main tsconfig:

```
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

##### Import Aliases

You can also create aliases for speciffic paths, for example `@public` or just `public` to import from outside of the baseUrl, or for deeply nested paths, etc. Just add them to the "paths" object:

```
{
  "compilerOptions": {
    "paths": {
      "public": ["./public"]
    }
  }
}

```

## Material UI / Emotion

In order for us to use material UI (version 5 or newer), we need to also use either emotion or styled components, as specified in: https://mui.com/material-ui/getting-started/installation/. The reason is because in v5^ material ui was reworked a bit, and it now uses one of the above as it's styling engine.

We will be using emotion (@emotion/react and @emotion/styled for styled components) instead of styled-components (@mui/styled-engine), mainly because of an issue with SSR, https://github.com/mui/material-ui/issues/29742, also mentioned on the MUI website: https://mui.com/material-ui/guides/styled-engine/.

First, install the required packages as normal dependencies:

```
yarn add @mui/material
yarn add @emotion/react
yarn add @emotion/styled
```

While we're at it, we can also install @emotion/server, in order to server side render these emotion components, and also the material ui icons: https://fonts.google.com/icons?icon.set=Material+Icons

```
yarn add @emotion/server
yarn add @mui/icons-material
```

Also install the @emotion/eslint-plugin as a dev dependency:

```
yarn add -D @emotion/eslint-plugin
```

Now, add the following plugin and rules to the .eslintrc.json file (for short, they will throw errors if you are trying to import something from the wrong library and forces all styles to be written as strings, instead of also allowing objects) - https://github.com/emotion-js/emotion/tree/main/packages/eslint-plugin/docs/rules

When adding css directly on a div, e.g. `<div css={}/>`, you need to add this /\*_ @jsx jsx _/ at the top of the file, imported from '@emotion/react'. This comment (pragma) tells babel to convert jsx to calls to a function called jsx instead of React.createElement. The linter rule "@emotion/jsx-import": "error" + prettier will automatically import and add this if it is missing.

```
{
  "plugins": ["@emotion"],
  "rules": {
    "@emotion/jsx-import": "error",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error",
    "@emotion/syntax-preference": [2, "string"]
  }
}
```

Failed to compile - SyntaxError: pragma and pragmaFrag cannot be set when runtime is automatic.
When you see this error, it is because React 17 introduced a new version of JSX which has two runtime options: classic and autoamtic. The fix for this (at least temporary) is to add another pragma to set the JSX runtime to classic - https://github.com/vercel/next.js/discussions/18440#discussioncomment-133128-permalink

```

```

According to https://emotion.sh/docs/@emotion/babel-plugin, babel is also highly recommended, as it provides minification, dead code elimination etc., so we will also add it to our project:

```
yarn add -D @emotion/babel-plugin
```

Create a `.babelrc` file. First, add the "next/babel" preset made available from next (https://nextjs.org/docs/advanced-features/customizing-babel-config), and also the @emotion plugin. NOTE: In older emoiton versions, it was mentioned that @emotion must be the first plugin in the plugins array.

```
{
  "presets": ["next/babel"],
  "plugins": ["@emotion"]
}
```

What we need to do now is we are going to have to create an emotion cache for our server side rendered emotion components. The `createCache` can also accept other configs than key, (https://emotion.sh/docs/@emotion/cache), like `prepend: true`, which will move the MUI styles to the top of the <head> so they are loaded first; you can also set this to false in case you are also using other styling solutions, such as css modules.

```
import createCache from '@emotion/cache'

export const createEmotionCache = () => {
    return createCache({ key: 'css' })
}
```

Now, let's create the material ui theme that we will be using in our application. Create a theme.cs in the styles folder:

```
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
})
```

In order to get material ui to server side render consistently with next.js, you actually have to create a custom \_document.tsx file (to override the default one form next); this is needed so you do not get a flickering effect with the server side rendered components. This is taken directly from the mui/material-ui examples: https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx. More info on extending the \_document.tsx file can also be found in next.js official examples: https://nextjs.org/docs/advanced-features/custom-document

TODO: Investigate if the roboto font family + material UI icons need to be added in the head or if they can be installed as dependencies in the project.

The next step is to also update the \_app.tsx file, to use the material ui themes etc.

NOTE: The \_app.tsx file will also include the <Head> tag with <meta name="viewport">, which is better kept here and not in the \_document.tsx file, since it can cause some issues: https://stackoverflow.com/questions/65832820/next-js-viewport-meta-tags-should-not-be-used-in-document-jss-head, nextjs: https://nextjs.org/docs/messages/no-document-viewport-meta

### Examples

-   https://github.com/mui/material-ui/tree/master/examples/nextjs
-   https://github.com/leoroese/nextjs-materialui-v5-tutorial/tree/emotion
-   https://github.com/mayank7924/nextjs-with-mui
