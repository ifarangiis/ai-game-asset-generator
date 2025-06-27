import { ProviderConfig as Provider, ModelConfig as Model } from "./types"
import { IMG_GENERATOR_MODELS } from "./image-gen"

export const ALL_IMAGE_MODELS = [
  ...IMG_GENERATOR_MODELS,
] as Model[]

export const LOGO = {
  recraft: "/models/recraft.svg",
}

export const PROVIDERS = [
  {
    id: "recraft",
    name: "Recraft",
    icon: LOGO.recraft,
  },
] as Provider[]

export const PROVIDERS_OPTIONS = [
  ...PROVIDERS.map((provider) => ({
    ...provider,
    available: true,
  })),
] as Provider[]

export const DEFAULT_IMAGE_MODEL = ALL_IMAGE_MODELS[0]

// API BASE URLS
export const AIML_API_BASE_URL = "https://api.aimlapi.com/v1"
export const AIML_API_BASE_CHAT_URL = "https://api.aimlapi.com/v1/chat/completions"
export const AIML_API_BASE_IMAGE_URL = "https://api.aimlapi.com/v1/images/generations"
export const OPENAI_BASE_URL = "https://api.openai.com/v1"
export const CHARACTER_GENERATION_PROMPT = `
A 3D-rendered digital image of an adorable cartoon Axolotl, designed in a soft, minimalist style. 
The character features smooth rounded shapes, a plump and simplified body, glossy black eyes, small limbs, and rosy cheeks. 
Rendered in Cinema4D + Redshift quality, with soft diffused lighting and no hard shadows. 
Background is transparent. Colors are pastel and balanced, enhancing a cute, calm, and playful vibe. 
Texture is matte and plush-like, with subtle shading to give gentle depth. 
Use front or ¾ angle. One variation only. 
`