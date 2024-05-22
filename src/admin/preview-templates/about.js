<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mitgliedsantrag</title>
</head>
<body>
    <h1>Mitgliedsantrag</h1>
    <form action="/mitgliedschaft" method="post">
        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Dein Name"
        ><br>

        <label for="angehoeriger">Ist ein Angehöriger bereits Mitglied?</label>
        <input
            type="checkbox"
            id="angehoeriger"
            name="angehoeriger"
        ><br>

        <label for="vorname">Vorname:</label>
        <input
            type="text"
            id="vorname"
            name="vorname"
            placeholder="Dein Vorname"
        ><br>

        <label for="strasse">Straße, Hausnummer:</label>
        <input
            type="text"
            id="strasse"
            name="strasse"
            placeholder="Deine Straße und Hausnummer"
        ><br>

        <label for="plz">PLZ:</label>
        <input
            type="text"
            id="plz"
            name="plz"
            placeholder="Deine PLZ"
        ><br>

        <label for="wohnort">Wohnort:</label>
        <input
            type="text"
            id="wohnort"
            name="wohnort"
            placeholder="Dein Wohnort"
        ><br>

        <label for="telefon">Telefon:</label>
        <input
            type="tel"
            id="telefon"
            name="telefon"
            placeholder="Deine Telefonnummer"
        ><br>

        <label for="geburtsdatum">Geburtsdatum:</label>
        <input
            type="date"
            id="geburtsdatum"
            name="geburtsdatum"
        ><br>

        <label for="email">E-Mail:</label>
        <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Deine E-Mail-Adresse"
        ><br>

        <!-- Weitere Felder für Geschlecht, Erziehungsberechtigte(r), etc. -->

        <label for="beitragszahlung">Beitragszahlung:</label>
        <input
            type="radio"
            id="jaehrlich"
            name="beitragszahlung"
            value="jaehrlich"
        >
        <label for="jaehrlich">jährlich</label>
        <input
            type="radio"
            id="halbjaehrlich"
            name="beitragszahlung"
            value="halbjaehrlich"
        >
        <label for="halbjaehrlich">halbjährlich</label><br>

        <!-- Abteilungen -->
        <fieldset>
            <legend>Abteilung/en / Sparte/n:</legend>
            <label><input type="checkbox" name="abteilung" value="Badminton"> Badminton</label><br>
            <label><input type="checkbox" name="abteilung" value="Fitness"> Fitness / Freizeitsport</label><br>
            <label><input type="checkbox" name="abteilung" value="Basketball"> Basketball </label><br>
            <label><input type="checkbox" name="abteilung" value="Capoeira"> Capoeira </label><br>
            <label><input type="checkbox" name="abteilung" value="Boule"> Petanque / Boule </label><br>
            <label><input type="checkbox" name="abteilung" value="Wandern"> Wandern </label><br>
            <label><input type="checkbox" name="abteilung" value="Women Fitness"> Women Fitness </label><br>
            <label><input type="checkbox" name="abteilung" value="Zumba"> Zumba </label><br>
            <label><input type="checkbox" name="abteilung" value="Gesundheitssport"> Gesundheitssport </label><br>
            <label><input type="checkbox" name="abteilung" value="Beckenbodengymnastik Männer"> Beckenbodengymnastik Männer </label><br>
            <label><input type="checkbox" name="abteilung" value="Fit am Morgen"> Fit am Morgen </label><br>
            <label><input type="checkbox" name="abteilung" value="Rehasport"> Rehasport </label><br>
            <label><input type="checkbox" name="abteilung" value="Körper in Balance"> Körper in Balance </label><br>
            <label><input type="checkbox" name="abteilung" value="Wirbelsäulengymnastik"> Wirbelsäulengymnastik </label><br>
            <label><input type="checkbox" name="abteilung" value="Yoga"> Yoga </label><br>
            <label><input type="checkbox" name="abteilung" value="Handball"> Handball </label><br>
            <label><input type="checkbox" name="abteilung" value="Leichtathletik"> Leichtathletik </label><br>
            <label><input type="checkbox" name="abteilung" value="Ski Team"> Ski Team </label><br>
            <label><input type="checkbox" name="abteilung" value="Funktionsgymnastik"> Funktionsgymnastik </label><br>
            <label><input type="checkbox" name="abteilung" value="Tischtennis"> Tischtennis </label><br>
            <label><input type="checkbox" name="abteilung" value="Turnen / Gymnastik"> Turnen / Gymnastik </label><br>
            <label><input type="checkbox" name="abteilung" value="Eltern und Kind"> Eltern und Kind </label><br>
            <label><input type="checkbox" name="abteilung" value="Purzelturnen 3-6 Jahre"> Purzelturnen 3-6 Jahre </label><br>
            <label><input type="checkbox" name="abteilung" value="Kinderturnen"> Kinderturnen </label><br>
            <label><input type="checkbox" name="abteilung" value="Rope Skipping"> Rope Skipping </label><br>
            <label><input type="checkbox" name="abteilung" value="Gymnastik"> Gymnastik </label><br>
            <label><input type="checkbox" name="abteilung" value="Parkour"> Parkour </label><br>
            <label><input type="checkbox" name="abteilung" value="Volleyball"> Volleyball </label><br>
            <!-- Weitere Abteilungen hier einfügen -->
        </fieldset>

        <input type="submit" value="Absenden">
    </form>

    <!-- Skript für automatischen E-Mail-Versand -->
    <script>
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const email = formData.get('email');
            const beitragszahlung = formData.get('beitragszahlung');

            // Hier kannst du den E-Mail-Versand implementieren (z. B. mit Node.js und Nodemailer).
            // Sende eine E-Mail an die angegebene E-Mail-Adresse mit den Formulardaten.

            // Beispiel: (ersetze mit deinem eigenen E-Mail-Versand-Code)
            console.log(`E-Mail an ${email} mit Beitragszahlung ${beitragszahlung} gesendet.`);
        });
    </script>
</body>
</html>
