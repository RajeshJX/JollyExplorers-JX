# How It's Wired – electricity simulators

index.html                       Hub page with tabs (the page you link to)
simulators/circuit.html          Simulator 1: simple circuit
simulators/series-parallel.html  Simulator 2: series vs parallel

simulators/fuse-overload.html    Simulator 3: fuse and overload
simulators/staircase-switch.html Simulator 4: two-way (staircase) switches
simulators/solar-power.html      Simulator 5: solar panel, battery and lamp
simulators/electric-motor.html   Simulator 6: electric motor
simulators/electromagnet.html    Simulator 7: electromagnet
simulators/transformer.html      Simulator 8: transformer
simulators/static-electricity.html Simulator 9: static electricity

Each simulator is a standalone file. Edit or replace any one without touching the others.

## Put it on your website
1. Upload the whole folder to your host (same structure).
2. Link to it: https://yoursite.com/how-its-wired/
   Or open one simulator directly: .../simulators/circuit.html
3. Or embed it inside an existing page:

<iframe src="https://yoursite.com/how-its-wired/" style="width:100%;height:760px;border:0" allow="fullscreen" title="Electricity simulators"></iframe>

## Add a new simulator
1. Save the new file in /simulators (copy an existing one as a starting point).
2. Add one line to the SIMS list near the bottom of index.html.

Needs internet for the 3D library (three.js from cdnjs). Everything else is local.
