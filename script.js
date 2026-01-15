<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ansh Bro Notes - Class 9 Science</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<style>
  /* ===== Reset & Base ===== */
  * { margin:0; padding:0; box-sizing:border-box; font-family: 'Roboto', sans-serif; }
  body { background: #f0f4f8; color: #333; }

  /* ===== Header ===== */
  header {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color:white; text-align:center;
    padding:30px 20px; border-bottom-left-radius:20px;
    border-bottom-right-radius:20px; box-shadow:0 5px 15px rgba(0,0,0,0.2);
  }
  header h1 { font-size:2.5rem; margin-bottom:5px; }
  header p { font-size:1rem; opacity:0.9; }

  /* ===== Main ===== */
  main { max-width:1000px; margin:auto; padding:30px 20px; }
  h2 { text-align:center; margin-bottom:30px; color:#2575fc; }

  /* ===== Notes Grid ===== */
  .notes-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px; }

  /* ===== Card Style ===== */
  .note-card {
    background:white; border-radius:15px;
    padding:20px; box-shadow:0 5px 15px rgba(0,0,0,0.1);
    display:flex; flex-direction:column; justify-content:space-between;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .note-card:hover {
    transform: translateY(-5px);
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
  }
  .note-card h3 { color:#6a11cb; margin-bottom:10px; }
  .note-card p { font-size:0.9rem; margin-bottom:15px; opacity:0.8; }

  /* ===== Buttons ===== */
  .btn {
    text-align:center; padding:10px 15px; border-radius:10px;
    font-weight:bold; border:2px solid #2575fc; cursor:pointer;
    transition:0.3s; text-decoration:none; margin-bottom:10px;
    color:#2575fc; background:white;
  }
  .btn:hover {
    background:#2575fc; color:white; transform:scale(1.05);
  }

  /* ===== Footer ===== */
  footer {
    text-align:center; padding:20px; background:#333; color:white;
    margin-top:50px; border-top-left-radius:20px; border-top-right-radius:20px;
  }

  @media(max-width:600px){ main { padding:20px; } }
</style>
</head>
<body>

<header>
  <h1>Ansh Bro Notes</h1>
  <p>Class 9 Science Notes – View & Download</p>
</header>

<main>
  <h2>Available Notes</h2>
  <div class="notes-grid">
    <div class="note-card">
      <h3>Physics Notes</h3>
      <p>Basic Physics concepts for class 9 students.</p>
      <a href="notes/physics.pdf" class="btn" target="_blank">View / Download</a>
    </div>
    <div class="note-card">
      <h3>Chemistry Notes</h3>
      <p>Important Chemistry topics for class 9 students.</p>
      <a href="notes/chemistry.pdf" class="btn" target="_blank">View / Download</a>
    </div>
    <div class="note-card">
      <h3>Biology Notes</h3>
      <p>Essential Biology concepts for class 9 students.</p>
      <a href="notes/biology.pdf" class="btn" target="_blank">View / Download</a>
    </div>
    <!-- Tum aur notes bhi yahan add kar sakte ho -->
  </div>
</main>

<footer>
  &copy; 2026 Ansh Bro Notes
</footer>

</body>
</html>
