/* Projects data — updated with your projects */
const projects = [
    {
      id: 1,
      title: "Bahubali — Stock Market Analytics",
      desc: "Responsive, SEO-optimized pages for a real-time stock analytics platform (NSE/BSE gainers, losers, most active, sector performance).",
      tech: "Next.js, JavaScript, HTML, CSS, REST APIs",
      category: "web",
      img: "assets/images/project1.png",
      link: "https://bahubali.in/"
    },
    {
      id: 2,
      title: "E_COMMERCE — Online Shopping (MVC + Web API)",
      desc: "MVC + Web API project with admin and user modules (manage categories/products, order retrieval, product search and profile management).",
      tech: "ASP.NET MVC, Web API, SQL Server",
      category: "web",
      img: "assets/images/project2.png",
      link: "https://github.com/Aitrich-Academy/MainProject"
    },
    {
      id: 3,
      title: "DermCheck — Skin Cancer Prediction (ML App)",
      desc: "Skin cancer test and classification app with user registration and admin dashboard to manage tests and results.",
      tech: "Machine Learning, Python (concept), Web UI",
      category: "other",
      img: "assets/images/project3.png",
      link: "#"
    }
  ];
  
  const grid = document.getElementById('projectGrid');
  
  function createCard(p){
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="tag">${p.tech}</div>
        <p style="margin-top:8px;">
          <button class="btn open" data-id="${p.id}">Details</button>
          <a class="btn ghost" href="${p.link}" target="_blank" rel="noopener">Open</a>
        </p>
      </div>
    `;
    return div;
  }
  
  function renderProjects(list){
    grid.innerHTML = '';
    list.forEach(p => grid.appendChild(createCard(p)));
  }
  
  /* initial render + modal + contact form */
  renderProjects(projects);
  
  /* modal elements */
  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTech = document.getElementById('modalTech');
  const modalLink = document.getElementById('modalLink');
  
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.open')){
      const id = Number(e.target.dataset.id);
      const p = projects.find(x=>x.id===id);
      modalImg.src = p.img;
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.desc;
      modalTech.textContent = "Tech: " + p.tech;
      modalLink.href = p.link;
      modal.classList.remove('hidden');
    }
  });
  
  document.getElementById('closeModal').addEventListener('click', ()=>modal.classList.add('hidden'));
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.classList.add('hidden'); });
  
  /* contact form - mailto fallback */
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:ashilymariyaofficial@gmail.com?subject=${subject}&body=${body}`;
  });
  
  /* year */
  document.getElementById('year').textContent = new Date().getFullYear();
  