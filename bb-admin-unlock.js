/* =====================================================================
   BhaiBandhan — Disable Admin Passcode Gate (bb-admin-unlock.js)
   ---------------------------------------------------------------------
   HOW TO USE:
   1. Upload this file to your GitHub repo (same repo as admin.html).
   2. In admin.html, add ONE line right before the closing </body> tag
      (it must come AFTER your existing admin script, so this loads
      last):

        <script src="bb-admin-unlock.js"></script>

   3. Done — the passcode screen is skipped automatically and the
      admin panel opens directly.

   ⚠️ IMPORTANT: This removes the only protection your admin panel
   has. Anyone with your admin.html link will now be able to edit
   products, prices, coupons, and banners with no passcode at all.
   Only use this temporarily (e.g. while you're actively working on
   it yourself), and remove the <script> line again once you're done
   — or better, just re-enable the passcode and keep it private.

   TO RE-ENABLE THE GATE LATER: simply delete or comment out the
   <script src="bb-admin-unlock.js"></script> line in admin.html.
   ===================================================================== */

(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const gate = document.getElementById('gate');
    const app = document.getElementById('app');
    if(gate) gate.style.display = 'none';
    if(app) app.style.display = 'block';
    if(typeof initApp === 'function') initApp();
  });
})();
