/**
 * @file   mofron-comp-header-title/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Header = require('mofron-comp-header');
let Text   = require('mofron-comp-text');
let Click  = require('mofron-event-click');

mf.comp.Ttlhdr = class extends Header {
    
    constructor (po) {
        try {
            super();
            this.name('Ttlhdr');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts();
            
            /* set header style */
            this.style({
                'display'     : 'flex',
                'align-items' : 'center'
            });
            
            /* set header title area */
            this.addChild(this.titleBase());
            if (null !== prm) {
                this.title(prm);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    title (val) {
        try {
            let ttlbase = this.titleBase().child();
            if (undefined === val) {
                /* getter */
                return ttlbase;
            }
            /* setter */
            if ( ('object'  === typeof val) &&
                 (undefined !== val[0]) ) {
                for (let vidx in val) {
                    if ( (0 === vidx) &&
                         (0 === ttlbase.length) ) {
                        this.setTitleEvent(val[vidx]);
                        this.setTitleColor(val[vidx]);
                        ttlbase[0].updChild(ttl[0], val[vidx]);
                    } else {
                        this.addTitle(val[vidx]);
                    }
                }
            } else if (0 === ttlbase.length) {
                this.addTitle(val);
            } else {
                this.setTitleEvent(val);
                this.setTitleColor(val);
                ttlbase[0].updChild(ttl[0], val);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    titleBase (val) {
        try {
            if (undefined === val) {
                /* getter */
                if (undefined === this.m_title) {
                    this.titleBase(new mf.Component());
                }
                return this.m_title;
            }
            /* setter */
            if (true !== mf.func.isInclude(val, 'Component')) {
                throw new Error('invalid parameter');
            }
            val.style({
                'display'     : 'flex',
                'align-items' : 'center',
                'margin-left' : '20px'
            });
            this.m_title = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addTitle (val) {
        try {
            let ttl = this.titleBase();
            let set_val = null;
            if (true === mf.func.isInclude(val, 'Text')) {
                set_val = val;
                ttl.addChild(set_val);
                set_val.size(
                    (null === set_val.size()) ? 35 : undefined
                );
            } else if ('string' === typeof val) {
                set_val = new Text();
                ttl.addChild(set_val);
                set_val.text(val);
                set_val.size(
                    (null === set_val.size()) ? 35 : undefined
                );
            } else if (true === mf.func.isInclude(val, 'Component')) {
                set_val = val;
                ttl.addChild(set_val);
            } else {
                throw new Error('invalid parameter');
            }
            /* set title config */
            this.setTitleEvent(set_val);
            this.setTitleColor(set_val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setTitleEvent (val) {
        try {
            let clk_fnc = (tgt, ttl) => {
                try {
                    if (null !== ttl.url()) {
                        location.href = ttl.url();
                    }
                } catch (e) {
                    console.log(e.stack);
                }
            };
            
            /* set click event */
            val.addEvent(
                new Click(clk_fnc, this)
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setTitleColor (ttl) {
        try {
            if (null === this.color()) {
                return;
            }
            let rgb = this.color().rgba();
            let clr = (290 > (rgb[0]+rgb[1]+rgb[2])) ?
                      new mf.Color(255,255,255) : new mf.Color(0,0,0);
            
            if (true === mf.func.isInclude(ttl, 'Text')) {
                ttl.color(clr);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
            var ret = super.color(clr);
            if (undefined !== ret) {
                if (null === ret) {
                    this.color(new mf.Color(255,255,255));
                    return this.color();
                }
                return ret;
            }
            let ttl = this.title();
            if (0 !== ttl.length) {
                for (let tidx in ttl) {
                    this.setTitleColor(ttl[tidx]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    url (ul) {
        try {
            if (undefined === ul) {
                /* getter */
                return (undefined === this.m_url) ? null : this.m_url;
            }
            /* setter */
            if ('string' !== typeof ul) {
                throw new Error('invalid prameter');
            }
            this.m_url = ul;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mf.comp.ttlhdr = {};
module.exports = mf.comp.Ttlhdr;
