/**
 * @file   pagehdr.js
 * @brief  Simpale Page Header Component
 * @author simpart
 */

mofron.comp.PageHeader = class extends mofron.comp.Header {
    
    constructor (prm, opt) {
        try {
            super(prm);
            this.name("PageHeader");
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
            this.style('position'   , 'fixed');
            
            /* set header title */
            var title = new mofron.comp.Text(prm);
            title.size(35);
            title.style('margin-left', '20px');
            this.addChild(title);
            
            /* set reload link */
            title.setLink('./');
            
            var clr = this.color();
            if (null !== clr) {
                var rgb = this.color().getRgba();
                if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                    title.color(new mofron.util.Color(255,255,255));
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
