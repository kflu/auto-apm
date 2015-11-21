# auto-apm

    npm install -g auto-apm

Only install missing Atom packages and skip installed ones.

```
Usage: auto-apm [options]

Options:

-h, --help                           output usage information
-p, --packages [packages_file.json]  a .json file containing a list of packages to install.
```

If `packages_file.json` is omitted, it is looking for `~/.auto-apm.packages.json`. The file content should be
a list of packages to install:

```
['minimap', 'zen', 'autoflow']
```

When it runs, it looks like this:

![screenshot](https://cloud.githubusercontent.com/assets/1031978/11315634/3e8c4e70-8faa-11e5-80e5-ca590e8acafd.png)
