# mofron-comp-titleheader
extends component of heaader for mofron.<br>
this component is header for title of page.<br>
please see [here](https://github.com/simpart/mofron) about an overview of mofron.<br>

# Install

```bash
npm install mofron-comp-titleheader
```

# Sample
```javascript
let mf     = require("mofron");
let Header = require("mofron-comp-titleheader");

new Header({
    /* this is option paramter */
    title   : 'APP_TITLE',
    url     : './',
    height  : 80,
    color   : new mf.Color(70,70,70),
    visible : true
});
```
