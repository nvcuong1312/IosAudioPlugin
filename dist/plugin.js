var capacitorIosAudioPlugin = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
