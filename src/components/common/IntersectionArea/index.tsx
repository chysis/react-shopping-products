import { useEffect, useRef, useState } from 'react';

interface InterSectionArea {
  onImpression: () => void;
  threshold?: number;
}

export default function IntersectionArea({
  onImpression,
  threshold,
  children,
}: React.PropsWithChildren<InterSectionArea>) {
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [hasImpressed, setHasImpressed] = useState<boolean>(false);

  useEffect(() => {
    if (hasImpressed) return;

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          onImpression();
          setHasImpressed(true);

          if (areaRef.current) {
            observer.unobserve(areaRef.current);
          }
        }
      },
      { threshold }
    );

    const currentElement = areaRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [hasImpressed, onImpression, threshold]);

  return <div ref={areaRef}>{children}</div>;
}
