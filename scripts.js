// Sample projects
const projectGrid = document.getElementById("projectGrid");
const projects = [
  "Web Design", "Mobile App", "Logo Design", "SEO Work",
  "E-commerce Setup", "Content Writing", "Data Entry", "Video Editing"
];

// Load projects into grid
projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerText = proj;
  projectGrid.appendChild(card);
});

// Search functionality
document.querySelector(".search-btn").addEventListener("click", () => {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});

// Show sign-in modal when any role button is clicked
const roleBtns = document.querySelectorAll('.role-btn');
const signinModal = document.getElementById('signinModal');
const closeModalBtn = document.getElementById('closeModal');

roleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    signinModal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  signinModal.style.display = 'none';
});

// Optional: Close modal when clicking outside modal-content
signinModal.addEventListener('click', (e) => {
  if (e.target === signinModal) {
    signinModal.style.display = 'none';
  }
});

// Google sign-in button functionality using Google Identity Services
const googleBtn = document.getElementById('googleSignInBtn');
googleBtn.addEventListener('click', () => {
  google.accounts.id.initialize({
    client_id: '555803378773-m8v8fe09a8s0in54hb2nf76ac885hrus.apps.googleusercontent.com',
    callback: handleGoogleResponse
  });
  google.accounts.id.prompt();
});

function handleGoogleResponse(response) {
  // response.credential is a JWT ID token
  // Decode the token to get user info (for demo, we'll just alert the token)
  // In production, send this token to your backend for verification
  const idToken = response.credential;
  // Optionally decode the JWT to get the user's email (for demo only)
  const payload = JSON.parse(atob(idToken.split('.')[1]));
  alert('Google sign-in successful! Email: ' + payload.email);
}
