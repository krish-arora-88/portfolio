import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function F90() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / (2 * window.innerHeight), // Adjust aspect ratio for half width
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth / 2, window.innerHeight); // Set size to half width
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add shadow plane
    const planeGeometry = new THREE.CircleGeometry(2, 300); // Increased size and segments
    const planeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
      envMapIntensity: 1.0
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.49;
    scene.add(plane);

    // Add a subtle rim light
    const rimLight = new THREE.PointLight(0xffffff, 0.5);
    rimLight.position.set(5, 1, -1);
    scene.add(rimLight);

    // Add a subtle ground reflection
    const reflectionGeometry = new THREE.CircleGeometry(2, 300);
    const reflectionMaterial = new THREE.MeshBasicMaterial({
      color: 0x28282B,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });
    const reflection = new THREE.Mesh(reflectionGeometry, reflectionMaterial);
    reflection.rotation.x = Math.PI / 2;
    reflection.position.y = -0.49;
    scene.add(reflection);

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
      'app/welcome/bmw_f90_m5_competiton.glb',
    //   'app/welcome/onlycar.glb',
    //   'app/welcome/car.glb',
      (gltf: GLTF) => {
        const model = gltf.scene;
        
        // Calculate the bounding box
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        // Calculate scale
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 8 / maxDim;
        
        // Create a group for the model
        const modelGroup = new THREE.Group();
        
        // Add the model to the group
        modelGroup.add(model);
        
        // Apply scale to the group
        modelGroup.scale.set(scale, scale, scale);
        
        // Center the model by moving it to the origin
        modelGroup.position.x = -center.x * scale;
        modelGroup.position.y = -center.y * scale + 0.1;  // Raise the car to touch the shadow
        modelGroup.position.z = -center.z * scale - 2.15;
        
        // Add the group to the scene
        scene.add(modelGroup);
        
        // Set the orbit controls target to the center
        controls.target.set(0, 0, 0);
        controls.update();
        
        // Log positions for debugging
        console.log('Original center:', center);
        console.log('Model group position:', modelGroup.position);
        console.log('Model group scale:', modelGroup.scale);
        
        // Add a small sphere at the origin for debugging
        // const sphere = new THREE.Mesh(
        //   new THREE.SphereGeometry(0.1, 16, 16),
        //   new THREE.MeshBasicMaterial({ color: 0xff0000 })
        // );
        // scene.add(sphere);
      },
      (progress: ProgressEvent) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error: unknown) => {
        console.error('Error loading model:', error);
      }
    );

    const spotlight = new THREE.SpotLight(0x808080, 1000, 100, Math.PI / 4, 0.1, 1);
    spotlight.position.set(0, 10, 0);
    spotlight.target.position.set(0, 0, 0);
    scene.add(spotlight);
    scene.add(spotlight.target);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / (2 * window.innerHeight);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
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
        position: 'relative',
        left: '-25.5%',
        top: '15%',
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
}