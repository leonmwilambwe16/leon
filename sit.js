// Toggle hamburger menu
function toggleMenu() {
  const menuList = document.getElementById('menuList');
  menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  const menuList = document.getElementById('menuList');
  const hamburger = document.querySelector('.hamburger');
  
  if (!hamburger.contains(e.target) && !menuList.contains(e.target)) {
    menuList.style.display = 'none';
  }
});

// Close menu when clicking a menu item
document.querySelectorAll('#menuList a').forEach(item => {
  item.addEventListener('click', () => {
    const menuList = document.getElementById('menuList');
    menuList.style.display = 'none';
  });
});

// Fix Skill Bar Animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-bar .skill-per").forEach((bar) => {
    const percentage = bar.querySelector(".tooltip").innerText;
    bar.style.width = percentage;
  });
});

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const contentId = tab.getAttribute('data-tab');
      document.getElementById(contentId).classList.add('active');
    });
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  const menuList = document.getElementById('menuList');
  if (window.innerWidth > 768) {
    menuList.style.display = 'none';
  }
});

