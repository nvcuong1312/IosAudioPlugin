import { registerPlugin } from '@capacitor/core';
const IosAudioPlugin = registerPlugin('IosAudioPlugin', {
    web: () => import('./web').then(m => new m.IosAudioPluginWeb()),
});
export * from './definitions';
export { IosAudioPlugin };
//# sourceMappingURL=index.js.map