v4uglobal-website/
├── index.html
├── style.css
├── assets/
│   ├── logo.png
│   ├── hero.jpg
│   └── ... other images
└── .nojekyll

---

**index.html** (relative paths example):

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>v4uglobal</title>
  <link href="style.css" rel="stylesheet">
</head>
<body>
  <header>
    <div class="logo"><img src="assets/logo.png" alt="v4uglobal"></div>
  </header>

  <main>
    <section class="hero">
      <img src="assets/hero.jpg" alt="v4uglobal Hero">
      <h1>Welcome to v4uglobal</h1>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 v4uglobal. All rights reserved.</p>
  </footer>
</body>
</html>

---
**style.css**
body { margin:0; font-family: sans-serif; }
.header, .footer { background:#fff; padding: 20px; }
.hero { text-align: center; }
.logo img { height:50px; }