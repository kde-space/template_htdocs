import "babel-polyfill";

/**
 * picture要素をie9でも使えるようにするポリフィル
 */
import picuturefill from './_lib/_picturefill';

picuturefill();

/**
 * テキストからページ遷移
 */
import LocationChangeFromTxt from './_module/_LocationChangeFromTxt';

const locationChangeFromTxt = new LocationChangeFromTxt();
locationChangeFromTxt.init();

