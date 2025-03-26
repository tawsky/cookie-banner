<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verbessertes Cookie-Banner</title>
    <style>
        /* Styling */
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
</head>
<body>

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
        /* Funktion zum Setzen von Cookies */
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + "; path=/; SameSite=Lax; Secure" + expires;
        }

        /* Funktion zum Abrufen eines Cookie-Werts */
        function getCookie(name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        /* Alle Cookies akzeptieren */
        function acceptAllCookies() {
            setCookie("analytics", "true", 365);
            setCookie("social", "true", 365);
            setCookie("ads", "true", 365);
            setCookie("userConsent", "true", 365);
            document.getElementById("cookie-banner").style.display = "none";
        }

        /* Alle Cookies ablehnen */
        function rejectAllCookies() {
            setCookie("analytics", "false", 365);
            setCookie("social", "false", 365);
            setCookie("ads", "false", 365);
            setCookie("userConsent", "false", 365);
            document.getElementById("cookie-banner").style.display = "none";
        }

        /* Cookie-Einstellungen öffnen */
        function openSettings() {
            document.getElementById("cookie-settings").style.display = "block";

            // Checkboxen mit gespeicherten Werten füllen
            document.getElementById("analytics").checked = getCookie("analytics") === "true";
            document.getElementById("social").checked = getCookie("social") === "true";
            document.getElementById("ads").checked = getCookie("ads") === "true";
        }

        /* Cookie-Einstellungen speichern */
        function savePreferences() {
            setCookie("analytics", document.getElementById("analytics").checked ? "true" : "false", 365);
            setCookie("social", document.getElementById("social").checked ? "true" : "false", 365);
            setCookie("ads", document.getElementById("ads").checked ? "true" : "false", 365);
            setCookie("userConsent", "true", 365);

            document.getElementById("cookie-settings").style.display = "none";
            document.getElementById("cookie-banner").style.display = "none";
        }

        /* Cookie-Einstellungen schließen */
        function closeSettings() {
            document.getElementById("cookie-settings").style.display = "none";
        }

        /* Prüfen, ob das Banner angezeigt werden muss */
        function checkCookieBanner() {
            if (!getCookie("userConsent")) {
                document.getElementById("cookie-banner").style.display = "block";
            }
        }

        window.onload = checkCookieBanner;
    </script>

</body>
</html>
