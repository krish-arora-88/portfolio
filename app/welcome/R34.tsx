import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function R34() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.set(0, 1.5, 4);
    camera.lookAt(0, 0, 0);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 4;
    controls.maxDistance = 4;
    controls.maxPolarAngle = Math.PI / 2.2;
    controls.minPolarAngle = Math.PI / 2.2;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.rotateSpeed = 1;
    controls.target.set(0, 0, 0);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      '/assets/CarModels/r34.glb',
      (gltf: GLTF) => {
        const model = gltf.scene;

        // Fix body color to Bayside Blue
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const mat = mesh.material as THREE.MeshStandardMaterial;
            if (!mat.color) return;

            // Skip glass/transparent materials (windows)
            if (mat.transparent || mat.opacity < 1) return;

            const hsl = { h: 0, s: 0, l: 0 };
            mat.color.getHSL(hsl);

            // Target opaque, saturated blue body panels only
            if (hsl.h > 0.45 && hsl.h < 0.7 && hsl.s > 0.5) {
              mat.color.setHSL(0.62, 0.95, 0.12);
              mat.metalness = 0.6;
              mat.roughness = 0.3;
            }

            // Boost red tail lamp materials (only highly saturated reds)
            if ((hsl.h < 0.05 || hsl.h > 0.95) && hsl.s > 0.5) {
              mat.color.setHSL(hsl.h, Math.min(hsl.s * 1.3, 1.0), hsl.l);
              mat.emissive = new THREE.Color(0x220000);
            }
          }
        });

        // Calculate the bounding box
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        // Calculate scale
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3.6 / maxDim;
        
        // Create a group for the model
        const modelGroup = new THREE.Group();
        
        // Add the model to the group
        modelGroup.add(model);
        
        // Apply scale to the group
        modelGroup.scale.set(scale, scale, scale);
        
        // Rotate the model 180 degrees around Y axis
        modelGroup.rotation.y = Math.PI;
        
        // Center the model by moving it to the origin
        modelGroup.position.x = -center.x * scale;
        modelGroup.position.y = -center.y * scale + 0.1;
        modelGroup.position.z = -center.z * scale + 0.05;
        
        // Add the group to the scene
        scene.add(modelGroup);
        
        // Set the orbit controls target to the center
        controls.target.set(0, 0, 0);
        controls.update();
      },
      undefined,
      undefined
    );

    const spotlight = new THREE.SpotLight(0x808080, 1000, 100, Math.PI / 4, 0.1, 1);
    spotlight.position.set(0, 10, 0);
    spotlight.target.position.set(0, 0, 0);
    scene.add(spotlight);
    scene.add(spotlight.target);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
} 