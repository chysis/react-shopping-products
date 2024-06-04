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
  const areaRef = useRef(null);
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

    if (areaRef.current) {
      observer.observe(areaRef.current);
    }

    return () => {
      if (areaRef.current) {
        observer.unobserve(areaRef.current);
      }
    };
  }, [onImpression, threshold]);

  return <div ref={areaRef}>{children}</div>;
}
