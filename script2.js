// Theme Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    document.getElementById("modeToggle").textContent = newTheme === "light" ? "🌙" : "☀️";
  });
  
  // Ripple Effect
  const rippleContainer = document.getElementById('ripple-container');
  
  function createRippleBox(x, y) {
    const box = document.createElement('div');
    box.classList.add('box');
    const size = Math.random() * 20 + 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;
    const xMove = Math.cos(angle) * distance;
    const yMove = Math.sin(angle) * distance;
  
    box.style.setProperty('--x-move', `${xMove}px`);
    box.style.setProperty('--y-move', `${yMove}px`);
  
    rippleContainer.appendChild(box);
    setTimeout(() => box.remove(), 1000);
  }
  
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 10; i++) {
      createRippleBox(e.clientX, e.clientY);
    }
  });
  
  // Stats Bars
  const stats = [
    { icon: "🏭", label: "Improve production processes", percent: 93 },
    { icon: "🔍", label: "Search Engine Optimization", percent: 92 },
    { icon: "⚙️", label: "Process automation", percent: 91 },
    { icon: "🕒", label: "Internal communications", percent: 86 },
    { icon: "📊", label: "Aggregate business data", percent: 80 },
    { icon: "💡", label: "Idea generation", percent: 78 },
    { icon: "❗", label: "Minimize safety risk", percent: 78 },
    { icon: "💻", label: "Write code", percent: 71 },
    { icon: "📝", label: "Write website copy", percent: 69 },
  ];
  
  const container = document.getElementById("stats-container");
  
  stats.forEach(stat => {
    const statEl = document.createElement("div");
    statEl.className = "stat";
    statEl.innerHTML = `
      <div class="icon">${stat.icon}</div>
      <div class="label">${stat.label}</div>
      <div class="bar-wrapper">
        <div class="bar" style="width: 0;"></div>
        <div class="percent">${stat.percent}%</div>
      </div>
    `;
    container.appendChild(statEl);
  });
  
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  
    document.querySelectorAll(".bar").forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = `${stats[i].percent}%`;
      }, i * 100);
    });
  });
  