---
layout: post
title: "How to use XDMF file to save multiple solutions in the same mesh "
categories: FEniCS
tag: 
  - FEniCS
---



In our workflow ,  we use FEniCS  for solving differential equations. To visualise the results we save the output variables into a XDMF file. And the XDMF file is visualised in the Paraview. 

Use this command to create the xdmf file.

```python
xdmf = XDMFFile("output/" +  "output" + ".xdmf")
```

When we have more than one variable to save in the same pdf file, we need to share the mesh for multiple variables and reduce the size of the file, so that it can be easily visualised in Paraview. 

```python
xdmf.parameters["functions_share_mesh"] = True/False
# Default is false, it controls whether all functions on a single time step share the same mesh. If true the files created will be smaller and also behave better in Paraview, at least in version 5.3.0.
xdmf.parameters["rewrite_function_mesh"] = True/False
# Default settings is true, i.e, it controls whether the mesh will be rewritten every time step. If the mesh does not change this can be turned off to create smaller files. 
xdmf.parameters["flush_output"] = True/False
# Default is false, it controls the file size. You should use True, so as to reduce the size of the file. 
```

Then use the following command to write the data in the file:

```python
xdmf.write(pnew, disp_current)
xdmf.write(unew, disp_current)
```



Reference : " https://bitbucket.org/fenics-project/dolfin/src/2018.1.0/dolfin/io/XDMFFile.h"
