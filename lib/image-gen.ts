import { ModelConfig as Model } from "@/lib/types"
import { getAvailableDimensionsRecraft } from "@/lib/settings"

const LOGOS = {
  recraft: "/models/recraft.svg",
}

export const IMG_GENERATOR_MODELS: Model[] = [
  {
    id: "recraft-v3",
    name: "Recraft v3",
    provider: "recraft",
    description: "Recraft's new SOTA model",
    type: "image",
    input: "text",
    icon: LOGOS.recraft,
    credits: 100,
    time: 10,
    available: true,
    options: {
      imageSize: getAvailableDimensionsRecraft(),
      maxDimension: 2048,
      minDimension: 1024,
      stepSize: 32,
      dimensionMustBeMultipleOf: 32,
      supportsCustomDimensions: false,
    },
  },
]
