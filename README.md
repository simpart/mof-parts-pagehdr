# mofron-comp-ttlhdr
extends component of heaader for mofron.<br>
this component is header for title of page.<br>
please see [here](https://github.com/mofron/mofron) about an overview of mofron.<br>

# Install

```bash
npm install mofron-comp-ttlhdr
```

# Sample
```javascript
let mf     = require("mofron");
let Header = require("mofron-comp-ttlhdr");

let hdr = new Header({
    /* this is option paramter */
    title   : 'APP_TITLE',
    url     : './',
    height  : 80,
    color   : new mf.Color(70,70,70)
});
hdr.visible(true);
```
