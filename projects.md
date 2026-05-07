---
layout: default
title: Projects
permalink: /projects/
---

<div class="page-grid">
  <aside class="sidebar">
    {% include sidebar-nav.html %}
  </aside>
  <div class="page-main">
    <section class="section-plain" id="projects">
      <div class="section-acc-header">
        <div class="sb-inner"><h2>Projects</h2></div>
      </div>
      <div class="section-body">
        <div class="project-list">

          <details class="project-item" open>
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Topology Optimization</div>
                <div class="pi-tags-inline">
                  <span>SIMP</span><span>Phase Field</span><span>3D Printing</span><span>MPI</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">Mathematical approach to find optimal material layouts under fracture constraints and manufacturing considerations. Targets lightweight, high-strength structures for aerospace and civil applications. Integrated with 3D printing for fabrication of complex geometries.</p>
              <div class="pi-media-full">
                <img src="{{ '/assets/gif/cover.gif' | relative_url }}" alt="Topology Optimization" loading="lazy" />
                <div class="pi-caption">Large Scale Topology Optimization — phase field coupled result</div>
              </div>
              <div class="pi-media" style="margin-top:0.75rem">
                <div>
                  <img src="{{ '/assets/gif/projects.gif' | relative_url }}" alt="Convergence" loading="lazy" />
                  <div class="pi-caption">Optimization convergence</div>
                </div>
                <div>
                  <img src="{{ '/assets/images/curve_fun.png' | relative_url }}" alt="Performance curves" loading="lazy" />
                  <div class="pi-caption">Performance curves</div>
                </div>
              </div>
            </div>
          </details>

          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Phase Field Fracture</div>
                <div class="pi-tags-inline">
                  <span>FEniCS</span><span>PETSc</span><span>Python</span><span>HPC</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">A continuous-field framework for simulating crack propagation in materials without explicit crack tracking algorithms. Enhanced with mesh adaptivity and automatic time-stepping for large-scale problems. Scales efficiently on HPC clusters using MPI-parallel FEniCS/PETSc.</p>
              <div class="pi-media">
                <div>
                  <img src="{{ '/assets/images/u_disp.png' | relative_url }}" alt="Displacement field" loading="lazy" />
                  <div class="pi-caption">Displacement field — fracture simulation</div>
                </div>
                <div>
                  <img src="{{ '/assets/images/image-20201122115600774.png' | relative_url }}" alt="Phase field" loading="lazy" />
                  <div class="pi-caption">Phase field crack pattern</div>
                </div>
              </div>
            </div>
          </details>

          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Evolutionary Deep Neural Networks</div>
                <div class="pi-tags-inline">
                  <span>EDNN</span><span>PINN</span><span>Multi-physics</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">Using Evolutionary Deep Neural Networks (EDNN) to solve multi-physics problems in solid mechanics — coupled fracture, heat conduction, and wave propagation. Bridges physics-based modeling and machine learning to create efficient, generalizable solvers without labeled training data.</p>
            </div>
          </details>

          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Metamaterials Design</div>
                <div class="pi-tags-inline">
                  <span>Homogenization</span><span>Topology Opt.</span><span>3D Printing</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">Engineering materials with tailored mechanical, acoustic, and photonic properties via topology optimization and additive manufacturing. Designed microstructures achieve extreme stiffness-to-weight ratios, wave-guiding behavior, and auxetic responses.</p>
            </div>
          </details>

          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Large-Scale HPC Simulations</div>
                <div class="pi-tags-inline">
                  <span>MPI</span><span>PETSc</span><span>Linux HPC</span><span>Scalability</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">Parallel algorithms for massive computational loads in structural simulation, deployed on distributed HPC clusters for aerospace, automotive, and civil infrastructure domains.</p>
              <div class="pi-media">
                <div>
                  <img src="{{ '/assets/images/meshx.png' | relative_url }}" alt="Mesh tool" loading="lazy" />
                  <div class="pi-caption">MeshX — mesh generation tool</div>
                </div>
              </div>
            </div>
          </details>

        </div>
      </div>
    </section>
  </div>
</div>
