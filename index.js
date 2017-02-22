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
            this.name("Title");
            
            this.m_url = null;
            
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts();
            
            /* check parameter */
            if ('string' != (typeof prm)) {
                throw new Error('invalid parameter type');
            }
            
            /* set header style */
            this.style('display'    , 'flex');
            this.style('align-items', 'center');
            
            /* set header title */
            var title = new mofron.comp.Text({
                            param : prm,
                            size  : 35,
                            style : new mofron.Param('margin-left', '20px'),
                            event : new mofron.event.Click(
                                        function (ttl) {
                                            try {
                                                var url = ttl.url();
                                                if (null !== url) {
                                                    location.href = url;
                                                }
                                            } catch (e) {
                                                console.log(e.stack);
                                            }
                                        },
                                        this
                                    )
                        });
            this.addChild(title);
            
            var clr = this.color();
            if (null !== clr) {
                var rgb = this.color().rgba();
                if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                    title.color(new mofron.Color(255,255,255));
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
                return this.m_url;
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
module.exports = mofron.comp.header.Title;
