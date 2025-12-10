---
id: 02-ros2-basics
title: ROS 2 Basics
---



# Module 1: ROS 2 – The Robotic Nervous System

ROS 2 (Robot Operating System 2) is the "nervous system" of a robot.  
It connects all parts of a robot together:

- Sensors (camera, LiDAR, IMU)
- Controllers (motors, joints)
- AI modules (planning, perception)
- Interfaces (voice, apps)

## Key ROS 2 Concepts

### 1. Nodes
A *node* is a small program that performs one task.

Examples:
- One node reads camera images
- One node controls the robot’s legs
- One node listens for voice commands

In Python, ROS 2 nodes are usually written using the rclpy library.

### 2. Topics
Nodes send and receive data using *topics*.

- A topic is like a "channel"
- A node can *publish* data on a topic
- Another node can *subscribe* to that topic

Example:
- /camera/image_raw → topic for camera images  
- /cmd_vel → topic for robot movement (velocity commands)

### 3. Messages
The actual data sent over topics is called a *message*.

Examples:
- sensor_msgs/msg/Image → camera image  
- geometry_msgs/msg/Twist → velocity command  

### 4. Services
Sometimes a node needs to *ask a question and wait for an answer*.

Example:
- "Please give me current battery level"
- "Please reset the robot pose"

For this, ROS 2 uses *services* (request + response).

### 5. Actions
Some tasks take *time* (like "walk to that door").  
Actions allow:

- Send goal  
- Get feedback  
- Receive result  

Example action:
- NavigateToPose → used for navigation

---

## Writing a Simple ROS 2 Python Node (Concept)

A basic ROS 2 Python node looks like this:

```python
import rclpy
from rclpy.node import Node

class MinimalNode(Node):
    def _init_(self):
        super()._init_("minimal_node")
        self.get_logger().info("Node has been started")

def main():
    rclpy.init()
    node = MinimalNode()
    rclpy.spin(node)
    rclpy.shutdown()

if _name_ == "_main_":
    main()