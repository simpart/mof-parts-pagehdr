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
            
            var title = new mofron.parts.Text(prm);
            title.size(35);
            title.style('margin-left', '20px');
            
            var conts = this.vdom.getChild(0);
            conts.setStyle('display'    , 'flex');
            conts.setStyle('align-items', 'center');
            
            this.addChild(title);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
