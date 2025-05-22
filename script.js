
const data = [
  ['x31233', 'Νίκος', 'Παπαδόπουλος', 'Γεώργιος', 'Alpha A.E.', 'Ναι'],
  ['x32131', 'Μαρία', 'Ιωάννου', 'Κωνσταντίνος', 'Beta Ltd', 'Όχι'],
  ['x34515', 'Γιώργος', 'Καραγιάννης', 'Αντώνης', 'Gamma Corp', 'Ναι'],
  ['x12441', 'Ελένη', 'Μακρή', 'Νικόλαος', 'Delta S.A.', 'Ναι'],
  ['x12345', 'Δημήτρης', 'Σταθόπουλος', 'Χρήστος', 'Epsilon IKE', 'Όχι'],
  ['x03924', 'Χρίστος', 'Μαρίνος', 'Λεωνίδα', 'ΑΥΕ ', 'Ναι']
];

function searchUser() {
  const reg = document.getElementById('searchInput').value.trim();
  const field = document.getElementById('fieldSelect').value;
  const resultBox = document.getElementById('resultBox');
  const statusBox = document.getElementById('statusBox');

  const match = data.find(row => row[0] === reg);

  resultBox.classList.remove('fade-in');
  void resultBox.offsetWidth; // Trigger reflow for animation

  if (!match) {
    resultBox.innerHTML = '<div class="alert">⚠️ Δεν βρέθηκε λειτουργός με αυτόν τον αριθμό.</div>';
    statusBox.style.display = 'none';
    resultBox.classList.add('fade-in');
    return;
  }

  const labels = ['Αριθμός Μητρώου', 'Όνομα', 'Επώνυμο', 'Πατρώνυμο', 'Εταιρεία', 'Κατάσταση'];
  const icons = ['#️⃣', '👤', '🧑‍🦱', '👨‍👦', '🏢', '📌'];

  if (field === 'all') {
    resultBox.innerHTML = match.map((value, i) => `<p>${icons[i]} <b>${labels[i]}:</b> ${value}</p>`).join('');
  } else {
    resultBox.innerHTML = `<p>${icons[field]} <b>${labels[field]}:</b> ${match[field]}</p>`;
  }

  const isActive = match[5] === 'Ναι';
  statusBox.className = 'status-box ' + (isActive ? 'status-active' : 'status-inactive');
  statusBox.textContent = isActive ? 'User is ACTIVE' : 'User is INACTIVE';
  statusBox.style.display = 'block';

  resultBox.classList.add('fade-in');
}

