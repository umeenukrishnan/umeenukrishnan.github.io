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
                Phase-field models represent cracks as a smooth, continuous damage field. My work focused on developing computationally efficient algorithms for large-scale fracture simulations — introducing adaptive mesh refinement guided by an energy based error indicator, and automatic time-stepping to capture rapid crack propagation accurately. The framework is implemented in FEniCS with MPI parallelism and applied to brittle, cohesive, and thermo-mechanical fracture problems.
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
                Functionally graded materials have spatially varying properties — for example, transitioning from ceramic to metal across a component — making them ideal for high-temperature and structural applications, but challenging to model for fracture. I extended the phase-field cohesive zone framework to FGMs, where material parameters vary continuously as a function of spatial coordinates. The adaptive implementation captures complex crack paths and mixed-mode failure with adaptive meshing, offering a robust tool for fracture design in graded structures.
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
                Topology optimization finds the optimal distribution of material within a design domain to maximize structural performance under given constraints. My work scaled this to large 3D problems using FEniCS and MPI-based parallel computing. The resulting geometries are fabricated using 3D printing, bridging computational design with physical manufacturing.
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
                Auxetic materials exhibit a negative Poisson's ratio — they expand laterally when stretched — a counter-intuitive behaviour that leads to enhanced indentation resistance, energy absorption, and acoustic damping. Using topology optimization, I designed microstructures using FGMs that achieve auxetic responses through tailored geometry rather than intrinsic material properties and the designs were validated through 3D-printed physical samples.
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
                Evolutionary Deep Neural Networks (EDNN) are a mesh-free, physics-informed approach that evolves the solution of PDEs in time by training a neural network to satisfy the governing equations and boundary conditions. My current research at Johns Hopkins applies EDNN to coupled physics problems in solid mechanics — working toward efficient solvers that generalise across geometries and loading conditions without requiring labeled simulation data.
              </p>
            </div>
          </details>

        </div>
      </div>
    </section>
  </div>
</div>
