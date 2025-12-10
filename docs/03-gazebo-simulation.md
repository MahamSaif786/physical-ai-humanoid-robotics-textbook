---
id: 03-gazebo-simulation
title: Gazebo Simulation
---

# Module 2: Gazebo – The Digital Twin

Gazebo is a 3D simulation platform used to test robots safely before deploying them in the real world.

It provides:
- Physics simulation  
- Sensors  
- Lights and textures  
- Robot movement  
- Collision detection  

This helps students practice robotics without needing expensive hardware.

---

## Why Use Gazebo?

Simulation allows:

- Safe testing  
- No hardware damage  
- Faster iteration  
- Repeatable experiments  

For example:
- If a humanoid robot falls in the real world, it can break.  
- In Gazebo, you can test balance control again and again without risk.

---

## URDF – Robot Description File

URDF (Unified Robot Description Format) describes:

- Robot parts  
- Joint connections  
- Link masses  
- Visual appearance  
- Physical behavior  

A simple link in URDF looks like this:

```xml
<link name="base_link">
  <visual>
    <geometry>
      <box size="0.5 0.5 0.2" />
    </geometry>
  </visual>
  <inertial>
    <mass value="5.0"/>
  </inertial>
</link>