import { WebPlugin } from '@capacitor/core';
export class IosAudioPluginWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async setSpeaker() {
        console.log('Setting speaker');
    }
    async setEarPiece() {
        console.log('Setting earpiece');
    }
}
//# sourceMappingURL=web.js.map