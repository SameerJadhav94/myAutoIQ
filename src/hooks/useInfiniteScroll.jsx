import { useEffect } from 'react';

export const useInfiniteScroll = (
  targetRef,
  onIntersect,
  threshold = 0.1
) => {
  useEffect(() => {
    const target = targetRef.current;
    if (!target || !onIntersect) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      },
      {
        threshold,
        rootMargin: '100px',
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [targetRef, onIntersect, threshold]);
};