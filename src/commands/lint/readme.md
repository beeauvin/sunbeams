# sunbeams/lint

linting to brighten your day

sunbeams/lint is a cli and library to lint typescript and javascript with eslint. It runs eslint and provides some additional utility; including handling the eslint version for you.

Unfortunately linting requires much more flexibility (project structure, other libraries, etc) than [formatting](../format) so this tool is by nature less opinionated. That shouldn't be taken to mean that it's intended to be less opinionated. Future versions will attempt provide as few options as possible.

This means you are, currently, able to create whatever eslint config you want and this tool will still be helpful. Still, be careful. The intent is to provide the [@sunbeams/eslint-config](https://github.com/sunbeamsanctuary/eslint-config) rules while allowing config for additional libraries (like next.js, as an example). Any change to this library that enforces that moreso and breaks because @sunbeams/eslint-config isn't being used will NOT be considered a breaking change.

TLDR: Make sure you're extending [@sunbeams/eslint-config](https://github.com/sunbeamsanctuary/eslint-config). If your setup doesn't work while extending that, and you still want to use this, open an issue there.

## Behavior

sunbeams/lint will first try to find the directory it should run in, starting with where it is ran from, and moving up until it finds a package.json file or an eslint config (.eslintrc || .eslintrc.js). It assumes that either of those files means that is the root of at least the current scope (for monorepos) and it should run there. If an eslint config is found, it'll run. If not (only a package.json is found) it'll generate a config based on [@sunbeams/eslint-config](https://github.com/sunbeamsanctuary/eslint-config) and then run.

## Contributing

I will accept requests that make this tool work in more places but not requests that make it work differently. The goal, just like format, is to run the command and move on; it works the same way in every project that uses it.
