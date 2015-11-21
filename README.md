# auto-apm

    npm install -g auto-apm

Only install missing Atom packages and skip installed ones.

```
Usage: auto-apm [options]

Options:

  -h, --help                           output usage information
  -i, --install [pkg1,pkg2,pkg3,...]   a list of packages to install
  -p, --packages [packages_file.json]  a .json file containing a list of packages to install.
```

If `-i` is specified, it must be followed by a list of packages to install, seperated by
`,`:

    auto-apm -i zen,minimap

If `-p` is specified, it must be followed by a JSON file containing a list of packages to
install:

    ['minimap', 'zen', 'autoflow']

 If `packages_file.json` is omitted, it looks for `~/.auto-apm.packages.json`.

When it runs, it looks like this:

![screenshot](https://cloud.githubusercontent.com/assets/1031978/11315634/3e8c4e70-8faa-11e5-80e5-ca590e8acafd.png)
