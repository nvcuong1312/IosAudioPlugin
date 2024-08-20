// declare module '@capacitor/core' {
  
// }

export interface PluginRegistry { 
  IosAudioPlugin: IosAudioPluginPlugin;
}

export interface IosAudioPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  setSpeaker() : Promise<void>;
  setEarPiece() : Promise<void>;
}
