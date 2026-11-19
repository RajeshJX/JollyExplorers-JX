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
    {id:'fossil',title:'Fossil Finder',category:'Nature & Earth',description:'Brush away layers and discover who lived long ago.',age:'Ages 5–9',icon:'🦴',color:'#fff0d3',order:4},
    {id:'cloud',title:'Cloud Catcher',category:'Science Lab',description:'Change warmth and water in the air to help a cloud make rain.',age:'Ages 7–10',icon:'🌦️',color:'#dff1ff',order:5},
    {id:'garden',title:'Garden Market',category:'Everyday Skills',description:'Balance water and sunshine, grow a harvest, and count your market coins.',age:'Ages 7–11',icon:'🥕',color:'#ffe6df',order:6},
    {id:'world',title:'Map Mission',category:'World Adventures',description:'Guide an explorer across a map to reach a lookout safely.',age:'Ages 6–10',icon:'🧭',color:'#dff1ff',order:7},
    {id:'puzzle',title:'Pattern Pop',category:'Puzzles & Brain Games',description:'Spot the rule and choose what comes next in three playful patterns.',age:'Ages 5–10',icon:'🧩',color:'#fff0c9',order:8},
    {id:'story',title:'Story Studio',category:'Art, Music & Stories',description:'Choose a hero, place, and special thing to make a tiny adventure.',age:'Ages 5–10',icon:'🎨',color:'#ffe2ed',order:9}
  ];
  const trail=[
    {name:'Spark',icon:'⚡',id:'lighthouse',summary:'See what a complete circuit needs.',goal:'Notice the path from battery to bulb.'},
    {name:'Build',icon:'🧱',id:'bridge',summary:'Try supports and test a bridge.',goal:'Compare how the bridge changes under load.'},
    {name:'Code',icon:'🧭',id:'rover',summary:'Plan steps and guide a rover.',goal:'Give clear directions, then debug the route.'}
  ];
  const progressKey='jx-explored-projects-v1';let selectedCategory='';const $=s=>document.querySelector(s);
  const explored=()=>{try{return JSON.parse(localStorage.getItem(progressKey)||'[]')}catch{return[]}};
  function markExplored(id){const done=explored();if(!done.includes(id)){done.push(id);localStorage.setItem(progressKey,JSON.stringify(done))}renderTrail()}
  function renderTrail(){const done=explored();$('#trail-progress').textContent=done.length+' of 3 explored';$('#trail-cards').innerHTML=trail.map((t,i)=>'<article class="trail-card"><span class="trail-number" aria-hidden="true">'+(done.includes(t.id)?'✓':t.icon)+'</span><div><h3>'+['1','2','3'][i]+' · '+t.name+'</h3><p>'+t.summary+' <strong>'+t.goal+'</strong></p><button class="trail-link" type="button" data-open="'+t.id+'">Open '+t.name.toLowerCase()+' →</button></div><span class="trail-state">'+(done.includes(t.id)?'Explored':'Next')+'</span></article>').join('');$('#trail-cards').querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.open)))}
  function renderCategories(){const host=$('#category-grid');host.innerHTML=categories.map(c=>'<button class="category-card '+(selectedCategory===c.name?'active':'')+'" type="button" data-category="'+c.name+'"><span class="category-icon" style="background:'+c.color+'">'+c.icon+'</span><span><strong>'+c.name+'</strong><small>'+c.note+'</small></span></button>').join('');host.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{selectedCategory=selectedCategory===b.dataset.category?'':b.dataset.category;renderCategories();renderProjects()}))}
  function renderProjects(){const list=projects.filter(p=>!selectedCategory||p.category===selectedCategory);$('#project-grid').innerHTML=list.map(p=>'<article class="project-card"><div class="project-art" style="background:'+p.color+'"><span class="project-tag">'+(p.order?'PLAYABLE':'COMING SOON')+'</span>'+p.icon+'</div><div class="project-body"><h3>'+p.title+'</h3><p>'+p.description+'</p><div class="project-meta"><span class="project-age">'+p.age+'</span><button class="project-go" type="button" data-open="'+p.id+'">'+(p.order?'Play':'Coming soon')+' →</button></div></div></article>').join('');$('#project-description').textContent=selectedCategory?'Showing adventures in '+selectedCategory+'.':'Try a starter project from any section.';$('#clear-filter').classList.toggle('hidden',!selectedCategory);$('#project-grid').querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.open)))}
  function openProject(id){const p=projects.find(x=>x.id===id);if(!p||!p.order||!window.JXSimulators||!window.JXSimulators[id])return;$('#simulator-category').textContent=p.category+' · '+p.age;$('#simulator-title').textContent=p.title;const root=$('#simulator-content');root.innerHTML='';window.JXSimulators[id].mount(root,()=>markExplored(id));$('#simulator-dialog').showModal()}
  function resetFilters(){selectedCategory='';renderCategories();renderProjects()}
  $('#show-all').addEventListener('click',resetFilters);$('#clear-filter').addEventListener('click',resetFilters);$('#close-dialog').addEventListener('click',()=>$('#simulator-dialog').close());$('#simulator-dialog').addEventListener('click',e=>{if(e.target===$('#simulator-dialog'))$('#simulator-dialog').close()});$('#simulator-dialog').addEventListener('close',()=>{$('#simulator-content').innerHTML=''});
  renderTrail();renderCategories();renderProjects();
})();
