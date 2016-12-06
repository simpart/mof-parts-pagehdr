/**
 * @file   PageHeader.js
 * @brief  Simpale Page Header
 * @author simpart
 */

mofron.parts.PageHeader = class extends mofron.parts.Header {
    initContents(vd, prm) {
        try {
            super.initContents(vd, prm);
            
            if ('string' != (typeof prm)) {
                throw new Error('invalid parameter type');
            }
            
            /* set header style */
            var conts = this.vdom.getChild(0);
            conts.setStyle('display'    , 'flex');
            conts.setStyle('align-items', 'center');
            
            /* set header title */
            var title = new mofron.parts.Text(prm);
            title.size(35);
            title.style('margin-left', '20px');
            this.addChild(title);
            
            /* set text color */
            if ( (undefined != mofron.util.theme) &&
                 (null !== mofron.util.theme) ) {
                var clr = mofron.util.theme.getColor(0);
                if (null !== clr) {
                    var rgb = clr.getRgba();
                    if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                        title.color(new mofron.util.Color(255,255,255));
                    }
                }
            }
            
            /* set reload link */
            title.setLink('./');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
