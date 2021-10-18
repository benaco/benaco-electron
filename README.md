# benaco-electron

Simple electron app that allows you to distribute a single Benaco
virtual tour as a standalone, offline executable.

## Instructions for users (simply packaging a Benaco tour)

These steps are simple and should only take a few minutes (download some files and drag them into the correct directory structure).

We give detail instructions here:

1. Download the latest Electron binary `.zip` for the relevant platform
   from https://github.com/electron/electron/releases.
   Depending the Operating System that you want to make the offline bundle for, you usually need one of:
   ```
   electron-v*-win32-x64.zip     # For Windows (Intel/AMD processor)
   electron-v*-linux-x64.zip     # For Linux (Intel/AMD processor)
   electron-v*-darwin-x64.zip    # For macOS (Intel/AMD processor)
   electron-v*-darwin-arm64.zip  # For macOS (ARM processor)
   ```
2. Unpack the downloaded `.zip` into a directory called `BenacoOfflineViewer`.
   You can delete the downloaded `.zip` after unpacking.
3. Create the directory `BenacoOfflineViewer/resources/app`.
4. Copy the following files from this repository ([direct download link](https://github.com/benaco/benaco-electron/archive/refs/heads/master.zip)) into that directory:

    ```
    package.json
    main.js
    ```
5. Create the empty directory `BenacoOfflineViewer/resources/app/bundle/`.
6. Download the [benaco.com](https://benaco.com) offline bundle from your Benaco Tour Edit page as a `.zip` file.
7. Unpack the tour `.zip` file into the `BenacoOfflineViewer/resources/app/bundle/` directory you created above.
   The `bundle/` directory should now look like this:
   
    ```
    bundle
    └── eb80aa80-dafd-45b3-bf1c-a1316445049f
        ├── index.html
        ⋮
    ```
9. Test the package by running the `electron` or `electron.exe` file.

You are done. To distribute the result to your users:

* Package the whole `BenacoOfflineViewer` as a ZIP file, so you can give a single file to your users.
* Tell users to unpack that ZIP file, and execute the `electron` or `electron.exe` program.


### Packaging multiple tours

If you want to make multiple executable bundles with different tours, you do not need to repeat steps 1-5 above.

Simply make a copy of your existing `BenacoOfflineViewer` directory, delete the existing tour from its `BenacoOfflineViewer/resources/app/bundle/` directory, and place your new downloaded tour in there.


## Instructions for developers (working on `benaco-electron`)

### Prequisites

Unpack the bundle you want to show into a directory named `bundle`. After
you've done so the bundle directory should look something like this:

```
bundle
└── eb80aa80-dafd-45b3-bf1c-a1316445049f
    ├── index.html
    ⋮
```

where `eb80aa80-dafd-45b3-bf1c-a1316445049f` is the ID of your virtual tour.

### To develop

```bash
# Install dependencies
npm install

# Run the app
npm start
```
