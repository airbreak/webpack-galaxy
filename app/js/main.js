/**
 * Created by jiangjianming@bmkp.cn on 2018/4/17.
 */
import flexible from './flexible.js'
import '../style/index.sass'
class main {
    constructor (){
        this.initEvents()
        this.getScreenOrientation()
    }
    initEvents (){
        window.addEventListener('orientationchange',()=>{
            this.getScreenOrientation()
        },false)
    }
    getScreenOrientation() {
        var orientation = window.orientation;
        switch (orientation) {
            case 90:
            case -90:
                orientation = 'landscape'; //这里是横屏
                break;
            default:
                orientation = 'portrait'; //这里是竖屏
                break;
        }
    }
}
// new main()