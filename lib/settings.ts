import { ImageSize, Ratio, SettingsOption } from "@/lib/types";
import { Icon } from "@phosphor-icons/react";
import { Square, Rectangle } from '@phosphor-icons/react/dist/ssr'

export const DEFAULT_IMAGE_SIZE = "1024x1024";
export const DEFAULT_TEXT_TO_IMAGE_MODEL = "recraft-v3";
export const DEFAULT_IMAGE_QUALITY = "auto";
export const DEFAULT_IMAGE_GENERATION_MODE = "text-to-image";

export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

export const MAX_TEXT_PROMPT_LENGTH = 512;
export const MAX_IMAGE_PROMPT_LENGTH = 512;
export const MAX_VIDEO_PROMPT_LENGTH = 512;
export const MAX_IMAGE_COUNT = 4;
export const MAX_VIDEO_COUNT = 1;

export const RATIO_OPTIONS: SettingsOption[] = [
  {
    id: '16:9',
    title: 'YouTube Video',
    description: 'Standard widescreen format ideal for YouTube uploads and most web players.',
    value: '16:9',
    icon: Rectangle,
  },
  {
    id: '9:16',
    title: 'Instagram Reels / TikTok',
    description: 'Vertical full-screen ratio perfect for Reels, TikTok, and YouTube Shorts.',
    value: '9:16',
    icon: Rectangle,
    iconRotated: true,
  },
  {
    id: '1:1',
    title: 'Instagram Feed',
    description: 'Balanced square frame that fits neatly in any social-media feed grid.',
    value: '1:1',
    icon: Square,
  },
  {
    id: '4:3',
    title: 'Facebook Photo',
    description: 'Classic photo ratio that displays well across Facebook posts and albums.',
    value: '4:3',
    icon: Rectangle,
  },
  {
    id: '3:4',
    title: 'Pinterest Story',
    description: 'Tall portrait format optimized for Pinterest pins and story cards.',
    value: '3:4',
    icon: Rectangle,
    iconRotated: true,
  },
  {
    id: '21:9',
    title: 'Cinematic Ultra-Wide',
    description: 'Extra-wide aspect for dramatic, movie-style visuals and ultra-wide monitors.',
    value: '21:9',
    icon: Rectangle,
  }
];

// Recraft image sizes
export const RECRAFT_IMAGE_SIZE_OPTIONS: SettingsOption[] = [
  {
    id: '1024x1024',
    title: 'Instagram Square Post',
    icon: 'Square',
    value: '1024 x 1024',
    dimensions: { w: 1024, h: 1024 },
  },
  {
    id: '1365x1024',
    title: 'Facebook Timeline Post',
    icon: 'Square',
    value: '1365 x 1024',
    dimensions: { w: 1365, h: 1024 },
  },
  {
    id: '1024x1365',
    title: 'Pinterest Pin',
    icon: 'Square',
    iconRotated: true,
    value: '1024 x 1365',
    dimensions: { w: 1024, h: 1365 },
  },
  {
    id: '1536x1024',
    title: 'LinkedIn Article Cover',
    icon: 'Square',
    value: '1536 x 1024',
    dimensions: { w: 1536, h: 1024 },
  },
  {
    id: '1024x1536',
    title: 'Instagram Story',
    icon: 'Square',
    iconRotated: true,
    value: '1024 x 1536',
    dimensions: { w: 1024, h: 1536 },
  },
  {
    id: '1820x1024',
    title: 'Twitter Header',
    icon: 'Square',
    value: '1820 x 1024',
    dimensions: { w: 1820, h: 1024 },
  },
  {
    id: '1024x1820',
    title: 'TikTok Video',
    icon: 'Square',
    iconRotated: true,
    value: '1024 x 1820',
    dimensions: { w: 1024, h: 1820 },
  },
  {
    id: '1024x2048',
    title: 'Instagram Carousel',
    icon: 'Square',
    value: '1024 x 2048',
    dimensions: { w: 1024, h: 2048 },
  },
  {
    id: '2048x1024',
    title: 'YouTube Channel Art',
    icon: 'Square',
    iconRotated: true,
    value: '2048 x 1024',
    dimensions: { w: 2048, h: 1024 },
  },
  {
    id: '1434x1024',
    title: 'Facebook Event Cover',
    icon: 'Square',
    value: '1434 x 1024',
    dimensions: { w: 1434, h: 1024 },
  },
  {
    id: '1024x1434',
    title: 'Snapchat Story',
    icon: 'Square',
    iconRotated: true,
    value: '1024 x 1434',
    dimensions: { w: 1024, h: 1434 },
  },
  {
    id: '1024x1280',
    title: 'Instagram Reels',
    icon: 'Square',
    value: '1024 x 1280',
    dimensions: { w: 1024, h: 1280 },
  },
  {
    id: '1024x1707',
    title: 'WhatsApp Status',
    icon: 'Square',
    value: '1024 x 1707',
    dimensions: { w: 1024, h: 1707 },
  },
  {
    id: '1707x1024',
    title: 'LinkedIn Banner',
    icon: 'Square',
    value: '1707 x 1024',
    dimensions: { w: 1707, h: 1024 },
  },
]

export const imageSizeToIcon = (size: ImageSize): Icon => {
  let option = RECRAFT_IMAGE_SIZE_OPTIONS.find(opt => opt.value === size || opt.id === size);
  
  if (!option) {
    option = RECRAFT_IMAGE_SIZE_OPTIONS.find(opt => opt.value === size || opt.id === size);
  }
  
  if (!option) {
    return Square;
  }
  
  if (typeof option.icon === 'string') {
    switch (option.icon) {
      case 'Square':
        return Square;
      case 'Rectangle':
        return Rectangle;
      default:
        return Square;
    }
  }
  
  return option.icon as Icon;
}

export const imageSizeToIconRotation = (size: ImageSize): string => {
  let option = RECRAFT_IMAGE_SIZE_OPTIONS.find(opt => opt.value === size || opt.id === size);
  
  if (!option) {
    option = RECRAFT_IMAGE_SIZE_OPTIONS.find(opt => opt.value === size || opt.id === size);
  }
  
  return option?.iconRotated ? 'rotate-90' : '';
}

export const ratioToIcon = (ratio: Ratio): Icon => {
  const option = RATIO_OPTIONS.find(opt => opt.value === ratio);
  return option?.icon as Icon;
}

export const ratioToIconRotation = (ratio: Ratio): string => {
  const option = RATIO_OPTIONS.find(opt => opt.value === ratio);
  return option?.iconRotated ? 'rotate-90' : '';
}

export const getAvailableDimensionsRecraft = (): ImageSize[] => {
  const dimensions = RECRAFT_IMAGE_SIZE_OPTIONS.map(opt => opt.dimensions);
  return dimensions.map(dim => `${dim?.w}x${dim?.h}` as ImageSize);
}


