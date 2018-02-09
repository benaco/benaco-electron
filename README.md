# benaco-electron

## Prequisites

Unpack the scan bundle you want to show into a directory `scan`.

## For development

```bash
# Install dependencies
npm install

# Run the app
npm start
```

## For giving it to a user

* Download the electron binary for the relevant platform
  from https://github.com/electron/electron/releases,
  unpack it into a directory `BenacoOfflineViewer`.
* Create the directory `BenacoOfflineViewer/resources/app`
* Copy the following files and directories into that directory:

    ```
    package.json
    main.js
    scan/
    ```

* Package `BenacoOfflineViewer` up as a zip file, and give it to the user.
* Tell the user to unpack the zip file, and execute the `electron` or `electron.exe` program.
