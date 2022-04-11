---
layout: post
title: "How to embed a external point in a geometry using Gmsh"
categories: Gmsh
tag: 
  - Gmsh
---

We use Gmsh as a tool for  mesh generation. In this post I will explain simple steps which you can adopt to model and mesh. The main focus of this post is to show how we can embed a point in a surface of geometry. 

Steps:

* Initial steps are same as explained in the previous blog post. 
* As per this example initially we made the circles and then the points where we are aiming to apply force.
* Then created plane surfaces and Physical groups. 
* Next step is to embed the points in the respective surface. For this go to Modules --- Mesh --- Define --- Embedded --- Point --- Then select the point --- then select the respective surface in which that point is lieing --- Press q .
* Next step is for meshing. You can simply go to  Modules --- Mesh --- 1D --- 2D. 
* Last and final step is to save the mesh. 

The file generated here will be saved in .msh format, which you can further convert into xdmf with the help of "Meshio" and you are good to import this mesh file in FEniCS. 

Script is given below :

```python
//
l  = 1;
h0=1;

Circle(1) = {0, 0, 0, 1*l, 0, 2*Pi};
Circle(2) = {0, 0, 0, 1.2*l, 0, 2*Pi};
Circle(3) = {0, 0, 0, 2.3*l, 0, 2*Pi};
Circle(4) = {0, 0, 0, 2.5*l, 0, 2*Pi};

Point(5) = {2.5*l*Cos(72/180*Pi), 2.5*l*Sin(72/180*Pi)-0.001, 0, 1.0};
Point(7) = {2.5*l*Cos(72*2/180*Pi), 2.5*l*Sin(72*2/180*Pi)-0.001, 0, 1.0};
Point(8) = {2.5*l*Cos(72*3/180*Pi)+0.001, 2.5*l*Sin(72*3/180*Pi), 0, 1.0};
Point(9) = {2.5*l*Cos(72*4/180*Pi), 2.5*l*Sin(72*4/180*Pi)+0.001, 0, 1.0};

Curve Loop(1) = {4};
Curve Loop(2) = {3};
Plane Surface(1) = {1, 2};
Curve Loop(3) = {3};
Curve Loop(4) = {2};
Plane Surface(2) = {3, 4};
Curve Loop(5) = {2};
Curve Loop(6) = {1};
Plane Surface(3) = {5, 6};

Physical Point("force_1") = {5};
Physical Point("force_2") = {13};
Physical Point("force_3") = {7};
Physical Point("force_4") = {8};
Physical Point("force_5") = {9};

Physical Surface("outer_ring") = {1};
Physical Surface("middle_ring") = {2};
Physical Surface("inner_ring") = {3};
Physical Curve("inner_support") = {1};

# Embedd part

Point{5} In Surface{1};
Point{7} In Surface{1};
Point{8} In Surface{1};
Point{9} In Surface{1};
```
