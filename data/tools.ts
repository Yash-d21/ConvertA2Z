import { 
  FileText, Image as ImageIcon, Video, Music, File, Bot, 
  Scissors, Layers, Wand2, RefreshCw, Type, Search, 
  Crop, Minimize2, FileJson, FileSpreadsheet, Eye, 
  Zap, Lock, Unlock, Download, Share2, Printer, 
  PenTool, Mic, Speaker, PlayCircle, StopCircle,
  Calculator, Binary, Code, Globe, Database, ShieldCheck,
  Palette, Ruler, Clock, Activity, Hash, Shuffle, Link as LinkIcon
} from 'lucide-react';
import { ToolItem, CategoryId } from '../types';

const generateTools = (category: CategoryId, count: number): ToolItem[] => {
  const tools: ToolItem[] = [];
  const actions = ['Convert', 'Compress', 'Edit', 'Merge', 'Split', 'Enhance', 'Extract', 'Generate', 'Analyze', 'Translate'];
  const suffixes = ['Pro', 'Lite', 'Plus', 'Ultra', 'Fast', 'Secure', 'Smart', 'Auto', 'Direct', 'Cloud'];

  for (let i = 1; i <= count; i++) {
    let title = `${category.toUpperCase()} Tool ${i}`;
    let desc = `Efficiently process your ${category} files with high precision.`;
    let icon = FileText;

    if (category === 'pdf') {
      icon = i % 2 === 0 ? FileText : Layers;
      if (i === 1) title = "PDF to Word";
      if (i === 2) title = "Merge PDF";
      if (i === 3) title = "Split PDF";
      if (i === 4) title = "Compress PDF";
    } else if (category === 'image') {
      icon = i % 2 === 0 ? ImageIcon : Crop;
      if (i === 1) title = "JPG to PNG";
      if (i === 2) title = "Background Remover";
      if (i === 3) title = "Image Resizer";
    } else if (category === 'video') {
      icon = i % 2 === 0 ? Video : PlayCircle;
      if (i === 1) title = "MP4 to GIF";
      if (i === 2) title = "Video Trimmer";
    } else if (category === 'audio') {
      icon = i % 2 === 0 ? Music : Speaker;
      if (i === 1) title = "MP3 Converter";
    } else if (category === 'ai-tools') {
      icon = Bot;
      if (i === 1) { title = "Rephraser"; desc = "Rewrite text while keeping the meaning."; }
      else if (i === 2) { title = "Script Writer"; desc = "Generate video scripts instantly."; }
      else if (i === 3) { title = "Summarizer"; desc = "Condense long text into key points."; }
      else if (i === 4) { title = "Rewriter"; desc = "Refresh content for better flow."; }
      else if (i === 5) { title = "Image Generator"; desc = "Create images from text prompts."; }
      else if (i === 6) { title = "Code Explainer"; desc = "Understand complex code snippets."; }
      else {
        title = `AI ${actions[i % actions.length]} ${suffixes[i % suffixes.length]}`;
        desc = "AI-powered processing for superior results.";
      }
    } else {
      icon = File;
      if (i === 1) title = "Zip Extractor";
      if (i === 2) title = "JSON to CSV";
    }

    // Fill generic names if not set
    if (title.startsWith(category.toUpperCase())) {
       title = `${actions[i % actions.length]} ${category.charAt(0).toUpperCase() + category.slice(1)} ${suffixes[i % suffixes.length]}`;
    }

    tools.push({
      id: `${category}-${i}`,
      title,
      description: desc,
      icon,
      category,
      isPopular: i < 5
    });
  }
  return tools;
};

// Miscellaneous Tools List
const miscToolNames = [
  "Text to Slug", "Privacy Policy Generator", "Lorem Ipsum Generator", "Remove Breaks", "Terms Condition Generator", "Random Word Generator", "Disclaimer Generator",
  "ICO to PNG", "Base64 to Image", "Image Enlarger", "Image Converter", "JPG Converter", "ICO Converter", "Flip Image", "Image Cropper", "JPG to PNG", "WebP to JPG", "Image to Base64", "Rotate Image", "Image Resizer", "PNG to JPG",
  "Age Calculator", "Confidence Interval Calculator", "Probability Calculator", "CPM Calculator", "Percentage Calculator", "Sales Tax Calculator", "Paypal Fee Calculator", "Loan Calculator", "Average Calculator", "Margin Calculator", "Discount Calculator", "GST Calculator",
  "Volume Converter", "Time Converter", "Speed Converter", "Current Converter", "Reactive Power Converter", "Reactive Energy Converter", "Area Converter", "Voltage Converter", "Apparent Power Converter", "Volumetric Flow Rate Converter", "Weight Converter", "Parts Per Converter", "Pressure Converter", "Energy Converter", "Illuminance Converter", "Frequency Converter", "Number to Word Converter", "Charge Converter", "Flow Rate Converter", "Angle Converter", "Word to Number Converter", "Number to Roman Numerals", "Currency Converter", "Torque Converter", "Roman Numerals to Number",
  "Text to Binary", "Binary to HEX", "Decimal to Binary", "ASCII to Text", "Octal to Binary", "Decimal to Octal", "Text to Octal", "HEX to Text", "Binary to Text", "ASCII to Binary", "Binary to Octal", "HEX to Octal", "HEX to Binary", "Octal to Decimal", "Octal to HEX",
  "HTML Decode", "URL Encode", "CSS Beautifier", "JavaScript Minifier", "QR Code Decoder", "HTML Encode", "HTML Beautifier", "CSS Minifier", "Javascript DeObfuscator", "QR Code Generator", "URL Decode", "HTML Minifier", "JavaScript Beautifier", "Javascript Obfuscator",
  "Find Facebook ID", "JSON Viewer", "JSON Editor", "CSV to JSON", "JSON to CSV", "JSON Formatter", "JSON Minify", "TSV to JSON", "JSON to Text", "JSON Validator", "XML to JSON", "JSON to XML", "JSON to TSV",
  "MD5 Generator", "Base64 Decode", "Password Generator", "YouTube Thumbnail Downloader", "What Is My IP", "Base64 Encode", "VTT to SRT", "HEX to RGB", "IP Address Lookup", "Color Converter", "SRT to VTT", "RGB to HEX"
];

const generateMiscTools = (): ToolItem[] => {
  return miscToolNames.map((name, index) => {
    let icon = File;
    let desc = "Useful utility tool.";

    const lowerName = name.toLowerCase();
    
    // Assign Icons based on name keywords
    if (lowerName.includes('image') || lowerName.includes('jpg') || lowerName.includes('png') || lowerName.includes('ico') || lowerName.includes('webp')) {
      icon = ImageIcon;
      desc = "Image processing and conversion.";
    } else if (lowerName.includes('calculator') || lowerName.includes('percentage') || lowerName.includes('tax') || lowerName.includes('fee')) {
      icon = Calculator;
      desc = "Calculate values instantly.";
    } else if (lowerName.includes('converter')) {
      icon = RefreshCw;
      desc = "Convert units and measurements.";
    } else if (lowerName.includes('json') || lowerName.includes('xml') || lowerName.includes('csv') || lowerName.includes('html') || lowerName.includes('css') || lowerName.includes('javascript') || lowerName.includes('code')) {
      icon = Code;
      desc = "Developer and data format tools.";
    } else if (lowerName.includes('generator')) {
      icon = Wand2;
      desc = "Generate content or data.";
    } else if (lowerName.includes('binary') || lowerName.includes('hex') || lowerName.includes('ascii') || lowerName.includes('decimal')) {
      icon = Binary;
      desc = "Low-level data translation.";
    } else if (lowerName.includes('ip') || lowerName.includes('url') || lowerName.includes('web')) {
      icon = Globe;
      desc = "Network and web utilities.";
    } else if (lowerName.includes('password') || lowerName.includes('md5') || lowerName.includes('hash')) {
      icon = ShieldCheck;
      desc = "Security and hashing tools.";
    } else if (lowerName.includes('color') || lowerName.includes('rgb')) {
      icon = Palette;
      desc = "Color manipulation tools.";
    } else if (lowerName.includes('text') || lowerName.includes('word') || lowerName.includes('slug')) {
      icon = Type;
      desc = "Text manipulation utilities.";
    }

    return {
      id: `misc-${index}`,
      title: name,
      description: desc,
      icon: icon,
      category: 'miscellaneous',
    };
  });
};

export const allCategories: {id: CategoryId, label: string}[] = [
  { id: 'pdf', label: 'PDF' },
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'audio', label: 'Audio' },
  { id: 'file', label: 'File' },
  { id: 'ai-tools', label: 'AI Tools' },
  { id: 'miscellaneous', label: 'Miscellaneous' },
];

export const toolsData: Record<CategoryId, ToolItem[]> = {
  pdf: generateTools('pdf', 20),
  image: generateTools('image', 20),
  video: generateTools('video', 20),
  audio: generateTools('audio', 20),
  file: generateTools('file', 20),
  'ai-tools': generateTools('ai-tools', 20),
  'miscellaneous': generateMiscTools(),
};

// Flattened list for search or "All" view
export const allToolsList = Object.values(toolsData).flat();
