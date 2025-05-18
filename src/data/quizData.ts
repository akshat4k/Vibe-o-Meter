
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  scores: { [key: string]: number };
}

export interface Result {
  type: string;
  title: string;
  description: string;
  emoji: string;
  bgClass: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What's your ideal weekend activity?",
    options: [
      { 
        id: "1a", 
        text: "Relaxing with a book or movie", 
        scores: { zen: 3, chill: 2, chaotic: 0, mainCharacter: 1 } 
      },
      { 
        id: "1b", 
        text: "Going to a party or social event", 
        scores: { zen: 0, chill: 1, chaotic: 2, mainCharacter: 3 } 
      },
      { 
        id: "1c", 
        text: "Spontaneous adventure with no plan", 
        scores: { zen: 0, chill: 0, chaotic: 3, mainCharacter: 2 } 
      },
      { 
        id: "1d", 
        text: "Creating something (art, cooking, etc.)", 
        scores: { zen: 2, chill: 1, chaotic: 1, mainCharacter: 1 } 
      }
    ]
  },
  {
    id: 2,
    text: "How do you handle unexpected problems?",
    options: [
      { 
        id: "2a", 
        text: "Stay calm and methodically solve them", 
        scores: { zen: 3, chill: 1, chaotic: 0, mainCharacter: 1 } 
      },
      { 
        id: "2b", 
        text: "Go with the flow and adapt", 
        scores: { zen: 1, chill: 3, chaotic: 1, mainCharacter: 0 } 
      },
      { 
        id: "2c", 
        text: "Panic first, then figure it out", 
        scores: { zen: 0, chill: 0, chaotic: 3, mainCharacter: 1 } 
      },
      { 
        id: "2d", 
        text: "Turn it into an opportunity to shine", 
        scores: { zen: 0, chill: 1, chaotic: 1, mainCharacter: 3 } 
      }
    ]
  },
  {
    id: 3,
    text: "Your friends would describe you as...",
    options: [
      { 
        id: "3a", 
        text: "The wise, thoughtful one", 
        scores: { zen: 3, chill: 1, chaotic: 0, mainCharacter: 1 } 
      },
      { 
        id: "3b", 
        text: "The reliable, easy-going one", 
        scores: { zen: 1, chill: 3, chaotic: 0, mainCharacter: 0 } 
      },
      { 
        id: "3c", 
        text: "The wild, unpredictable one", 
        scores: { zen: 0, chill: 0, chaotic: 3, mainCharacter: 1 } 
      },
      { 
        id: "3d", 
        text: "The dramatic, attention-grabbing one", 
        scores: { zen: 0, chill: 0, chaotic: 1, mainCharacter: 3 } 
      }
    ]
  },
  {
    id: 4,
    text: "What's your communication style?",
    options: [
      { 
        id: "4a", 
        text: "Thoughtful and measured", 
        scores: { zen: 3, chill: 1, chaotic: 0, mainCharacter: 0 } 
      },
      { 
        id: "4b", 
        text: "Casual and easy-going", 
        scores: { zen: 1, chill: 3, chaotic: 0, mainCharacter: 0 } 
      },
      { 
        id: "4c", 
        text: "All over the place with random tangents", 
        scores: { zen: 0, chill: 0, chaotic: 3, mainCharacter: 1 } 
      },
      { 
        id: "4d", 
        text: "Animated and expressive", 
        scores: { zen: 0, chill: 0, chaotic: 1, mainCharacter: 3 } 
      }
    ]
  },
  {
    id: 5,
    text: "How organized is your living space?",
    options: [
      { 
        id: "5a", 
        text: "Minimal and meticulously organized", 
        scores: { zen: 3, chill: 0, chaotic: 0, mainCharacter: 1 } 
      },
      { 
        id: "5b", 
        text: "Tidy but lived-in", 
        scores: { zen: 1, chill: 3, chaotic: 0, mainCharacter: 0 } 
      },
      { 
        id: "5c", 
        text: "Organized chaos – I know where everything is!", 
        scores: { zen: 0, chill: 1, chaotic: 2, mainCharacter: 1 } 
      },
      { 
        id: "5d", 
        text: "Complete disaster zone", 
        scores: { zen: 0, chill: 0, chaotic: 3, mainCharacter: 0 } 
      }
    ]
  }
];

export const results: { [key: string]: Result } = {
  zen: {
    type: "zen",
    title: "Zen Master Vibe",
    description: "You're radiating calm, focused energy! Like a peaceful pond, you're unruffled by life's chaos. Taking things one mindful moment at a time, you're everyone's rock in a storm.",
    emoji: "🧘‍♂️",
    bgClass: "bg-gradient-to-br from-blue-300 via-teal-200 to-blue-200"
  },
  chill: {
    type: "chill",
    title: "Chill Vibes Only",
    description: "You're in full relaxation mode! Going with the flow and taking life as it comes. Your easy-going energy is contagious, making everyone around you feel at ease.",
    emoji: "😎",
    bgClass: "bg-gradient-to-br from-green-300 via-teal-200 to-blue-300"
  },
  chaotic: {
    type: "chaotic",
    title: "Chaos Gremlin Energy",
    description: "Your vibe is gloriously unpredictable! You're bringing the excitement and spontaneity that keeps life interesting. A whirlwind of energy that leaves an impression wherever you go.",
    emoji: "🤪",
    bgClass: "bg-gradient-to-br from-orange-300 via-red-200 to-purple-300"
  },
  mainCharacter: {
    type: "mainCharacter",
    title: "Main Character Energy",
    description: "You're the star of your own movie right now! Confidence is radiating from you as you take center stage. Embracing your uniqueness and letting your personality shine.",
    emoji: "💫",
    bgClass: "bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400"
  }
};
