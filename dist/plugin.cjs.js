'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const IosAudioPlugin = core.registerPlugin('IosAudioPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IosAudioPluginWeb()),
});

class IosAudioPluginWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IosAudioPluginWeb: IosAudioPluginWeb
});

exports.IosAudioPlugin = IosAudioPlugin;
//# sourceMappingURL=plugin.cjs.js.map
