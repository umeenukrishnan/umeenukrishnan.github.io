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

        <!-- ═══ Dr. B. R. Ambedkar Institute of Technology ═══ -->
        <details class="era" id="era-btech">
          <summary class="era-head">
            {% assign era_photo = site.static_files | where_exp: "f", "f.path contains '/assets/images/campus_dbrait.'" | first %}
            {% if era_photo %}
            <div class="era-photo">
              <img src="{{ era_photo.path | relative_url }}" alt="Dr. B. R. Ambedkar Institute of Technology" loading="lazy" />
            </div>
            {% endif %}
            <div class="era-meta">
              <span class="era-degree">B.Tech &middot; Civil Engineering</span>
              <h3 class="era-inst">Dr. B. R. Ambedkar Institute of Technology</h3>
              <span class="era-where">Port Blair, Andaman &amp; Nicobar Islands &middot; 2011&ndash;2015</span>
            </div>
            <span class="era-more">
              <span class="era-cta">
                <span class="era-cta-in">Explore the project</span>
                <span class="era-cta-out">Hide</span>
              </span>
              <i class="fa-solid fa-chevron-down era-chevron"></i>
            </span>
          </summary>
          <div class="project-list">
          <!-- B.Tech Project -->
          <details id="condition-assessment" class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Condition Assessment of an RC Building using NDT</div>
                <div class="pi-tags-inline">
                  <span>B.Tech Project</span><span>Non-Destructive Testing</span><span>Rebound Hammer</span><span>UPV</span><span>STAAD.Pro</span><span>Retrofitting</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                My undergraduate project was a full field condition assessment of a G+2 residential RC building at Brichgunj Military Station, built in 1991 and no longer serviceable — with no structural drawings and no record of the as-built material properties. We began with a visual condition survey, colour-coding every column and beam on all three floors for corrosion, cracking and spalling of cover, which showed corrosion concentrated in the exposed external columns where stirrups were in places completely lost. In-situ material properties were then recovered non-destructively: rebound hammer readings and ultrasonic pulse velocity at 101 member locations, combined to estimate compressive strengths ranging from roughly 8 to 23 N/mm². Those measured strengths — rather than assumed design values — were fed into a linear analysis in STAAD.Pro, and member demand was checked against capacity per IS 456:2000 for every beam and column. The exercise identified the specific members failing in flexure and led to a recommended repair scheme, including an RCC jacketing procedure for the distressed columns and beams.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/btech_condition_assessment.jpg' | relative_url }}" alt="The assessed G+2 residential building at Brichgunj Military Station" loading="lazy" />
                <p class="pi-caption">The assessed building — a G+2 residential block at Brichgunj Military Station, built in 1991.</p>
              </div>
              <div class="pi-media pi-media-2">
                <figure>
                  <img src="{{ '/assets/images/btech_ndt_instruments.jpg' | relative_url }}" alt="Rebound hammer and ultrasonic pulse velocity instruments used on site" loading="lazy" />
                  <figcaption class="pi-caption">The field kit: Schmidt rebound hammer and the ultrasonic pulse velocity tester.</figcaption>
                </figure>
                <figure>
                  <img src="{{ '/assets/images/btech_calibration.png' | relative_url }}" alt="Calibration curves relating compressive strength to rebound number and to UPV" loading="lazy" />
                  <figcaption class="pi-caption">Calibration curves built from cube tests, used to convert the field readings into in-situ compressive strength.</figcaption>
                </figure>
                <figure>
                  <img src="{{ '/assets/images/btech_member_plan.png' | relative_url }}" alt="Ground floor plan with every beam and column numbered" loading="lazy" />
                  <figcaption class="pi-caption">Every beam and column was numbered floor by floor so survey observations, NDT readings and analysis results could be tied to one member.</figcaption>
                </figure>
                <figure>
                  <img src="{{ '/assets/images/btech_failed_members.png' | relative_url }}" alt="STAAD.Pro model highlighting beams and columns whose demand exceeds capacity" loading="lazy" />
                  <figcaption class="pi-caption">The outcome: members whose demand exceeds capacity, marked in red on the STAAD.Pro model.</figcaption>
                </figure>
              </div>
            </div>
          </details>

          </div>
        </details>

        <!-- ═══ TKM College of Engineering ═══ -->
        <details class="era" id="era-mtech">
          <summary class="era-head">
            {% assign era_photo = site.static_files | where_exp: "f", "f.path contains '/assets/images/campus_tkmce.'" | first %}
            {% if era_photo %}
            <div class="era-photo">
              <img src="{{ era_photo.path | relative_url }}" alt="TKM College of Engineering" loading="lazy" />
            </div>
            {% endif %}
            <div class="era-meta">
              <span class="era-degree">M.Tech &middot; Structural Engineering &amp; Construction Management</span>
              <h3 class="era-inst">TKM College of Engineering</h3>
              <span class="era-where">Kollam, Kerala &middot; 2016&ndash;2018</span>
            </div>
            <span class="era-more">
              <span class="era-cta">
                <span class="era-cta-in">Explore the project</span>
                <span class="era-cta-out">Hide</span>
              </span>
              <i class="fa-solid fa-chevron-down era-chevron"></i>
            </span>
          </summary>
          <div class="project-list">
          <!-- M.Tech Thesis -->
          <details id="seismic-irregularity" class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Seismic Response of Vertically Irregular Buildings</div>
                <div class="pi-tags-inline">
                  <span>M.Tech Thesis</span><span>SAP2000</span><span>Response Spectrum</span><span>IS 1893</span><span>Earthquake Engineering</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                My M.Tech thesis at TKM College of Engineering (APJ Abdul Kalam Technological University, 2018), supervised by Dr. Sajeeb R., asked how much vertical geometric irregularity actually changes the seismic demand on a building. Stepped frames and buildings on sloping ground are common in modern urban construction, but IS 1893 only prescribes limits on irregularity — it says little about how the design forces should change once those limits are crossed. I modelled 16 stepped frames and 16 sloping-ground frames in SAP2000 alongside their regular counterparts, and compared fundamental time period, modal participation, base shear and overturning moment across the set. From that comparison I proposed an <em>Irregularity Index</em> — built on overturning moment, which showed the lowest RMS error against the time-period ratio — to grade how irregular a frame really is, and a <em>magnification factor</em> expressed as a function of the number of storeys that corrects the code-based seismic force. The IS code method was found to consistently underestimate both the fundamental period and the seismic demand of irregular frames; the magnified estimate agreed with the full finite-element response to within about 3–17% across the four demonstration frames.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/mtech_stepped_frames.png' | relative_url }}" alt="Stepped building frame modelled in SAP2000 — 3D view and elevation" loading="lazy" />
                <p class="pi-caption">Stepped frame (5 bays, 12 storeys) modelled in SAP2000 — 3D view and elevation.</p>
              </div>
              <div class="pi-media pi-media-2">
                <figure>
                  <img src="{{ '/assets/images/mtech_sloping_model.png' | relative_url }}" alt="Building frame on sloping ground modelled in SAP2000" loading="lazy" />
                  <figcaption class="pi-caption">The second irregularity type: a frame founded on sloping ground.</figcaption>
                </figure>
                <figure>
                  <img src="{{ '/assets/images/mtech_timeperiod.png' | relative_url }}" alt="Fundamental time period from FE modal analysis versus the IS code formula" loading="lazy" />
                  <figcaption class="pi-caption">The IS code formula underestimates the fundamental period badly, and the gap widens with height.</figcaption>
                </figure>
                <figure>
                  <img src="{{ '/assets/images/mtech_otm_ratio.png' | relative_url }}" alt="Overturning moment ratio versus number of storeys for sloping-ground and stepped frames" loading="lazy" />
                  <figcaption class="pi-caption">Overturning-moment ratio against storey count for every bay configuration; the dashed average is what the magnification factor fits — MF = 0.27n + 2.462 for sloping ground, MF = 1.187n − 3.183 for stepped frames.</figcaption>
                </figure>
              </div>
              <div class="pi-papers">
                <h4>Publications</h4>
                <ul>
                  <li>U. M. Krishnan and R. Sajeeb. Performance assessment of irregular buildings under earthquake excitation — a state of the art review. <em>International Conference on Advances in Construction Materials and Structures (ACMS-2018), IIT Roorkee</em>, 2018.</li>
                </ul>
              </div>
            </div>
          </details>

          </div>
        </details>

        <!-- ═══ Indian Institute of Technology Roorkee ═══ -->
        <details class="era" id="era-phd">
          <summary class="era-head">
            {% assign era_photo = site.static_files | where_exp: "f", "f.path contains '/assets/images/campus_iitr.'" | first %}
            {% if era_photo %}
            <div class="era-photo">
              <img src="{{ era_photo.path | relative_url }}" alt="Indian Institute of Technology Roorkee" loading="lazy" />
            </div>
            {% endif %}
            <div class="era-meta">
              <span class="era-degree">Ph.D. &middot; Civil Engineering (Computational Mechanics)</span>
              <h3 class="era-inst">Indian Institute of Technology Roorkee</h3>
              <span class="era-where">Roorkee, Uttarakhand &middot; 2019&ndash;2024</span>
            </div>
            <span class="era-more">
              <span class="era-cta">
                <span class="era-cta-in">Explore all 4 projects</span>
                <span class="era-cta-out">Hide</span>
              </span>
              <i class="fa-solid fa-chevron-down era-chevron"></i>
            </span>
          </summary>
          <div class="project-list">
          <!-- Phase Field Fracture -->
          <details id="phase-field-fracture" class="project-item">
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
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                Phase-field models represent cracks as a smooth, continuous damage field. My work focused on developing computationally efficient algorithms for large-scale fracture simulations — introducing adaptive mesh refinement guided by an energy based error indicator, and automatic time-stepping to capture rapid crack propagation accurately. The framework is implemented in FEniCS with MPI parallelism and applied to brittle, cohesive, and thermo-mechanical fracture problems.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
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
          <details id="fgm-fracture" class="project-item">
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
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                Functionally graded materials have spatially varying properties — for example, transitioning from ceramic to metal across a component — making them ideal for high-temperature and structural applications, but challenging to model for fracture. I extended the phase-field cohesive zone framework to FGMs, where material parameters vary continuously as a function of spatial coordinates. The adaptive implementation captures complex crack paths and mixed-mode failure with adaptive meshing, offering a robust tool for fracture design in graded structures.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
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
          <details id="topology-optimization" class="project-item">
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
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                Topology optimization finds the optimal distribution of material within a design domain to maximize structural performance under given constraints. My work scaled this to large 3D problems using FEniCS and MPI-based parallel computing. The resulting geometries are fabricated using 3D printing, bridging computational design with physical manufacturing.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/topology.png' | relative_url }}" alt="Topology Optimization" loading="lazy" />
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
          <details id="auxetic-metamaterials" class="project-item">
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
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                Auxetic materials exhibit a negative Poisson's ratio — they expand laterally when stretched — a counter-intuitive behaviour that leads to enhanced indentation resistance, energy absorption, and acoustic damping. Using topology optimization, I designed microstructures using FGMs that achieve auxetic responses through tailored geometry rather than intrinsic material properties and the designs were validated through 3D-printed physical samples.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
              <div class="pi-media-full">
                <img src="{{ '/assets/gif/auxetic_fgm.gif' | relative_url }}" alt="Auxetic Metamaterial" loading="lazy" />
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

          </div>
        </details>

        <!-- ═══ Johns Hopkins University ═══ -->
        <details class="era" id="era-postdoc">
          <summary class="era-head">
            {% assign era_photo = site.static_files | where_exp: "f", "f.path contains '/assets/images/campus_jhu.'" | first %}
            {% if era_photo %}
            <div class="era-photo">
              <img src="{{ era_photo.path | relative_url }}" alt="Johns Hopkins University" loading="lazy" />
            </div>
            {% endif %}
            <div class="era-meta">
              <span class="era-degree">Postdoctoral Research Fellow</span>
              <h3 class="era-inst">Johns Hopkins University</h3>
              <span class="era-where">Baltimore, Maryland, USA &middot; 2025&ndash;present</span>
            </div>
            <span class="era-more">
              <span class="era-cta">
                <span class="era-cta-in">Explore both projects</span>
                <span class="era-cta-out">Hide</span>
              </span>
              <i class="fa-solid fa-chevron-down era-chevron"></i>
            </span>
          </summary>
          <div class="project-list">
          <!-- EDNN -->
          <details id="ednn" class="project-item">
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
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                Evolutionary Deep Neural Networks (EDNN) are a mesh-free, physics-informed approach that evolves the solution of PDEs in time by training a neural network to satisfy the governing equations and boundary conditions. My current research at Johns Hopkins applies EDNN to coupled physics problems in solid mechanics — working toward efficient solvers that generalise across geometries and loading conditions without requiring labeled simulation data.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
            </div>
          </details>

          <!-- Fracture-Bench -->
          <details id="fracture-bench" class="project-item">
            <summary>
              <div class="pi-meta">
                <div class="pi-title">Fracture-Bench: Benchmarking Neural-Operator Surrogates</div>
                <div class="pi-tags-inline">
                  <span>Neural Operators</span><span>FNO</span><span>DeepONet</span><span>Diffusion Models</span><span>Benchmark Datasets</span><span>Scientific ML</span>
                </div>
              </div>
              <i class="fa-solid fa-chevron-down pi-chevron"></i>
            </summary>
            <div class="pi-body">
              <div class="pi-desc-wrap">
              <p class="pi-desc">
                Machine-learning surrogates for fracture are usually reported on the authors' own data, with their own
                preprocessing and their own training budget — which makes it almost impossible to tell whether one
                architecture is genuinely better than another. <em>Fracture-Bench</em>, my ongoing work at Johns Hopkins,
                is an attempt to fix that. It evaluates five CNN- and neural-operator-based surrogates — UNet, FNO,
                DeepONet, Latent DeepONet, and a conditional denoising diffusion model — for phase-field fracture under
                <em>identical</em> preprocessing, loss functions, and training budgets, across two high-fidelity datasets
                that differ in formulation, material heterogeneity, and prediction task. Beyond raw accuracy it measures
                computational cost and, more tellingly, generalisation: how each model holds up on withheld load steps and
                on parameter configurations it never saw during training. The datasets, evaluation protocols, and model
                code are all released openly, so the comparison can be reproduced and extended rather than taken on trust.
              </p>
              <p class="pi-desc">
                Producing that comparison meant first producing the ground truth. Both benchmark datasets below were
                generated with adaptive phase-field simulations and published through the Johns Hopkins Research Data
                Repository, with documented preprocessing and evaluation splits so other groups can train against exactly
                the same data.
              </p>
              </div>
              <button class="pi-more" type="button" aria-expanded="false" hidden><span class="pi-more-label">More</span> <i class="fa-solid fa-chevron-down"></i></button>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/fracbench_dynamic_branching.png' | relative_url }}" alt="Crack paths at four traction magnitudes, from a single straight crack to repeated branching" loading="lazy" />
                <p class="pi-caption">Dynamic dataset — raising the applied traction takes the same notched plate from steady propagation (σ* = 1.0) through to repeated branching and coalescence (σ* = 3.0). Left: initial notch. Right: final damage field.</p>
              </div>
              <div class="pi-media-full">
                <img src="{{ '/assets/images/fracbench_fgm_fields.png' | relative_url }}" alt="Displacement, initial and final phase field, and the graded material property field for one FGM realisation" loading="lazy" />
                <p class="pi-caption">FGM dataset — each realisation stores the displacement field, the initial and final phase-field damage, and the underlying stiffness map. The crack visibly deflects around the stiff inclusion.</p>
              </div>
              <div class="pi-media pi-media-2">
                <figure>
                  <img src="{{ '/assets/images/fracbench_dynamic_setup.png' | relative_url }}" alt="Problem setup: 100 by 40 mm plate under step tensile traction, with sampled crack-tip positions" loading="lazy" />
                  <figcaption class="pi-caption">The setup that generates the variation: a 100 &times; 40 mm plate under a step tensile traction, with the initial notch tip sampled across the domain in both directions.</figcaption>
                </figure>
                <figure>
                  <img src="{{ '/assets/images/fracbench_fgm_crack.gif' | relative_url }}" alt="Animation of a crack propagating through a functionally graded plate" loading="lazy" />
                  <figcaption class="pi-caption">A crack advancing through the graded plate over the 31 load steps — the trajectory a surrogate has to reproduce.</figcaption>
                </figure>
              </div>
              <div class="pi-papers">
                <h4>Open Datasets</h4>
                <ul>
                  <li>
                    <a href="https://doi.org/10.7281/T1IDANWZ" target="_blank" rel="noopener">U. M. Krishnan, C. Vasudev, and S. Goswami. A phase-field dataset for dynamic brittle fracture under varying crack configurations and loading. <em>Johns Hopkins Research Data Repository</em>, 2026. doi:10.7281/T1IDANWZ</a>
                    — 2,000 realisations on a 100 &times; 40 mm notched plate under impulsive tensile loading at four
                    intensities, spanning steady propagation through to unstable branching and coalescence.
                  </li>
                  <li>
                    <a href="https://doi.org/10.7281/T1RZFI3I" target="_blank" rel="noopener">M. Hakimzadeh, U. M. Krishnan, L. Graham-Brady, and S. Goswami. Crack paths in functionally graded plates: a phase-field simulation dataset. <em>Johns Hopkins Research Data Repository</em>, 2025. doi:10.7281/T1RZFI3I</a>
                    — 4,000 Mode-I realisations across four hard/soft inclusion configurations, interpolated to a uniform
                    128 &times; 256 grid with predefined train/test splits.
                  </li>
                </ul>
                <h4>Code</h4>
                <ul>
                  <li><a href="https://github.com/Centrum-IntelliPhysics/benchmark_data_phase_field_dynamic_fracture" target="_blank" rel="noopener">Generation and preprocessing code — dynamic phase-field fracture dataset</a></li>
                  <li><a href="https://github.com/Centrum-IntelliPhysics/Benchmark_Data_Phase_field_fracture_in_fgm" target="_blank" rel="noopener">Generation and preprocessing code — functionally graded material fracture dataset</a></li>
                </ul>
              </div>
            </div>
          </details>

          </div>
        </details>

      </div>
    </section>
  </div>
</div>

<script>
  (function () {
    function openTarget() {
      var h = window.location.hash;
      if (!h) return;
      var el = document.querySelector(h);
      if (!el) return;
      for (var n = el; n; n = n.parentElement) {
        if (n.tagName === 'DETAILS') n.open = true;
      }
      el.scrollIntoView({ block: 'start' });
    }
    window.addEventListener('DOMContentLoaded', openTarget);
    window.addEventListener('hashchange', openTarget);
  })();
</script>

<script>
  (function () {
    var CLAMP = 'is-clamped';

    // Clamp only when the text actually overflows, and only once it is visible.
    function sync(body) {
      var wrap = body.querySelector('.pi-desc-wrap');
      var btn  = body.querySelector('.pi-more');
      if (!wrap || !btn) return;
      if (btn.dataset.open === 'true') return;      // reader expanded it; leave alone

      body.classList.add(CLAMP);
      if (!wrap.clientHeight) return;               // still hidden, measure later
      if (wrap.scrollHeight <= wrap.clientHeight + 4) {
        body.classList.remove(CLAMP);
        btn.hidden = true;
      } else {
        btn.hidden = false;
      }
    }

    function syncAll(root) {
      (root || document).querySelectorAll('.pi-body').forEach(sync);
    }

    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.pi-more');
      if (!btn) return;
      var body = btn.closest('.pi-body');
      var clamped = body.classList.toggle(CLAMP);
      btn.dataset.open = clamped ? 'false' : 'true';
      btn.setAttribute('aria-expanded', clamped ? 'false' : 'true');
      btn.querySelector('.pi-more-label').textContent = clamped ? 'More' : 'Less';
    });

    // Heights can only be measured once every ancestor <details> is open.
    // 'toggle' does not bubble, so listen in the capture phase.
    document.addEventListener('toggle', function (e) {
      if (e.target.tagName === 'DETAILS' && e.target.open) syncAll(e.target);
    }, true);

    window.addEventListener('DOMContentLoaded', function () { syncAll(); });
    window.addEventListener('resize', function () { syncAll(); });
  })();
</script>
