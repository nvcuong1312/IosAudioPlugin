import { WebPlugin } from '@capacitor/core';

import type { IosAudioPluginPlugin } from './definitions';

export class IosAudioPluginWeb
  extends WebPlugin
  implements IosAudioPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async setSpeaker(): Promise<void> {
    console.log('Setting speaker');
  }

  async setEarPiece(): Promise<void> {
    console.log('Setting earpiece');
  }
}
