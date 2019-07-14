# benaco-electron

Simple electron app that allows you to distribute a single Benaco
virtual tour as a standalone, offline executable.

## Prequisites

Unpack the bundle you want to show into a directory named `bundle`. After
you've done so the bundle directory should look something like this:

```
bundle
└── eb80aa80-dafd-45b3-bf1c-a1316445049f
    ├── index.html
    ⋮
```

where `eb80aa80-dafd-45b3-bf1c-a1316445049f` is the id of your virtual tour.

## To develop

```bash
# Install dependencies
npm install

# Run the app
npm start
```

## To package the application

* Download the electron binary for the relevant platform
  from https://github.com/electron/electron/releases, unpack it into
  a directory `BenacoOfflineViewer`. Remove the `.zip` file from
  `BenacoOfflineViewer` after extracting the contents.
* Create the directory `BenacoOfflineViewer/resources/app`
* Copy the following files and directories into that directory:

    ```
    package.json
    main.js
    bundle/
    ```

* Test the package by running the `electron` or `electron.exe` file.
* Package `BenacoOfflineViewer` up as a zip file, and give it to your users.
* Tell users to unpack the zip file, and execute the `electron` or `electron.exe` program.
