interface AudioEventMap {
  load: () => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
  timeupdate: (currentTime: number, duration: number) => void;
  ended: () => void;
  error: (error: Error) => void;
  volumechange: (volume: number) => void;
}

type AudioEventType = keyof AudioEventMap;
type EventListenersMap = {
  [K in AudioEventType]?: AudioEventMap[K][];
};

export default class AudioService {
  private readonly audioContext: AudioContext;
  private readonly gainNode: GainNode;
  private source?: MediaElementAudioSourceNode;
  private audio?: HTMLAudioElement;

  private readonly eventListeners: EventListenersMap = {};

  constructor() {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
  }

  public load(url: string): void {
    this.source?.disconnect();
    this.audio?.pause();

    this.audio = new Audio(url);

    this.source = this.audioContext.createMediaElementSource(this.audio);
    this.source.connect(this.audioContext.destination);
    this.source.connect(this.gainNode);

    this.connectEvents();
  }

  public play(): void {
    this.audio?.play();
  }

  public pause(): void {
    this.audio?.pause();
  }

  public reset(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  public seek(time: number): void {
    if (this.audio) {
      this.audio.currentTime = time;
    }
  }

  public setVolume(volume: number): void {
    let newVolume = 0;

    if (volume > 0) newVolume = volume / 100;

    this.gainNode.gain.value = newVolume;
  }

  public setPlaybackRate(rate: number): void {
    if (this.audio) {
      this.audio.playbackRate = Math.max(0.25, Math.min(4, rate));
    }
  }

  public on<K extends AudioEventType>(event: K, callback: AudioEventMap[K]): void {
    if (!(event in this.eventListeners)) {
      this.eventListeners[event] = [];
    }

    this.eventListeners[event]!.push(callback);
  }

  private emit<K extends AudioEventType>(event: K, ...args: Parameters<AudioEventMap[K]>): void {
    const listeners = this.eventListeners[event];
    if (listeners) {
      listeners.forEach((callback) => {
        (callback as (...args: unknown[]) => void)(...args);
      });
    }
  }

  public getCurrentTime(): number {
    return this.audio?.currentTime || 0;
  }

  public getDuration(): number {
    return this.audio?.duration || 0;
  }

  public getPlaybackRate(): number {
    return this.audio?.playbackRate || 1;
  }

  public isPlaying(): boolean {
    return !this.audio?.paused;
  }

  private connectEvents(): void {
    if (this.audio) {
      this.audio.addEventListener("loadeddata", () => this.emit("load"));
      this.audio.addEventListener("play", () => this.emit("play"));
      this.audio.addEventListener("pause", () => this.emit("pause"));
      this.audio.addEventListener("ended", () => this.emit("ended"));
      this.audio.addEventListener("timeupdate", () => {
        if (this.audio) {
          this.emit("timeupdate", this.audio.currentTime, this.audio.duration);
        }
      });
      this.audio.addEventListener("error", () => {
        this.emit("error", new Error("Audio loading error"));
      });
    }
  }
}
