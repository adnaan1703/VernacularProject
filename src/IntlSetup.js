import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

export default class IntlSetup {

    constructor() {
        addLocaleData(en);
    }

    static setup() {
        if(!this.instance) {
            this.instance = new IntlSetup();
        }
    }
}