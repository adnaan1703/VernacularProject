import { setupI18n } from '@lingui/core';

import enMessages from './locales/en/messages.js';
import esMessages from './locales/es/messages.js';
import frMessages from './locales/fr/messages.js';

export const i18nEn = setupI18n({
 language: 'en',
 catalogs: {
   en: enMessages,
 }
});

export const i18nEs = setupI18n({
  language: 'es',
  catalogs: {
    es: esMessages,
  }
 });

 export const i18nFr = setupI18n({
  language: 'fr',
  catalogs: {
    fr: frMessages,
  }
 });
