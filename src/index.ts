import { registerPlugin } from '@capacitor/core';

import type { IosAudioPluginPlugin } from './definitions';

const IosAudioPlugin = registerPlugin<IosAudioPluginPlugin>('IosAudioPlugin', {
  web: () => import('./web').then(m => new m.IosAudioPluginWeb()),
});

export * from './definitions';
export { IosAudioPlugin };
