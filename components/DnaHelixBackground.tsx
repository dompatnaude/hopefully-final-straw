"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DnaHelixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const blueLight = new THREE.PointLight(0x00a8ff, 2, 100);
    blueLight.position.set(20, 20, 20);
    scene.add(blueLight);
    const whiteLight = new THREE.PointLight(0xffffff, 1.5, 100);
    whiteLight.position.set(-20, -20, 20);
    scene.add(whiteLight);

    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    const blueMetallicMat = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0033aa,
      emissiveIntensity: 0.5,
    });
    const whiteMetallicMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xaaaaaa,
      emissiveIntensity: 0.2,
    });

    const numNodes = 40;
    const helixRadius = 6;
    const spacing = 0.8;
    const twistCount = 0.3;

    const sphereGeo = new THREE.SphereGeometry(0.6, 16, 16);
    const cylinderGeo = new THREE.CylinderGeometry(0.15, 0.15, helixRadius * 2, 8);

    for (let i = 0; i < numNodes; i++) {
      const angle = i * twistCount;
      const yPos = (i - numNodes / 2) * spacing;

      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;
      const sphere1 = new THREE.Mesh(sphereGeo, blueMetallicMat);
      sphere1.position.set(x1, yPos, z1);
      dnaGroup.add(sphere1);

      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;
      const sphere2 = new THREE.Mesh(sphereGeo, whiteMetallicMat);
      sphere2.position.set(x2, yPos, z2);
      dnaGroup.add(sphere2);

      if (i % 2 === 0) {
        const rung = new THREE.Mesh(cylinderGeo, whiteMetallicMat);
        rung.position.set((x1 + x2) / 2, yPos, (z1 + z2) / 2);
        rung.lookAt(new THREE.Vector3(x1, yPos, z1));
        rung.rotateX(Math.PI / 2);
        dnaGroup.add(rung);
      }
    }

    dnaGroup.scale.setScalar(0.8);
    dnaGroup.rotation.z = 0.3;
    dnaGroup.rotation.x = 0.2;

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      dnaGroup.rotation.y += 0.015;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      cylinderGeo.dispose();
      blueMetallicMat.dispose();
      whiteMetallicMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-full overflow-hidden opacity-80 sm:block sm:w-3/5 lg:w-1/2"
    />
  );
}
