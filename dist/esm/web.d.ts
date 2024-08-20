import { WebPlugin } from '@capacitor/core';
import type { IosAudioPluginPlugin } from './definitions';
export declare class IosAudioPluginWeb extends WebPlugin implements IosAudioPluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    setSpeaker(): Promise<void>;
    setEarPiece(): Promise<void>;
}
