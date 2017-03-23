# Jacket
**A simple tool to gzip files**

**Install**:
`npm install --save-dev jacketjs`

# Usage

What you want to do first of all, is, go into your directory in the terminal and type this after you have installed it:

```
$ jacket init
```
This will create a file called `jacketfile.js`. In your `jacket.js` file, type this code with the given structure:

```javascript
#!/jacketfile.js

gzip(file, file destination, newfilname);
```
Then go into your terminal again and type: 

```
$ node jacketfile.js
```

It would also be easier if you add a script to your `packege.json`:

```json
  "scripts" : {
    "start": "node jacketfile.js"
  }
```

You now should have a gzipped file in your selected destination!

If you find any bugs, please submit them [HERE](https://github.com/talonbragg/Jacket/issues/new).
