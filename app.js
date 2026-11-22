(function(){
  const categories=[
    {name:'Build & Invent',icon:'🛠️',note:'Make something clever',color:'#fff0d3'},
    {name:'Robotics & Circuits',icon:'🤖',note:'Explore circuits, sensors & robots',color:'#ddf4ee'},
    {name:'Science Lab',icon:'🧪',note:'Try a little what if',color:'#eee5ff'},
    {name:'Nature & Earth',icon:'🌿',note:'Explore our planet',color:'#e5f3d9'},
    {name:'World Adventures',icon:'🧭',note:'Go somewhere new',color:'#dff1ff'},
    {name:'Everyday Skills',icon:'🏡',note:'Practice real-life smarts',color:'#ffe6df'},
    {name:'Puzzles & Brain Games',icon:'🧩',note:'Solve curious clues',color:'#fff0c9'},
    {name:'Art, Music & Stories',icon:'🎨',note:'Make it your own',color:'#ffe2ed'}
  ];
  const projects=[
    {id:'lighthouse',title:'Light the Lighthouse',category:'Robotics & Circuits',description:'Complete a circuit and help a little ship find its way.',age:'Ages 6–9',icon:'🗼',color:'#dff4ff',order:1},
    {id:'bridge',title:'Build a Bridge',category:'Build & Invent',description:'Add supports, test a load, and see what makes a bridge steady.',age:'Ages 7–10',icon:'🌉',color:'#e5f3d9',order:2},
    {id:'rover',title:'Rescue Rover',category:'Robotics & Circuits',description:'Give a rover clear steps to reach a friend on the grid.',age:'Ages 6–10',icon:'🛞',color:'#eee5ff',order:3},
    {id:'buzzer',title:'Build-a-Buzzer',category:'Robotics & Circuits',description:'Connect a switch and buzzer, then explore what makes the sound start and stop.',age:'Ages 8–12',icon:'🔔',color:'#fff0c9'},
    {id:'delivery-bot',title:'Robot Delivery Route',category:'Robotics & Circuits',description:'Plan a route, arrange commands, and help a robot deliver a package.',age:'Ages 9–13',icon:'📦',color:'#e6e2ff'},
    {id:'cloud',title:'Cloud Catcher',category:'Science Lab',description:'Change warmth and water in the air to help a cloud make rain.',age:'Ages 7–10',icon:'🌦️',color:'#dff1ff',order:5},
    {id:'garden',title:'Garden Market',category:'Everyday Skills',description:'Balance water and sunshine, grow a harvest, and count your market coins.',age:'Ages 7–11',icon:'🥕',color:'#ffe6df',order:6},
    {id:'world',title:'Map Mission',category:'World Adventures',description:'Guide an explorer across a map to reach a lookout safely.',age:'Ages 6–10',icon:'🧭',color:'#dff1ff',order:7},
    {id:'lab-engine',title:'Four-Stroke Engine',category:'Build & Invent',description:'Watch a piston go suck, squeeze, bang, blow.',age:'Ages 9–15',icon:'⚙️',color:'#fff0d3',order:13,href:'lab.html#engine'},
    {id:'lab-crank',title:'Crank & Slider',category:'Build & Invent',description:'Turn a crank and see spinning become back-and-forth motion.',age:'Ages 7–15',icon:'🔄',color:'#e5eaff',order:14,href:'lab.html#crank'},
    {id:'lab-lock',title:'Inside a Door Lock',category:'Build & Invent',description:'Slide in the key, line up the pins, and turn the lock.',age:'Ages 7–15',icon:'🔐',color:'#e5eaff',order:15,href:'lab.html#lock'},
    {id:'lab-jack',title:'Hydraulic Jack',category:'Build & Invent',description:'Pump a small piston and lift a heavy car with oil.',age:'Ages 9–15',icon:'🚗',color:'#fff0d3',order:16,href:'lab.html#jack'},
    {id:'lab-wiper',title:'Windshield Wiper',category:'Build & Invent',description:'See how a spinning motor swings a wiper to clear the rain.',age:'Ages 7–15',icon:'🌧️',color:'#dff1ff',order:17,href:'lab.html#wiper'},
    {id:'lab-pump',title:'Water Pump System',category:'Science Lab',description:'Pump water to a roof tank and let a float switch control it.',age:'Ages 8–15',icon:'🚰',color:'#dff1ff',order:18,href:'lab.html#pump'},
    {id:'lab-distance',title:'Echo Distance Sensor',category:'Robotics & Circuits',description:'Send a sound ping and time the echo, like a parking sensor.',age:'Ages 7–15',icon:'📏',color:'#ddf4ee',order:19,href:'lab.html#distance'},
    {id:'lab-light',title:'Light Sensor Lamp',category:'Robotics & Circuits',description:'Make a lamp switch on by itself when it gets dark.',age:'Ages 7–15',icon:'💡',color:'#fff0c9',order:20,href:'lab.html#light'},
    {id:'lab-heat',title:'Heat Sensor Fan',category:'Robotics & Circuits',description:'Watch a fan start and a buzzer sound when it gets hot.',age:'Ages 7–15',icon:'🌡️',color:'#ffe6df',order:21,href:'lab.html#heat'},
    {id:'lab-avoid',title:'Obstacle-Avoiding Robot',category:'Robotics & Circuits',description:'A robot sees blocks ahead and turns away before it bumps.',age:'Ages 7–15',icon:'🤖',color:'#eee5ff',order:22,href:'lab.html#avoid'},
    {id:'lab-line',title:'Line-Following Robot',category:'Robotics & Circuits',description:'Three eyes follow a track through corners and beep at checkpoints.',age:'Ages 7–15',icon:'🛤️',color:'#e6e2ff',order:23,href:'lab.html#line'},
    {id:'lab-door',title:'Motion Sensor Door',category:'Robotics & Circuits',description:'Walk up to an automatic door and see how it senses you.',age:'Ages 7–15',icon:'🚪',color:'#ddf4ee',order:24,href:'lab.html#door'},
    {id:'lab-soil',title:'Soil Moisture Alert',category:'Nature & Earth',description:'A sensor, a screen and a buzzer tell you when a plant is thirsty.',age:'Ages 7–15',icon:'🌱',color:'#e5f3d9',order:25,href:'lab.html#soil'},
    {id:'lab-led',title:'LED and Resistor',category:'Robotics & Circuits',description:'Find the safe amount of current for an LED.',age:'Ages 7–15',icon:'🔴',color:'#ffe6df',order:26,href:'lab.html#led'},
    {id:'lab-series',title:'Series vs Parallel',category:'Robotics & Circuits',description:'See why one bulb going out can switch off all the others.',age:'Ages 7–15',icon:'🎄',color:'#e5f3d9',order:27,href:'lab.html#series'},
    {id:'lab-night',title:'Night-Light Circuit',category:'Robotics & Circuits',description:'Use a light sensor and a transistor to build an automatic night light.',age:'Ages 7–15',icon:'🌙',color:'#eee5ff',order:28,href:'lab.html#night'},
    {id:'lab-cap',title:'Capacitor Flash',category:'Robotics & Circuits',description:'Charge a capacitor and watch an LED glow and fade.',age:'Ages 7–15',icon:'📸',color:'#fff0c9',order:29,href:'lab.html#cap'},
  ];
  const trail=[
    {name:'Spark',icon:'⚡',id:'lighthouse',summary:'See what a complete circuit needs.',goal:'Notice the path from battery to bulb.'},
    {name:'Build',icon:'🧱',id:'bridge',summary:'Try supports and test a bridge.',goal:'Compare how the bridge changes under load.'},
    {name:'Code',icon:'🧭',id:'rover',summary:'Plan steps and guide a rover.',goal:'Give clear directions, then debug the route.'}
  ];
  const progressKey='jx-explored-projects-v1';let selectedCategory='';const $=s=>document.querySelector(s);
  const explored=()=>{try{return JSON.parse(localStorage.getItem(progressKey)||'[]')}catch{return[]}};
  function markExplored(id){const done=explored();if(!done.includes(id)){done.push(id);localStorage.setItem(progressKey,JSON.stringify(done))}renderTrail()}
  function renderTrail(){const done=explored();const trailDone=trail.filter(t=>done.includes(t.id)).length;$('#trail-progress').textContent=trailDone+' of 3 explored';$('#trail-cards').innerHTML=trail.map((t,i)=>'<article class="trail-card"><span class="trail-number" aria-hidden="true">'+(done.includes(t.id)?'✓':t.icon)+'</span><div><h3>'+['1','2','3'][i]+' · '+t.name+'</h3><p>'+t.summary+' <strong>'+t.goal+'</strong></p><button class="trail-link" type="button" data-open="'+t.id+'">Open '+t.name.toLowerCase()+' →</button></div><span class="trail-state">'+(done.includes(t.id)?'Explored':'Next')+'</span></article>').join('');$('#trail-cards').querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.open)))}
  function renderCategories(){const host=$('#category-grid');host.innerHTML=categories.filter(c=>projects.some(p=>p.category===c.name)).map(c=>'<button class="category-card '+(selectedCategory===c.name?'active':'')+'" type="button" data-category="'+c.name+'"><span class="category-icon" style="background:'+c.color+'">'+c.icon+'</span><span><strong>'+c.name+'</strong><small>'+c.note+'</small></span></button>').join('');host.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{selectedCategory=selectedCategory===b.dataset.category?'':b.dataset.category;renderCategories();renderProjects()}))}
  function renderProjects(){const list=projects.filter(p=>!selectedCategory||p.category===selectedCategory);$('#project-grid').innerHTML=list.map(p=>'<article class="project-card"><div class="project-art" style="background:'+p.color+'"><span class="project-tag">'+(p.order?'PLAYABLE':'COMING SOON')+'</span>'+p.icon+'</div><div class="project-body"><h3>'+p.title+'</h3><p>'+p.description+'</p><div class="project-meta"><span class="project-age">'+p.age+'</span><button class="project-go" type="button" data-open="'+p.id+'">'+(p.order?'Play':'Coming soon')+' →</button></div></div></article>').join('');$('#project-description').textContent=selectedCategory?'Showing adventures in '+selectedCategory+'.':'Try a starter project from any section.';$('#clear-filter').classList.toggle('hidden',!selectedCategory);$('#project-grid').querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.open)))}
  function openProject(id){const p=projects.find(x=>x.id===id);if(p&&p.href){location.href=p.href;return}if(!p||!p.order||!window.JXSimulators||!window.JXSimulators[id])return;$('#simulator-category').textContent=p.category+' · '+p.age;$('#simulator-title').textContent=p.title;const root=$('#simulator-content');root.innerHTML='';window.JXSimulators[id].mount(root,()=>markExplored(id));$('#simulator-dialog').showModal()}
  function resetFilters(){selectedCategory='';renderCategories();renderProjects()}
  $('#show-all').addEventListener('click',resetFilters);$('#clear-filter').addEventListener('click',resetFilters);$('#close-dialog').addEventListener('click',()=>$('#simulator-dialog').close());$('#simulator-dialog').addEventListener('click',e=>{if(e.target===$('#simulator-dialog'))$('#simulator-dialog').close()});$('#simulator-dialog').addEventListener('close',()=>{$('#simulator-content').innerHTML=''});
  renderTrail();renderCategories();renderProjects();
})();
