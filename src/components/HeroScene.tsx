import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface Props {
  /** Texte affiché si WebGL est indisponible (la scène est purement décorative). */
  fallbackLabel: string;
}

function readInk(): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-ink")
    .trim();
  return value || "#ffffff";
}

function WireframeIcosahedron({
  color,
  animate,
}: {
  color: string;
  animate: boolean;
}) {
  const mesh = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!animate) return;
    const onMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [animate]);

  useFrame((state, delta) => {
    if (!mesh.current || !animate) return;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.x += delta * 0.05;
    // Parallaxe caméra subtile vers le pointeur (lerp doux)
    state.camera.position.x +=
      (pointer.current.x * 0.4 - state.camera.position.x) * 0.05;
    state.camera.position.y +=
      (-pointer.current.y * 0.3 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshStandardMaterial wireframe color={color} transparent opacity={0.55} />
    </mesh>
  );
}

export default function HeroScene({ fallbackLabel }: Props) {
  const [ink, setInk] = useState("#ffffff");
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setInk(readInk());
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    try {
      const probe = document.createElement("canvas");
      setWebgl(
        Boolean(probe.getContext("webgl2") ?? probe.getContext("webgl")),
      );
    } catch {
      setWebgl(false);
    }

    // Re-teinte la scène quand SwitchAtmosphere bascule data-theme
    const observer = new MutationObserver(() => setInk(readInk()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  if (webgl === null) return null;
  if (!webgl) return <p className="text-label">{fallbackLabel}</p>;

  return (
    <Canvas
      aria-hidden="true"
      dpr={[1, 1.5]}
      frameloop={reduced ? "demand" : "always"}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={0.8} />
      <WireframeIcosahedron color={ink} animate={!reduced} />
    </Canvas>
  );
}
