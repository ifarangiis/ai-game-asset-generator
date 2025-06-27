import { Icon } from "@phosphor-icons/react";

// ——————————————————————————————————————————————
// Style & Ratio / Duration Primitives
// ——————————————————————————————————————————————

export type ImageStyle = {
  id: string
  name: string
  image: string // style name for API
  thumbnail: string // display image
  description?: string
  prompt?: string
  recraftStyle?: string // For Recraft models - the API style value
}

export type Style = {
  id: string
  name: string
  description?: string
  disabled: boolean
  thumbnail: string // display image
  style: ImageStyle[]
}

export type Ratio = `${number}:${number}`

export type Duration = number // in seconds (for videos, animations, etc.)

/** What size a model supports */
export type ImageSize = `${number}x${number}`;

/** A provider entry (e.g. “openai”, “mistral”) */
export interface ProviderConfig {
  id: string;
  name: string;
  icon: Icon | string;
  available: boolean;
}

export type Settings = {
    imageSize?: ImageSize;
    ratio?: Ratio;
    duration?: Duration;
}

export type SettingsOption = {
    id: string;
    title: string;
    description?: string;
    icon: Icon | string;
    iconRotated?: boolean;
    value: string | number;
    dimensions?: { w: number; h: number };
}

export type ModelType = "image"; // only image models for now

export type ModelInput = "text"; // only text input for now

/** Core model description (as loaded from your config or API) */
export interface ModelConfig {
  /** unique, kebab-case ID. it's also the model name that will be passed to the API */
  id: string;
  /** human-readable name */
  name: string;
  /** provider ID (must match one in ProviderConfig[]) */
  provider: string;
  /** short summary of what this model does */
  description: string;
  /** what it produces */
  type: ModelType;
  /** what it accepts (or [“image”,“text”] if both) */
  input: ModelInput | ModelInput[];
  /** credits per call, time per call */
  credits: number;
  time: number;
  /** if false, hide it in the UI */
  available?: boolean;
  /** endpoint override (e.g. “/v1/generate/text”) */
  apiEndpoint?: string;
  /** optional seed override */
  seed?: number;
  /** model name (e.g. "runway/gen4_turbo") that will be passes as a body parameter */
  model?: Partial<{
    image: string;
    text: string;
  }>;
  /** extra options for multimedia models */
  options?: Partial<{
    duration: number[];          // video length in seconds model supports
    ratio: Ratio[]; // video ratio model supports
    numImages: number;         // batch size
    imageSize: ImageSize[]; // image size model supports. default auto
    loop: boolean;             // for 3D/animation
    maxDimension?: number;      // maximum dimension for custom sizes
    minDimension?: number;      // minimum dimension for custom sizes
    stepSize?: number;          // increment size for dimensions
    dimensionMustBeMultipleOf?: number; // dimensions must be multiple of this value
    supportsCustomDimensions?: boolean; // whether the model supports custom dimensions
  }>;

  /** icon to show in the picker */
  icon: Icon | string;
}