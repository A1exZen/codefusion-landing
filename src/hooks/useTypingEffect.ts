import { useEffect, useState } from 'react';

const TYPING_SPEED = 100;
const DELETING_SPEED = 100;
const PAUSE_END = 1500;
const PAUSE_AFTER_DELETE = 500;
const START_DELAY = 500;

export function useTypingEffect(words: string[]): string {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    setText('');

    function tick() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        setText(currentWord.substring(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        timeoutId = setTimeout(tick, DELETING_SPEED);
      } else {
        charIndex++;
        setText(currentWord.substring(0, charIndex));

        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, PAUSE_END);
          return;
        }
        timeoutId = setTimeout(tick, TYPING_SPEED);
      }
    }

    const startId = setTimeout(tick, START_DELAY);
    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
  }, [words]);

  return text;
}
