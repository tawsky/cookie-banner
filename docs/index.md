---
layout: default
---

# Willkommen auf meiner Website

Dies ist meine einfache Jekyll-Seite für GitHub Pages.

<!-- Cookie-Banner -->
<div id="cookie-banner">
    <p><strong>Diese Website verwendet Cookies</strong></p>
    <p>Wähle deine Präferenzen oder akzeptiere alle Cookies.</p>
    
    <div class="cookie-buttons">
        <button class="accept-btn" onclick="acceptAllCookies()">Alle akzeptieren</button>
        <button class="settings-btn" onclick="openSettings()">Einstellungen anpassen</button>
        <button class="reject-btn" onclick="rejectAllCookies()">Alle ablehnen</button>
    </div>
</div>

<!-- Cookie-Einstellungen Modal -->
<div id="cookie-settings">
    <h3>Cookie-Einstellungen</h3>

    <div class="checkbox-container">
        <label>📊 Analytics</label>
        <input type="checkbox" id="analytics">
    </div>

    <div class="checkbox-container">
        <label>📢 Social Media</label>
        <input type="checkbox" id="social">
    </div>

    <div class="checkbox-container">
        <label>🎯 Werbung</label>
        <input type="checkbox" id="ads">
    </div>

    <button class="accept-btn" onclick="savePreferences()">Speichern</button>
    <button class="close-btn" onclick="closeSettings()">Schließen</button>
</div>

<script>
// JavaScript für Cookie-Banner hier einfügen...
</script>
