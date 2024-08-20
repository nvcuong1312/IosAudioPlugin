import Foundation
import AVFAudio
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IosAudioPluginPlugin)
public class IosAudioPluginPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "IosAudioPluginPlugin"
    public let jsName = "IosAudioPlugin"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setSpeaker", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setEarPiece", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = IosAudioPlugin()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func setSpeaker(_ call: CAPPluginCall) {
        NSLog("Cuong: setSpeaker")
        let audioSession = AVAudioSession.sharedInstance()
        do {
            try audioSession.setCategory(.playAndRecord, mode: .default)
            try audioSession.overrideOutputAudioPort(.speaker)
            call.resolve()
        } catch {
            NSLog("Cuong: setSpeaker error")
        }
    }

    @objc func setEarPiece(_ call: CAPPluginCall) {
        NSLog("Cuong: setEarPiece")
        let audioSession = AVAudioSession.sharedInstance()
        do {
            try audioSession.setCategory(.playAndRecord, mode: .default)
            try audioSession.overrideOutputAudioPort(.none)
            call.resolve()
        } catch {
            NSLog("Cuong: setEarPiece error")
        }
    }
}
