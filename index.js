/**
 * @file   mofron-comp-header-title/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Header = require('mofron-comp-header');
require('mofron-comp-text');
let Click  = require('mofron-event-click');

mf.comp.Titleheader = class extends Header {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Titleheader');
            this.prmOpt(prm_opt);
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
            
            /* set header title */
            hdr_css['margin-left'] = '20px';
            this.addChild(
                new mf.Component({
                    style    : hdr_css
                })
            );
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
            } else if ('string' === typeof val) {
                let ThmComp = this.theme().component('mofron-comp-text');
                set_val = new ThmComp(val);
            } else {
                throw new Error('invalid parameter');
            }
            
            
            set_val.size(
                (null === set_val.size()) ? 35 : undefined
            );
            /* add click event */
            this.setTitleEvent(set_val);
            ttl.addChild(set_val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setTitleEvent (val) {
        try {
            val.addEvent(
                new Click(
                    (tgt,ttl) => {
                        try {
                            if (null !== ttl.url()) {
                                location.href = ttl.url();
                            }
                        } catch (e) {
                            console.log(e.stack);
                        }
                    },
                    this
                )
            );
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
            var rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.title().color(new mf.Color(255,255,255));
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
mf.comp.titleheader = {};
module.exports = mf.comp.Titleheader;
