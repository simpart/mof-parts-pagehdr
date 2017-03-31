# mofron-comp-header-title
extends component of heaader for mofron.<br>
this component is header for title of page.<br>
please see [here](https://github.com/simpart/mofron) about an overview of mofron.<br>

# Install

```bash
npm install mofron-comp-header-title
```

# Sample
```javascript
let Mof    = require("mofron");
let TtlHdr = require("mofron-comp-header-title");

new TtlHdr({
    /* this is option paramter */
    title   : 'APP_TITLE',
    url     : './',
    height  : 80,
    color   : new Mof.Color(70,70,70),
    visible : true
});
```
