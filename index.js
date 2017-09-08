/**
 * @file   mofron-comp-header-title/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Header = require('mofron-comp-header');
require('mofron-comp-text');
let Click  = require('mofron-event-click');

mf.comp.Ttlhdr = class extends Header {
    
    constructor (po) {
        try {
            super(po);
            this.name('Ttlhdr');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts();
            
            /* set header style */
            let hdr_css = {
                'display'     : 'flex',
                'align-items' : 'center'
            };
            this.style(hdr_css);
            
            /* set header title area */
            hdr_css['margin-left'] = '20px';
            this.addChild(
                new mf.Component({
                    style : hdr_css
                })
            );
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
            let ttl = this.child()[0].child();
            if (undefined === val) {
                /* getter */
                if (0 === ttl.length) {
                    return null;
                }
                return (1 === ttl.length) ? ttl[0] : ttl;
            }
            /* setter */
            if (0 === ttl.length) {
                this.addTitle(val);
            } else {
                this.setTitleEvent(val);
                this.child()[0].updChild(ttl[0], val);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addTitle (val) {
        try {
            let ttl = this.child()[0];
            let set_val = null;
            if (true === mf.func.isInclude(val, 'Text')) {
                set_val = val;
                set_val.size(
                    (null === set_val.size()) ? 35 : undefined
                );
                ttl.addChild(set_val);
            } else if ('string' === typeof val) {
                set_val = this.theme().component('mofron-comp-text');
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
            let rgb = this.color().rgba();
            let clr = null;
            
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                clr = new mf.Color(255,255,255);
            } else {
                clr = new mf.Color(0,0,0);
            }
            
            if (true === mf.func.isObject(ttl, 'Text')) {
                ttl.color(new mf.Color(255,255,255));
            } else {
                let chd_ttl = this.title();
                if (true === mf.func.isObject(chd_ttl, 'Text')) {
                    ttl.color(new mf.Color(255,255,255));
                } else if ( (null !== chd_ttl) && (undefined !== chd_ttl[0]) ) {
                    for (let cidx in chd_ttl) {
                        if (true === mf.func.isObject(chd_ttl[cidx], 'Text')) {
                            chd_ttl[cidx].color(
                                new mf.Color(255,255,255)
                            );
                        }
                    }
                }
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
                return ret;
            }
            if (0 !== this.child().length) {
                this.setTitleColor();
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
