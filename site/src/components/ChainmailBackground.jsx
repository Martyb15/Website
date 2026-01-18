import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ChainmailBackground = () => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
      alpha: false,
    });

    renderer.setPixelRatio(1);
    renderer.setClearColor(0x070b10, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    rendererRef.current = renderer;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(2.0, 2.0, 2.0);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fillLight.position.set(-2.0, 1.0, 1.5);
    scene.add(fillLight);

    // --- Texture Loading ---
    const loader = new THREE.TextureLoader();
    const REPEAT = 1.6;
    const TEXTURE_PATH = '/textures/chainmail/';

    const setupRepeat = (tex) => {
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(REPEAT, REPEAT);
      tex.anisotropy = 4;
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    };

    let texturesLoaded = 0;
    const TOTAL_TEXTURES = 4;
    let material = null;
    let mesh = null;

    const onTextureLoad = () => {
      texturesLoaded++;
      if (texturesLoaded === TOTAL_TEXTURES && isVisibleRef.current) {
        startAnimation();
      }
    };

    // Load textures
    const colorMap = setupRepeat(
      loader.load(`${TEXTURE_PATH}Chainmail004_2K-JPG_Color.jpg`, onTextureLoad)
    );
    colorMap.colorSpace = THREE.SRGBColorSpace;

    const roughnessMap = setupRepeat(
      loader.load(`${TEXTURE_PATH}Chainmail004_2K-JPG_Roughness.jpg`, onTextureLoad)
    );
    const metalnessMap = setupRepeat(
      loader.load(`${TEXTURE_PATH}Chainmail004_2K-JPG_Metalness.jpg`, onTextureLoad)
    );
    const normalMap = setupRepeat(
      loader.load(`${TEXTURE_PATH}Chainmail004_2K-JPG_NormalGL.jpg`, onTextureLoad)
    );

    // --- Geometry & Material ---
    const geometry = new THREE.PlaneGeometry(4.8, 2.8, 48, 32);

    material = new THREE.MeshStandardMaterial({
      map: colorMap,
      roughnessMap,
      metalnessMap,
      normalMap,
      metalness: 0.95,
      roughness: 0.5,
    });

    // --- GPU Wave Shader ---
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0.0 };

      shader.vertexShader =
        `uniform float uTime;\n` + shader.vertexShader;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
        #include <begin_vertex>
        
        float wave = sin(position.x * 1.4 + uTime * 0.7) * 0.05
                   + sin(position.y * 0.9 + uTime * 0.9) * 0.035
                   + sin((position.x + position.y) * 0.6 + uTime * 0.4) * 0.025;
        transformed.z += wave;
        `
      );

      material.userData.shader = shader;
    };

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Resize Handler ---
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!renderer) return;
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }, 150);
    };

    // Initial size
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    const animate = (timestamp) => {
      if (!isVisibleRef.current) return;
      
      animationIdRef.current = requestAnimationFrame(animate);

      const t = timestamp * 0.001;

      if (material?.userData?.shader) {
        material.userData.shader.uniforms.uTime.value = t;
      }

      if (mesh) {
        mesh.rotation.z = Math.sin(t * 0.08) * 0.02;
        mesh.rotation.x = Math.sin(t * 0.06) * 0.03;
      }

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (animationIdRef.current) return;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };

    // --- Visibility Change (pause when tab hidden) ---
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      if (document.hidden) {
        stopAnimation();
      } else if (texturesLoaded === TOTAL_TEXTURES) {
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Fallback start if textures take too long
    const fallbackTimeout = setTimeout(() => {
      if (texturesLoaded < TOTAL_TEXTURES && isVisibleRef.current) {
        startAnimation();
      }
    }, 2000);

    // --- Cleanup ---
    return () => {
      stopAnimation();
      clearTimeout(fallbackTimeout);
      clearTimeout(resizeTimeout);
      
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Dispose Three.js resources
      geometry?.dispose();
      material?.dispose();
      colorMap?.dispose();
      roughnessMap?.dispose();
      metalnessMap?.dispose();
      normalMap?.dispose();
      renderer?.dispose();
      
      rendererRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="chainmail-bg"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
};

export default ChainmailBackground;