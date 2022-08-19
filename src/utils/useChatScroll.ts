import { useEffect, useRef } from 'react';

export function useChatScroll<T>(dep: T):
React.RefObject<HTMLDivElement> | undefined {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);

  if (ref) {
    return ref;
  }

  return undefined;
}
