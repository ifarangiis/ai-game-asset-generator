// /api/images/generations

import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_TEXT_TO_IMAGE_MODEL, DEFAULT_IMAGE_SIZE, MAX_IMAGE_COUNT, RECRAFT_IMAGE_SIZE_OPTIONS } from "@/lib/settings";
import { ImageSize } from "@/lib/types";
import { AIML_API_BASE_IMAGE_URL } from "@/lib/config";

// Initialize Recraft API client
const BASE_IMAGE_URL = AIML_API_BASE_IMAGE_URL;
const API_KEY = process.env.AIML_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const prompt = formData.get('prompt') as string || '';
    const model = formData.get('model') as string || DEFAULT_TEXT_TO_IMAGE_MODEL;
    const sizeParam = formData.get('size') as ImageSize || DEFAULT_IMAGE_SIZE;
    const n = parseInt(formData.get('n') as string || '1', MAX_IMAGE_COUNT);
    const style = formData.get('style') as string || '';
    
    // Parse colors if provided
    let colors: Array<{ r: number; g: number; b: number }> = [];
    const colorsParam = formData.get('colors') as string;
    if (colorsParam) {
      try {
        const parsedColors = JSON.parse(colorsParam);
        // Validate and ensure RGB values are integers 0-255
        colors = parsedColors.map((color: any) => ({
          r: Math.round(Math.max(0, Math.min(255, color.r))),
          g: Math.round(Math.max(0, Math.min(255, color.g))),
          b: Math.round(Math.max(0, Math.min(255, color.b)))
        }));
      } catch (error) {
        console.error('Error parsing colors:', error);
      }
    }

    return handleRecraftGeneration(prompt, model, sizeParam, n, style, colors);
    
  } catch (error) {
    console.error('Error in images generations API:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

function convertImageSizeToRecraft(size: ImageSize): string | { width: number; height: number } {
  const option = RECRAFT_IMAGE_SIZE_OPTIONS.find(opt => opt.value === size || opt.id === size);
  if (option && option.dimensions) {
    const { w, h } = option.dimensions;
    
    // Recraft accepts both object format and predefined string values
    // Check for predefined sizes first
    const aspectRatio = w / h;
    if (w === h) {
      return w === 1024 ? "square_hd" : "square";
    } else if (aspectRatio === 4/3) {
      return h > w ? "portrait_4_3" : "landscape_4_3";
    } else if (aspectRatio === 16/9) {
      return h > w ? "portrait_16_9" : "landscape_16_9";
    }
    
    // Use object format for custom sizes
    return {
      width: w,
      height: h
    };
  }
  
  // Fallback to predefined size
  return "square_hd";
}

// Handler for Recraft API image generation
async function handleRecraftGeneration(prompt: string, model: string, sizeParam: ImageSize, n: number, style?: string, colors?: Array<{ r: number; g: number; b: number }>) {
  try {
    // Convert size to Recraft format
    const image_size = convertImageSizeToRecraft(sizeParam);
    
    // Prepare the Recraft API request payload
    const payload = {
      model: model,
      prompt: prompt,
      image_size: image_size,
      num_images: n,
      ...(style && { style: style }), // Only add style if provided
      ...(colors && colors.length > 0 && { colors: colors }) // Only add colors if provided
    };
    
    // Make the request to Recraft API
    const response = await fetch(BASE_IMAGE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Recraft API error (${response.status}): ${errorText}`);
    }
    
    const recraftResponse = await response.json();
    
    // Format the response to match our API's structure
    const formattedData = recraftResponse.images.map((img: { url: string }) => ({
      url: img.url,
      revised_prompt: prompt
    }));
    
    return NextResponse.json({
      data: formattedData
    });
    
  } catch (error) {
    console.error('Error in Recraft image generation:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error occurred with Recraft API',
      },
      { status: 500 }
    );
  }
}
