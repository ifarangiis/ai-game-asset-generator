import { ImageStyle, Style } from "@/lib/types";

export type RecraftStyleType = 'realistic_image' | 'digital_illustration' | 'vector_illustration';

export const STYLES_RECRAFT: Record<RecraftStyleType, string[]> = {
    "realistic_image": [
        "realistic_image", // just default option , if user does want to select any other styles, but stil wants to generate realistic image
        "b_and_w",
        "enterprise",
        "evening_light",
        "faded_nostalgia",
        "forest_life",
        "hard_flash",
        "hdr",
        "motion_blur",
        "mystic_naturalism",
        "natural_light",
        "natural_tones",
        "organic_calm",
        "real_life_glow",
        "retro_realism",
        "retro_snapshot",
        "studio_portrait",
        "urban_drama",
        "village_realism",
        "warm_folk"
    ],
    "digital_illustration": [
        "digital_illustration", // just default option , if user does want to select any other styles, but stil wants to generate digital illustration
        "2d_art_poster",
        "2d_art_poster_2",
        "antiquarian",
        "bold_fantasy",
        "child_book",
        "cover",
        "crosshatch",
        "digital_engraving",
        "engraving_color",
        "expressionism",
        "freehand_details",
        "grain",
        "grain_20",
        "graphic_intensity",
        "hand_drawn",
        "hand_drawn_outline",
        "handmade_3d",
        "hard_comics",
        "infantile_sketch",
        "long_shadow",
        "modern_folk",
        "multicolor",
        "neon_calm",
        "noir",
        "nostalgic_pastel",
        "outline_details",
        "pastel_gradient",
        "pastel_sketch",
        "pixel_art",
        "plastic",
        "pop_art",
        "pop_renaissance",
        "seamless",
        "street_art",
        "tablet_sketch",
        "urban_glow",
        "urban_sketching",
        "young_adult_book",
        "young_adult_book_2"
    ],
    "vector_illustration": [
        "vector_illustration", // just default option , if user does want to select any other styles, but stil wants to generate vector illustration
        "bold_stroke",
        "chemistry",
        "colored_stencil",
        "cosmics",
        "cutout",
        "depressive",
        "editorial",
        "emotional_flat",
        "engraving",
        "line_art",
        "line_circuit",
        "linocut",
        "marker_outline",
        "mosaic",
        "naivector",
        "roundish_flat",
        "seamless",
        "segmented_colors",
        "sharp_contrast",
        "thin",
        "vector_photo",
        "vivid_shapes"
    ]
}

export const STYLES_RECRAFT_PATTERNS: Record<RecraftStyleType, string[]> = {
    "realistic_image": [
        "https://iili.io/FHsoM11.jpg",
        "https://iili.io/FHsoHWN.jpg",
        "https://iili.io/FHso30X.jpg",
        "https://iili.io/FHso9xp.jpg",
        "https://iili.io/FHso2ft.jpg",
        "https://iili.io/FHsoBef.jpg",
        "https://iili.io/FHsoCb4.jpg",
        "https://iili.io/FHsoozl.jpg",
        "https://iili.io/FHsoxX2.jpg",
        "https://iili.io/FHso75b.jpg",
        "https://iili.io/FHsoYej.jpg",
        "https://iili.io/FHsoamx.jpg",
        "https://iili.io/FHsolzQ.jpg",
        "https://iili.io/FHsoVrF.jpg",
        "https://iili.io/FHsoXdg.jpg",
        "https://iili.io/FHsojkJ.jpg",
        "https://iili.io/FHsoeXp.jpg",
        "https://iili.io/FHsokLN.jpg",
        "https://iili.io/FHso8BI.jpg"
    ],
    "digital_illustration": [
        "https://iili.io/FHszHFt.jpg",
        "https://iili.io/FHsxicF.jpg",
        "https://iili.io/FHsxrMB.jpg",
        "https://iili.io/FHsxs8g.jpg",
        "https://iili.io/FHsxPF1.jpg",
        "https://iili.io/FHsxZAJ.jpg",
        "https://iili.io/FHsxDtR.jpg",
        "https://iili.io/FHsxmnp.jpg",
        "https://iili.io/FHsxyPI.jpg",
        "https://iili.io/FHszJcX.jpg",
        "https://iili.io/FHszdSn.jpg",
        "https://iili.io/FHszKNf.jpg",
        "https://iili.io/FHszft4.jpg",
        "https://iili.io/FHszzl9.jpg",
        "https://iili.io/FHszISe.jpg",
        "https://iili.io/FHszuHu.jpg",
        "https://iili.io/FHszAAb.jpg",
        "https://iili.io/FHszaVV.jpg",
        "https://iili.io/FHszYoQ.jpg",
        "https://iili.io/FHszciB.jpg",
        "https://iili.io/FHsz0KP.jpg",
        "https://iili.io/FHszEUF.jpg",
        "https://iili.io/FHszWOJ.jpg",
        "https://iili.io/FHszMHg.jpg",
        "https://iili.io/FHszXDv.jpg",
        "https://iili.io/FHszNiN.jpg",
        "https://iili.io/FHszklt.jpg",
        "https://iili.io/FHszSJn.jpg",
        "https://iili.io/FHszURs.jpg",
        "https://iili.io/FHsz6x4.jpg",
        "https://iili.io/FHszis2.jpg",
        "https://iili.io/FHszPWl.jpg",
        "https://iili.io/FHszLfS.jpg",
        "https://iili.io/FHszb5u.jpg",
        "https://iili.io/FHszmOb.jpg",
        "https://iili.io/FHsI9zx.jpg",
        "https://iili.io/FHsIHWQ.jpg",
        "https://iili.io/FHsIJsV.jpg",
        "https://iili.io/FHsI2qB.jpg"
    ],
    "vector_illustration": [
        "https://iili.io/FHsq5tS.jpg",
        "https://iili.io/FHsfgn9.jpg",
        "https://iili.io/FHsfvu2.jpg",
        "https://iili.io/FHsf8jS.jpg",
        "https://iili.io/FHsfSZ7.jpg",
        "https://iili.io/FHsf46u.jpg",
        "https://iili.io/FHsfZuV.jpg",
        "https://iili.io/FHsftwB.jpg",
        "https://iili.io/FHsfDZP.jpg",
        "https://iili.io/FHsqHFa.jpg",
        "https://iili.io/FHsqd8v.jpg",
        "https://iili.io/FHsqJcJ.jpg",
        "https://iili.io/FHsq39R.jpg",
        "https://iili.io/FHsqKwN.jpg",
        "https://iili.io/FHsqCMX.jpg",
        "https://iili.io/FHsqftI.jpg",
        "https://iili.io/FHsqnPn.jpg",
        "https://iili.io/FHsqAAl.jpg",
        "https://iili.io/FHsqzcG.jpg",
        "https://iili.io/FHsqu94.jpg",
        "https://iili.io/FHsqISf.jpg",
        "https://iili.io/FHsqcPe.jpg",
        "https://iili.io/FHsqaV9.jpg",
    ],
}

// Helper function to convert style names to readable format
function formatStyleName(styleId: string): string {
    return styleId
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Function to construct realistic image styles
function constructRealisticImageStyles(): ImageStyle[] {
    const styles = STYLES_RECRAFT.realistic_image;
    const patterns = STYLES_RECRAFT_PATTERNS.realistic_image;
    
    return styles.map((styleId, index) => ({
        id: styleId,
        name: formatStyleName(styleId),
        image: patterns[index] || patterns[0], // fallback to first pattern if index doesn't exist
        thumbnail: patterns[index] || patterns[0],
        recraftStyle: `realistic_image${styleId === 'realistic_image' ? '' : `/${styleId}`}` // for API usage
    }));
}

// Function to construct digital illustration styles
function constructDigitalIllustrationStyles(): ImageStyle[] {
    const styles = STYLES_RECRAFT.digital_illustration;
    const patterns = STYLES_RECRAFT_PATTERNS.digital_illustration;
    
    return styles.map((styleId, index) => ({
        id: styleId,
        name: formatStyleName(styleId),
        image: patterns[index] || patterns[0], // fallback to first pattern if index doesn't exist
        thumbnail: patterns[index] || patterns[0],
        recraftStyle: `digital_illustration${styleId === 'digital_illustration' ? '' : `/${styleId}`}` // for API usage
    }));
}

// Function to construct vector illustration styles
function constructVectorIllustrationStyles(): ImageStyle[] {
    const styles = STYLES_RECRAFT.vector_illustration;
    const patterns = STYLES_RECRAFT_PATTERNS.vector_illustration;
    
    return styles.map((styleId, index) => ({
        id: styleId,
        name: formatStyleName(styleId),
        image: patterns[index] || patterns[0], // fallback to first pattern if index doesn't exist
        thumbnail: patterns[index] || patterns[0],
        recraftStyle: `vector_illustration${styleId === 'vector_illustration' ? '' : `/${styleId}`}` // for API usage
    }));
}

// Construct the style arrays using the functions
export const REALISTIC_IMAGE: ImageStyle[] = constructRealisticImageStyles();
export const DIGITAL_ILLUSTRATION: ImageStyle[] = constructDigitalIllustrationStyles();
export const VECTOR_ILLUSTRATION: ImageStyle[] = constructVectorIllustrationStyles();

export const STYLES_RECRAFT_OPTIONS: Style[] = [
    {
        id: 'realistic_image',
        name: 'Realistic Image',
        disabled: false,
        thumbnail: "https://iili.io/FHsoM11.jpg",
        style: REALISTIC_IMAGE,
    },
    {
        id: 'digital_illustration',
        name: 'Digital Illustration',
        disabled: false,
        thumbnail: "https://iili.io/FHszHFt.jpg",
        style: DIGITAL_ILLUSTRATION,
    },
    {
        id: 'vector_illustration',
        name: 'Vector Illustration',
        disabled: false,
        thumbnail: "https://iili.io/FHsq5tS.jpg",
        style: VECTOR_ILLUSTRATION,
    },
];
