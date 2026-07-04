import { useEffect, useRef } from 'react';

export function NoiseOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const noise = ref.current;
    if (!noise) return;

    let x = 0;
    let y = 0;
    let frameId: number;

    function animate() {
      x += (Math.random() - 0.5) * 1.2;
      y += (Math.random() - 0.5) * 1.2;

      x = Math.max(-12, Math.min(12, x));
      y = Math.max(-12, Math.min(12, y));

      if (noise) {
        noise.style.transform = `translate(${x}px, ${y}px)`;
        noise.style.backgroundPosition = `${Math.random() * 200}px ${Math.random() * 200}px`;
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <div id="noise-layer" ref={ref} />;
}
