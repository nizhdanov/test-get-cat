import { useEffect, useRef, useState } from 'react';

export const useInterval = (callback: () => void, interval = 1000) => {
  const [active, setActive] = useState<boolean>(false);

  const intervalIdRef = useRef<ReturnType<typeof setInterval>>(null!);
  const internalCallbackRef = useRef(callback);

  useEffect(() => {
    if (!active) return;

    intervalIdRef.current = setInterval(() => internalCallbackRef.current(), interval);
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [active, interval]);

  const toggle = () => setActive(!active);

  return { active, toggle };
};
