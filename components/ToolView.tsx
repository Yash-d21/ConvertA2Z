
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Check, Download, Play, Copy, RefreshCw, FileText } from 'lucide-react';
import { ToolItem } from '../types';

interface ToolViewProps {
  tool: ToolItem;
  onBack: () => void;
}

const ToolView = ({ tool, onBack }: ToolViewProps) => {
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [progress, setProgress] = useState(0);
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [fileName, setFileName] = useState('');

  const isFileTool = ['pdf', 'image', 'video', 'audio', 'file'].includes(tool.category);

  // Reset state when tool changes
  useEffect(() => {
    setStep('input');
    setProgress(0);
    setInputText('');
    setResultText('');
    setFileName('');
  }, [tool]);

  const handleProcess = () => {
    setStep('processing');
    let p = 0;
    // Simulate processing time
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setStep('result');
        if (!isFileTool) {
            setResultText("This is a simulated AI response. In a real application, the backend would process your input: '" + inputText + "' and return the generated content here.");
        }
      }
      setProgress(p);
    }, 300);
  };

  const handleFileUpload = () => {
    // Simulate file selection
    setFileName(`example_${tool.category}_file.dat`);
    setTimeout(handleProcess, 500);
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumb / Back */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8"
      >
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="font-medium">Back to Tools</span>
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
        <div className="w-20 h-20 bg-gray-100 dark:bg-[#141414] rounded-3xl flex items-center justify-center border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <tool.icon className="w-10 h-10 text-black dark:text-white" />
        </div>
        <div>
            <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">{tool.title}</h1>
                <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                    {tool.category}
                </span>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">{tool.description}</p>
        </div>
      </div>

      {/* Workspace Card */}
      <div className="bg-white dark:bg-[#141414] rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-none overflow-hidden min-h-[500px] flex flex-col relative transition-colors duration-300">
        
        {/* INPUT STATE */}
        {step === 'input' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 text-center animate-in fade-in zoom-in-95 duration-300">
                {isFileTool ? (
                    <div 
                        className="w-full h-80 border-2 border-dashed border-gray-300 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.02] hover:border-purple-500 dark:hover:border-purple-500 transition-all group"
                        onClick={handleFileUpload}
                    >
                        <div className="w-20 h-20 bg-purple-50 dark:bg-purple-500/10 rounded-full flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            <Upload className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Upload your file</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base mb-8">
                            Drag & drop or click to browse
                        </p>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                            Supports {tool.category === 'image' ? 'JPG, PNG, WEBP' : tool.category === 'pdf' ? 'PDF' : 'All Formats'}
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-3xl flex flex-col h-full">
                        <label className="text-left text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1">
                            Input Text
                        </label>
                        <textarea 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Paste your text here or type something..."
                            className="flex-1 w-full min-h-[250px] bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 text-lg text-black dark:text-white resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all mb-8 shadow-inner"
                        />
                        <button 
                            onClick={handleProcess}
                            disabled={!inputText.trim()}
                            className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-white dark:text-black px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Run {tool.title}
                        </button>
                    </div>
                )}
            </div>
        )}

        {/* PROCESSING STATE */}
        {step === 'processing' && (
            <div className="flex-1 flex flex-col items-center justify-center p-10 animate-in fade-in duration-500">
                <div className="relative w-32 h-32 mb-8">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" className="stroke-gray-100 dark:stroke-white/5" strokeWidth="12" fill="none" />
                        <circle 
                            cx="64" cy="64" r="56" 
                            className="stroke-purple-600 dark:stroke-purple-500 transition-all duration-300 ease-out" 
                            strokeWidth="12" 
                            fill="none" 
                            strokeDasharray="351.8" 
                            strokeDashoffset={351.8 - (351.8 * progress) / 100} 
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-black dark:text-white">{Math.round(progress)}%</span>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Processing...</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
                    {isFileTool ? `Converting ${fileName}` : 'Analyzing your text input'}
                </p>
            </div>
        )}

        {/* RESULT STATE */}
        {step === 'result' && (
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-8 text-green-600 dark:text-green-500 shadow-lg shadow-green-500/10">
                    <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Task Completed!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md">
                    Your {isFileTool ? 'file is ready for download' : 'content has been generated successfully'}.
                </p>

                {isFileTool ? (
                    <div className="flex flex-col gap-4 w-full max-w-sm">
                        <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-1">
                            <Download className="w-5 h-5" />
                            Download File
                        </button>
                        <div className="p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-3">
                             <div className="w-10 h-10 bg-white dark:bg-white/10 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-gray-500 dark:text-white" />
                             </div>
                             <div className="text-left overflow-hidden">
                                <div className="text-sm font-medium text-black dark:text-white truncate">processed_{fileName}</div>
                                <div className="text-xs text-gray-500">1.2 MB</div>
                             </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-3xl bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl p-8 text-left border border-gray-200 dark:border-white/10 relative group shadow-inner">
                        <p className="text-black dark:text-white leading-relaxed text-lg whitespace-pre-wrap">{resultText}</p>
                        <button 
                            className="absolute top-4 right-4 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                            onClick={() => {
                                navigator.clipboard.writeText(resultText);
                                // Optional: Show copied toast
                            }}
                            title="Copy to clipboard"
                        >
                            <Copy className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <button 
                    onClick={() => {
                        setStep('input');
                        setInputText('');
                        setFileName('');
                    }}
                    className="mt-12 text-gray-500 hover:text-black dark:hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                    Convert Another
                </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default ToolView;
