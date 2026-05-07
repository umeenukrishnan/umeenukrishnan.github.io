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

          <!-- Phase Field Fracture -->
          <details class="project-item" open>
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Phase Field Fracture</div>
                <div class="pi-tags-inline">
                  <span>FEniCS</span><span>PETSc</span><span>Python</span><span>HPC</span><span>Mesh Adaptivity</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">
                A continuous-field framework for simulating crack propagation in materials without explicit crack tracking algorithms. Enhanced with mesh adaptivity and automatic time-stepping for large-scale problems. Scales efficiently on HPC clusters using MPI-parallel FEniCS/PETSc. Applied to brittle, cohesive, and dynamic fracture problems.
              </p>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/pff.png' | relative_url }}" alt="Phase Field Fracture" loading="lazy" />
              </div>
              <div class="pi-papers">
                <h4>Publications</h4>
                <ul>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">A. Gupta, U. M. Krishnan, R. Chowdhury, and A. Chakrabarti. An auto-adaptive sub-stepping algorithm for phase-field modeling of brittle fracture. <em>Theoretical and Applied Fracture Mechanics</em>, 108, Aug. 2020. [IF 4.374]</a></li>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">U. M. Krishnan, A. Gupta, and R. Chowdhury. A new error-indicator for accurate and robust adaptive mesh refinement of phase-field models of brittle fracture. <em>Engineering Fracture Mechanics</em>, 2022. [IF 4.898]</a></li>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">A. Bijaya, A. Gupta, U. M. Krishnan, R. Chowdhury, and A. Chakrabarti. Adaptive phase-field method for thermo-mechanical fracture. <em>Journal of Engineering Mechanics, ASCE</em>, 2023.</a></li>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">A. Gupta, U. M. Krishnan, T. K. Mandal, R. Chowdhury, A. Chakrabarti, and V. P. Nguyen. An Adaptive Mesh Refinement Algorithm for Phase-Field Fracture Models: Application to Brittle, Cohesive, and Dynamic Fracture. <em>Comput. Methods Appl. Mech. Engrg.</em>, 2022. [IF 6.588]</a></li>
                </ul>
              </div>
            </div>
          </details>

          <!-- FGM Fracture -->
          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Fracture in Functionally Graded Materials</div>
                <div class="pi-tags-inline">
                  <span>FGM</span><span>Phase Field</span><span>Cohesive Zone</span><span>FEniCS</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">
                Extension of the phase-field framework to functionally graded materials (FGM), where material properties vary continuously through the domain. An adaptive phase-field cohesive zone model captures complex crack paths and mixed-mode fracture in graded microstructures without re-meshing.
              </p>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/fgm.png' | relative_url }}" alt="FGM Fracture" loading="lazy" />
              </div>
              <div class="pi-papers">
                <h4>Publications</h4>
                <ul>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">U. M. Krishnan, A. Gupta, A. Kumar, and R. Chowdhury. Fracture analysis in functionally graded materials using an adaptive phase-field cohesive zone model. <em>submitted</em>, 2023.</a></li>
                </ul>
              </div>
            </div>
          </details>

          <!-- Topology Optimization -->
          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Topology Optimization</div>
                <div class="pi-tags-inline">
                  <span>SIMP</span><span>Phase Field</span><span>3D Printing</span><span>MPI</span><span>FEniCS</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">
                Mathematical approach to find optimal material layouts under fracture constraints and manufacturing considerations. Targets lightweight, high-strength structures for aerospace and civil applications. Large-scale implementation in FEniCS with MPI parallelism, integrated with 3D printing for fabrication of complex geometries.
              </p>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/topology.png' | relative_url }}" alt="Topology Optimization" loading="lazy" />
              </div>
              <div class="pi-media" style="margin-top:0.75rem">
                <div>
                  <img src="{{ '/assets/gif/cover.gif' | relative_url }}" alt="Topology Optimization GIF" loading="lazy" />
                  <div class="pi-caption">Optimization convergence</div>
                </div>
                <div>
                  <img src="{{ '/assets/images/curve_fun.png' | relative_url }}" alt="Performance curves" loading="lazy" />
                  <div class="pi-caption">Performance curves</div>
                </div>
              </div>
              <div class="pi-papers">
                <h4>Publications</h4>
                <ul>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">U. M. Krishnan, A. Gupta, and R. Chowdhury. Large scale topology optimization in FEniCS. <em>Finite Element in Computational Software — FEniCS 2022</em>, 2022.</a></li>
                </ul>
              </div>
            </div>
          </details>

          <!-- Auxetic Metamaterials -->
          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Auxetic Metamaterials Design</div>
                <div class="pi-tags-inline">
                  <span>Topology Opt.</span><span>Homogenization</span><span>FGM</span><span>3D Printing</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">
                Design of auxetic microstructures — materials with negative Poisson's ratio — using stress-driven topology optimization. Extended to functionally graded metamaterials for tailored spatial property variation. Fabricated via 3D printing and validated experimentally for mechanical performance.
              </p>
              <div class="pi-media">
                <div>
                  <img src="{{ '/assets/gif/3.gif' | relative_url }}" alt="Auxetic 3D printed samples" loading="lazy" />
                  <div class="pi-caption">3D printed auxetic samples</div>
                </div>
                <div>
                  <img src="{{ '/assets/gif/aux_highlight.gif' | relative_url }}" alt="Auxetic simulation" loading="lazy" />
                  <div class="pi-caption">Auxetic deformation</div>
                </div>
              </div>
              <div class="pi-papers">
                <h4>Publications</h4>
                <ul>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">A. Gupta, U. M. Krishnan, A. Gupta, and R. Chowdhury. Stress-driven topology optimization-based design of auxetic microstructure. <em>6th NCMDAO, IIT Guwahati</em>, December 2023.</a></li>
                  <li><a href="https://scholar.google.com/citations?user=z8jq70oAAAAJ&hl=en" target="_blank" rel="noopener">U. M. Krishnan, A. Gupta, and R. Chowdhury. Topology optimization of metamaterials using functionally graded material. <em>6th NCMDAO, IIT Guwahati</em>, December 2023.</a></li>
                </ul>
              </div>
            </div>
          </details>

          <!-- EDNN -->
          <details class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Evolutionary Deep Neural Networks</div>
                <div class="pi-tags-inline">
                  <span>EDNN</span><span>PINN</span><span>Multi-physics</span><span>Scientific ML</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <p class="pi-desc">
                Using Evolutionary Deep Neural Networks (EDNN) to solve multi-physics problems in solid mechanics — coupled fracture, heat conduction, and wave propagation. Bridges physics-based modeling and machine learning to create efficient, generalizable solvers without labeled training data.
              </p>
            </div>
          </details>

          <!-- HPC -->
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
              <p class="pi-desc">
                Parallel algorithms for massive computational loads in structural simulation, deployed on distributed HPC clusters for aerospace, automotive, and civil infrastructure domains.
              </p>
              <div class="pi-media">
                <div>
                  <img src="{{ '/assets/images/mpi.png' | relative_url }}" alt="MPI parallel" loading="lazy" />
                  <div class="pi-caption">MPI parallel scaling</div>
                </div>
                <div>
                  <img src="{{ '/assets/images/meshx.png' | relative_url }}" alt="Mesh tool" loading="lazy" />
                  <div class="pi-caption">MeshX — mesh generation tool</div>
                </div>
              </div>
              <div class="pi-papers">
                <h4>Publications</h4>
                <ul>
                  <li><a href="https://doi.org/10.6084/M9.figshare.c.5487891" target="_blank" rel="noopener">U. M. Krishnan, A. Gupta, and R. Chowdhury. Working with complex meshes: The mesh processing pipeline. <em>FEniCS 2021</em>. doi: 10.6084/M9</a></li>
                </ul>
              </div>
            </div>
          </details>

        </div>
      </div>
    </section>
  </div>
</div>
