import { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const useImageToText = (imageData) => {
  const [isLoading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imageData) return;

    setLoading(true);
    setText('');
    setError(null);

    Tesseract.recognize(
      imageData,
      'eng', // Specify the language of the text to be recognized
      {
        // logger: (m) => console.log(m), // Logs progress information
      }
    )
    .then(({ data: { text } }) => {
      setText(text);
    })
    .catch((err) => {
      setError(err.message || 'Failed to convert image to text.');
    })
    .finally(() => {
      setLoading(false);
    });
  }, [imageData]); // Dependency array ensures this effect runs whenever `imageData` changes

  return { isLoading, text, error };
};

export default useImageToText;
