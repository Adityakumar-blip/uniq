import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water2"; // Import Water2 from examples
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const WaterEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    scene.add(light);

    // Water Geometry
    const waterGeometry = new THREE.PlaneGeometry(100, 100);
    const water = new Water(waterGeometry, {
      color: "#00aaff",
      scale: 4,
      flowDirection: new THREE.Vector2(1, 1),
      textureWidth: 1024,
      textureHeight: 1024,
    });

    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    camera.position.set(0, 10, 15);
    controls.update();

    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   water.material.uniforms["time"].value += 1.0 / 60.0;
    //   controls.update();
    //   renderer.render(scene, camera);
    // };

    // animate();

    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (water.material.uniforms["flowDirection"]) {
        water.material.uniforms["flowDirection"].value = new THREE.Vector2(
          mouseX,
          mouseY
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default WaterEffect;
