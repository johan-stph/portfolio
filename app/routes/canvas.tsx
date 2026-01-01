import { useEffect, useRef } from 'react';

// centered around 0, 0
function generate_cube() {
  return {
    points: [
      // Top face (y = 1)
      { x: 1, y: 1, z: 1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: 1 },
      { x: -1, y: 1, z: -1 },
      // Bottom face (y = -1)
      { x: 1, y: -1, z: 1 },
      { x: 1, y: -1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: -1, y: -1, z: -1 },
    ],
    edges: [
      // Top face edges
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      // Bottom face edges
      [4, 5],
      [4, 6],
      [5, 7],
      [6, 7],
      // Vertical edges connecting top and bottom
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ],
  };
}

function make_two_dimensional({
  x,
  y,
  z,
}: {
  x: number;
  y: number;
  z: number;
}) {
  return {
    x: x / z,
    y: y / z,
  };
}

function from_center_to_0_0_based(
  { x, y }: { x: number; y: number },
  width: number,
  height: number
) {
  //0,0 -> width/2, height/2
  return {
    x: ((x + 1) / 2) * width,
    y: ((y + 1) / 2) * height,
  };
}

function rotate_x(
  { x, y, z }: { x: number; y: number; z: number },
  angle: number
) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x,
    y: y * cos - z * sin,
    z: y * sin + z * cos,
  };
}

function rotate_y(
  { x, y, z }: { x: number; y: number; z: number },
  angle: number
) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x * cos + z * sin,
    y: y,
    z: -x * sin + z * cos,
  };
}

function rotate_z(
  { x, y, z }: { x: number; y: number; z: number },
  angle: number
) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x * cos - y * sin,
    y: x * sin + y * cos,
    z: z,
  };
}

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    let zOffset = 3;
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;

    function animate() {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Generate cube points with z offset
      const cube = generate_cube();

      // Transform all points
      const transformedPoints = cube.points.map((point) => {
        // Rotate in 3D space before projection
        let rotated = rotate_x(point, rotationX);
        rotated = rotate_y(rotated, rotationY);
        rotated = rotate_z(rotated, rotationZ);

        const projected = make_two_dimensional({
          x: rotated.x,
          y: rotated.y,
          z: rotated.z + zOffset,
        });

        return from_center_to_0_0_based(projected, canvas.width, canvas.height);
      });

      // Draw edges
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      cube.edges.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(transformedPoints[start].x, transformedPoints[start].y);
        ctx.lineTo(transformedPoints[end].x, transformedPoints[end].y);
        ctx.stroke();
      });

      // Draw points
      ctx.fillStyle = 'black';
      transformedPoints.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Increase z coordinate and rotations
      zOffset += 0.01;
      rotationX += 0.01;
      rotationY += 0.015;
      rotationZ += 0.005;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} style={{ backgroundColor: '#f0f0f0' }}></canvas>
  );
}
