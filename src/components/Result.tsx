
import React from 'react';
import { Result as ResultType } from '../data/quizData';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { Share } from 'lucide-react';

interface ResultProps {
  result: ResultType;
  onRetake: () => void;
}

const Result = ({ result, onRetake }: ResultProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `My Vibe Check Result: ${result.title}`,
        text: `I got "${result.title}" on the Vibe Check Quiz! ${result.emoji}`,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(
        `I got "${result.title}" on the Vibe Check Quiz! ${result.emoji} Check your vibe at: ${window.location.href}`
      ).then(() => {
        toast.success("Copied to clipboard! Share with your friends!");
      });
    }
  };
  
  return (
    <div className={`scale-in w-full max-w-lg mx-auto p-8 rounded-2xl shadow-lg ${result.bgClass}`}>
      <div className="text-center">
        <div className="text-6xl mb-4">{result.emoji}</div>
        <h2 className="text-3xl font-bold mb-2">
          {result.title}
        </h2>
        <p className="text-lg mb-8">{result.description}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="outline" 
            className="bg-white/70 backdrop-blur-sm hover:bg-white/90"
            onClick={onRetake}
          >
            Retake Quiz
          </Button>
          <Button 
            className="bg-black/80 text-white hover:bg-black/90 backdrop-blur-sm flex items-center gap-2"
            onClick={handleShare}
          >
            <Share size={18} /> Share Your Vibe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
