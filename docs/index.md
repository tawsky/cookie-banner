---
layout: default
---

# Willkommen auf meiner Website

Dies ist meine einfache Jekyll-Seite für GitHub Pages.

<style>
    /* Styling für den Cookie-Banner */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    /* Banner-Design */
    #cookie-banner {
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 400px;
        background: rgba(30, 30, 30, 0.95);
        color: white;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        display: none;
    }

    .cookie-section {
        text-align: left;
        margin: 10px 0;
    }

    .cookie-buttons {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .cookie-buttons button {
        width: 100%;
        padding: 10px;
        border: none;
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
    }

    .accept-btn {
        background-color: #4CAF50;
        color: white;
    }

    .reject-btn {
        background-color: #f44336;
        color: white;
    }

    .settings-btn {
        background-color: #2196F3;
        color: white;
    }

    /* Modal-Design */
    #cookie-settings {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 400px;
        background: white;
        color: black;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        display: none;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
    }

    .close-btn {
        background: gray;
        color: white;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        float: right;
        border-radius: 5px;
    }
</style>

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
// JavaScript hier einfügen (die Funktionen zum Setzen der Cookies und die Cookie-Verwaltung)
</script>
