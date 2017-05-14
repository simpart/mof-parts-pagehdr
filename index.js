/**
 * @file   mofron-comp-header-title/index.js
 * @author simpart
 */
require('mofron-comp-header');
require('mofron-comp-text');
require('mofron-event-click');

mofron.comp.header.Title = class extends mofron.comp.Header {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Titile');
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
            this.style({
                'display'     : 'flex',
                'align-items' : 'center'
            });
            
            /* set header title */
            this.addChild(this.title());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    title (val) {
        try {
            if (undefined === val) {
                /* getter */
                if (undefined === this.m_title) {
                    this.title(new mofron.comp.Text(''));
                }
                return this.m_title;
            }
            /* setter */
            if (true === mofron.func.isInclude(val, 'Text')) {
                val.size((null === val.size()) ? 35 : undefined);
                val.style({ 'margin-left' : '20px' });
                this.m_title = val;
            } else if ('string' === typeof val) {
                this.title().text(val);
            } else {
                throw new Error('invalid parameter');
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
            var rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.title().color(new mofron.Color(255,255,255));
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
            if (undefined === this.m_url) {
                this.title().addEvent(
                    new mofron.event.Click(
                        (ttl) => {
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
            }
            this.m_url = ul;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.header.Title;
