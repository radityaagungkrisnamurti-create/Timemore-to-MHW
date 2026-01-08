<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grinder Converter | Timemore ⇄ MHW</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .card {
      background: white;
      width: 100%;
      max-width: 420px;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }
    h1 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 4px;
    }
    p.subtitle {
      text-align: center;
      font-size: 13px;
      color: #666;
      margin-bottom: 20px;
    }
    label {
      font-size: 13px;
      font-weight: 600;
      display: block;
      margin-bottom: 6px;
    }
    input {
      width: 100%;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid #ddd;
      font-size: 15px;
    }
    .row {
      display: flex;
      gap: 8px;
    }
    .result {
      margin-top: 8px;
      font-size: 14px;
      background: #f1f1f1;
      padding: 10px;
      border-radius: 10px;
    }
    hr {
      border: none;
      border-top: 1px solid #eee;
      margin: 20px 0;
    }
    .note {
      font-size: 12px;
      color: #555;
      background: #fafafa;
      padding: 10px;
      border-radius: 10px;
      margin-top: 16px;
    }
    button {
      width: 100%;
      margin-top: 16px;
      padding: 12px;
      border-radius: 12px;
      border: none;
      background: #111;
      color: white;
      font-size: 14px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>☕ Grinder Converter</h1>
    <p class="subtitle">Timemore S3 ⇄ MHW-3BOMBER Blade R3</p>

    <label>Timemore S3 (Click)</label>
    <input id="timemore" type="number" step="0.5" value="3.5" />
    <div class="result" id="mhwResult">MHW R3: 1+4</div>

    <hr />

    <label>MHW R3 → Timemore (Reverse)</label>
    <div class="row">
      <input id="rotasi" type="number" min="0" max="3" placeholder="Rotasi" />
      <input id="click" type="number" min="0" max="9" placeholder="Click" />
    </div>
    <div class="result" id="timemoreResult">Timemore S3: -</div>

    <div class="note">
      <b>Prinsip Edukasi:</b><br />
      • Timemore +1 ≈ MHW +3–4 click<br />
      • Light roast: mulai +1 click lebih kasar
    </div>

    <button onclick="resetAll()">Reset</button>
  </div>

  <script>
    const timemoreInput = document.getElementById('timemore');
    const mhwResult = document.getElementById('mhwResult');
    const rotasiInput = document.getElementById('rotasi');
    const clickInput = document.getElementById('click');
    const timemoreResult = document.getElementById('timemoreResult');

    function updateMHW() {
      const t = parseFloat(timemoreInput.value);
      if (isNaN(t)) return;
      const total = Math.round(t * 3.5 + 1);
      const rotasi = Math.floor(total / 10);
      const click = total % 10;
      mhwResult.innerText = `MHW R3: ${rotasi}+${click}`;
    }

    function updateTimemore() {
      const r = parseInt(rotasiInput.value);
      const c = parseInt(clickInput.value);
      if (isNaN(r) || isNaN(c)) return;
      const total = r * 10 + c;
      const t = ((total - 1) / 3.5).toFixed(1);
      timemoreResult.innerText = `Timemore S3: ${t}`;
    }

    function resetAll() {
      timemoreInput.value = 3.5;
      rotasiInput.value = '';
      clickInput.value = '';
      mhwResult.innerText = 'MHW R3: 1+4';
      timemoreResult.innerText = 'Timemore S3: -';
    }

    timemoreInput.addEventListener('input', updateMHW);
    rotasiInput.addEventListener('input', updateTimemore);
    clickInput.addEventListener('input', updateTimemore);

    updateMHW();
  </script>
</body>
</html>
