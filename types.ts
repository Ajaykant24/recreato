
export enum AppSection {
  HOME = 'HOME',
  RECREATO = 'RECREATO',
}

export interface ShortAnalysis {
  title: string;
  viralityScore: number;
  hook: string;
  summary: string;
  startTime: number; // in seconds
  endTime: number;   // in seconds
  captions: Array<{
    text: string;
    start: number;
    end: number;
    type: 'hook' | 'value' | 'cta';
  }>;
}

export interface RecreatoAnalysis {
  overlayTexts: string[];
  captionOptions: string[];
  overlayHooks: string[];
  detailedCaption: string;
}

export type AspectRatio = '9:16' | '4:5' | '1:1' | '3:4' | '4:3' | '3:2' | '16:9';

export interface OverlayConfig {
  text: string;
  fontSize: number;
  textColor: string;
  textStyle: 'sticker' | 'plain';
  textBackgroundColor: string;
  backgroundColor: string;
  blurOpacity: number;
  ratio: AspectRatio;
  x: number;
  y: number;
  width: number;
  lineHeight: number;
  textAlign: 'left' | 'center' | 'right';
  videoX: number;
  videoY: number;
  videoScale: number;
}

export type VideoSource = {
    type: 'file' | 'link';
    value: File | string;
    platform: 'youtube' | 'other';
};

export interface Project {
    id: string;
    name: string;
    createdAt: Date;
    source: VideoSource;
    clips: any[];
}
