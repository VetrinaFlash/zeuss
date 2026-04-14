// ZEUSS QUICK START GUIDE

const SETUP_GUIDE = {
  step1: `
    ✅ STEP 1: PREPARARE I FILE MEDIA
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    Cartelle create automaticamente:
    📁 assets/
       ├── pdf/          ← Metti il PDF qui
       └── videos/       ← Metti il video qui
    
    DOV'E' IL PDF?
    ▶ Sposta: ZEUSS-INTERCEPTOR.pdf
      A: assets/pdf/ZEUSS-INTERCEPTOR.pdf
    
    DOV'E' IL VIDEO?
    ▶ Sposta: zeusz-demo.mp4 (o altro video)
      A: assets/videos/zeusz-demo.mp4
    
    Formati supportati:
    • PDF: *.pdf (qualsiasi PDF funziona)
    • Video: *.mp4, *.webm, *.mov
  `,

  step2: `
    ✅ STEP 2: TESTARE LOCALMENTE
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    OPZIONE A: Live Server (VS Code - PIÙ SEMPLICE)
    1. Apri l'estensione VS Code
    2. Installa "Live Server" di Ritwick Dey
    3. Clicca destro su index.html
    4. Seleziona "Open with Live Server"
    5. Browser si apre su http://localhost:5500
    
    OPZIONE B: Python
    1. Apri terminale nella cartella zeusssito
    2. Esegui: python -m http.server 8000
    3. Apri browser: http://localhost:8000
    4. Premi CTRL+C per fermarsi
    
    OPZIONE C: Node.js
    1. npm install
    2. npm run dev
    3. Apri http://localhost:5173
  `,

  step3: `
    ✅ STEP 3: TESTARE IL LOGIN
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    Username: zeuss_admin
    Password: Interceptor2026!
    
    Quello che vedrai:
    ✓ Login page con PDF preview a sinistra
    ✓ Form login a destra con animazioni
    ✓ Pulsante "ACCESS SYSTEM" che fa entrare
    ✓ Se credenziali wrong → messaggio errore con shake
    
    CAMBIAR CREDENZIALI (opzionale):
    1. Edita: .env file
       VITE_LOGIN_USERNAME=zeuss_admin
       VITE_LOGIN_PASSWORD=Interceptor2026!
    
    2. O in js/config.js:
       VALID_USERNAME: 'zeuss_admin'
  `,

  step4: `
    ✅ STEP 4: TESTARE LA DASHBOARD
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    Pagina vista dopo login: dashboard-main.html
    
    Sezioni:
    1. Video Fullscreen (top)
       - Video riempie lo screen
       - Bottoni di controllo
       - Overlay gradient
    
    2. PDF Viewer (scroll down)
       - Mostra le pagine del PDF
       - Bottoni prev/next
       - Pagina X di Y
       - Animazioni di transizione
    
    3. Floating Navigation (destra)
       - ⬆ HOME (torna al video)
       - ⬇ CONTENT (vai al PDF)
       - ⚙ LOGOUT (esci)
    
    4. Status Panel (sinistra basso)
       - SYSTEM: ONLINE
       - SECURITY: ACTIVE
       - USER: ADMIN
    
    Funzionalità:
    • Tastiera: ← → per pagine prev/next
    • Mouse: Cursor follower che seguita il mouse
    • Responsive: Adatta a mobile, tablet, desktop
  `,

  step5: `
    ✅ STEP 5: ANIMAZIONI E EFFETTI
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    Effetti già implementati:
    
    LOGIN PAGE:
    ✓ Titolo ZEUSS che gira e scala
    ✓ Form che entra con stagger
    ✓ Bottoni con glow neon
    ✓ Scan line che scorre
    ✓ Angoli che appaiono con rotazione
    ✓ Background con particles animati
    
    DASHBOARD:
    ✓ Pagine PDF che entrano con rotazione 3D
    ✓ Decorazioni angolari che appaiono
    ✓ Floating nav che entra da destra
    ✓ Cursor follower magnetico
    ✓ Transizioni smooth tra pagine
    ✓ Loading screen con spinner
    ✓ Status bar che pulsa
    
    TIPO ACTIVETHEORY.NET:
    ✓ Canvas particles che seguono il mouse
    ✓ Linee che collegano i particles
    ✓ Effetti elastici (cubic-bezier speciale)
    ✓ 3D rotations e perspective
    ✓ Glow e shadow effects
    ✓ Animazioni stagger per sequenze
  `,

  step6: `
    ✅ STEP 6: DEPLOY SU CLOUDFLARE PAGES
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    1. PUSH SU GITHUB
    $ git init
    $ git add .
    $ git commit -m "ZEUSS Drone Interceptor v1"
    $ git branch -M main
    $ git remote add origin https://github.com/TUO_USERNAME/zeusssito.git
    $ git push -u origin main
    
    2. CLOUDFLARE PAGES SETUP
    Vai a: https://dash.cloudflare.com/
    1. Seleziona account
    2. Menu → "Pages"
    3. "Create a project" → "Connect to Git"
    4. Seleziona zeusssito repo
    5. Build settings:
       - Framework: None
       - Build command: (empty)
       - Output directory: / (root)
    6. Deploy!
    
    3. AGGIUNGI VARIABILI D'AMBIENTE
    1. Nel tuo project Cloudflare Pages
    2. Settings → Environment Variables
    3. Aggiungi:
       VITE_LOGIN_USERNAME = zeuss_admin
       VITE_LOGIN_PASSWORD = Interceptor2026!
    
    4. ACCEDI AL SITO
    Il tuo sito avrà URL tipo:
    https://zeusssito.pages.dev
    
    Collega dominio custom in Cloudflare DNS settings
  `,

  step7: `
    ✅ STEP 7: PERSONALIZZAZIONE (OPZIONALE)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    COLORI NEON:
    File: styles/main.css
    :root {
        --primary-color: #00ff41;      ← Cambia verde
        --secondary-color: #00d9ff;    ← Cambia cyan
        --accent-color: #ff006e;       ← Cambia magenta
        --dark-bg: #0a0e27;            ← Cambia sfondo
    }
    
    VELOCITÀ ANIMAZIONI:
    File: js/config.js o css
    --transition-fast: 0.3s
    --transition-smooth: 0.6s
    --transition-slow: 1.0s
    
    TESTO E CONTENUTI:
    • login.html: Testi form
    • dashboard-main.html: Labels PDF viewer
    • js/config.js: Nomi variabili
    
    DIMENSIONI:
    • Login width: max-width: 400px (login-new.css)
    • PDF container: max-width: 1200px (dashboard.css)
    • Particle count: 30-50 (background.js)
  `,

  checklist: `
    ✅ PRE-DEPLOY CHECKLIST
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    PRIMA DI METTERE IN PRODUZIONE:
    
    [ ] PDF caricato in assets/pdf/ZEUSS-INTERCEPTOR.pdf
    [ ] Video caricato in assets/videos/zeusz-demo.mp4
    [ ] Login page funziona con credenziali correct
    [ ] Dashboard apre il PDF con tutte le pagine
    [ ] Video di riproduce a schermo intero
    [ ] Animazioni fluide (no lag)
    [ ] Responsive OK su mobile (usa Chrome DevTools)
    [ ] Logout funziona e torna a login.html
    [ ] Credenziali seguite nel .env
    [ ] .gitignore include .env
    [ ] GitHub repo creato e pushato
    [ ] Cloudflare Pages deployment successful
    [ ] Variabili ambiente configurate su Cloudflare
    [ ] Dominio custom collegato (se desiderato)
    [ ] Colori e testi personalizzati
    [ ] Test finale su dominio pubblico
  `,

  folders: `
    📁 STRUTTURA CARTELLE FINALE
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    zeusssito/
    ├── index.html                    ← Landing (redirect a login)
    ├── login.html                    ← Login con PDF preview
    ├── dashboard-main.html           ← Dashboard con PDF viewer
    ├── login-new.css                 ← Stili login premium
    ├── .env                          ← Credenziali (GIT IGNORE!)
    ├── .gitignore                    ← Ignora node_modules, .env
    ├── README.md                     ← Questo file
    ├── package.json                  ← Dipendenze Node
    │
    ├── js/
    │   ├── config.js                 ← Configurazione globale
    │   ├── login.js                  ← Logica login + PDF login
    │   ├── dashboard.js              ← Logica dashboard + PDF viewer
    │   ├── animations.js             ← Engine animazioni
    │   └── background.js             ← Canvas effects
    │
    ├── styles/
    │   ├── main.css                  ← Stili globali
    │   ├── animations.css            ← Keyframes premium
    │   ├── dashboard.css             ← Stili dashboard
    │   ├── login.css                 ← Stili login (old)
    │
    └── assets/
        ├── pdf/
        │   ├── ZEUSS-INTERCEPTOR.pdf ← 📍 CARICA IL TUO PDF QUI
        │   └── README.txt
        └── videos/
            ├── zeusz-demo.mp4        ← 📍 CARICA IL TUO VIDEO QUI
            └── README.txt
  `
};

console.log('═══════════════════════════════════════════════════════════════');
console.log('    ZEUSS DRONE INTERCEPTOR - SETUP GUIDE');
console.log('═══════════════════════════════════════════════════════════════');
console.log(SETUP_GUIDE.step1);
console.log('\n' + SETUP_GUIDE.step2);
console.log('\n' + SETUP_GUIDE.step3);
console.log('\n' + SETUP_GUIDE.step4);
console.log('\n' + SETUP_GUIDE.step5);
console.log('\n' + SETUP_GUIDE.step6);
console.log('\n' + SETUP_GUIDE.step7);
console.log('\n' + SETUP_GUIDE.checklist);
console.log('\n' + SETUP_GUIDE.folders);
console.log('═══════════════════════════════════════════════════════════════');
