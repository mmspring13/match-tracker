import {useEffect, useState} from "react";

export const useDocumentLoaded = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoaded(true);
      return;
    }
    const handleLoad = () => {
      setLoaded(document.readyState === 'complete');
    };

    document.addEventListener('readystatechange', handleLoad);
    return () => document.removeEventListener('readystatechange', handleLoad);
  }, []);

  return loaded;
};