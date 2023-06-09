<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./script.js"></script>
    <script src="./backend.php"></script>
    <title>CV MAKER</title>
    <link rel='stylesheet' href='./start-style.css'></link>
    <?php
            include("./backend.php");
    ?>
</head>
  <body onload="init()">
    <div id="start">
      <h1>Witaj w przeglądarkowym kreatorze swojego CV!</h1>
      <h3>wprowadź dane</h3>
      <input type="submit" value="wczytaj z bazy danych" onclick="selectFromDB()">
      <div id="input-form">
        <div>
        <h4>podstawowe dane</h4>
        <input type="text" id="name" placeholder="twoje imie">
        <input type="text" id="proffesion" placeholder="twoj zawod">
        <input type="text" id="about" placeholder="krótko o tobie">
        <br>
        <input type="text" id="signature" placeholder="url podpisu">
        <input id="save-basics" type="submit" value="zapisz" onclick="saveBasics()">
        </div>
        <div id="links">
          <h4>link</h4>
          <input type="text" id="project-name" placeholder="nazwa projektu">
          <input type="text" id="link" placeholder="link do projektu">
          <input type="text" id="skills" placeholder="użyte umiejętności">
          <br>
          <input type="submit" value="dodaj" onclick="addLink()">
        </div>
        <div id="jobs">
          <h4>praca</h4>
          <input type="text" id="occupation" placeholder="zajęcie">
          <input type="text" id="company" placeholder="nazwa firmy">
          <input type="text" id="branch" placeholder="branża">
          <br>
          <input type="text" id="date-hired" placeholder="kiedy zacząłęś">
          <input type="text" id="date-fired" placeholder="kiedy skończyłeś">
          <input type="text" id="job-city" placeholder="miasto">
          <br>
          <input type="text" id="job-country" placeholder="kraj">
          <input type="text" id="resps" placeholder="obowiązek1, obowiązek2, obowiązek3">
          <input type="text" id="address1" placeholder="adres linia 1">
          <br>
          <input type="text" id="address2" placeholder="adres linia 2">
          <input type="submit" value="dodaj" onclick="addJob()">
        </div>
        <div id="edu">
          <h4>szkoła</h4>
          <input type="text" id="school" placeholder="nazwa szkoły">
          <input type="text" id="field" placeholder="profil/kierunek">
          <input type="text" id="date-started" placeholder="data rozpoczęcia">
          <br>
          <input type="text" id="date-finished" placeholder="data zakończenia">
          <input type="text" id="school-city" placeholder="miasto">
          <input type="text" id="school-country" placeholder="kraj">
          <br>
          <input type="submit" value="dodaj" onclick="addSchool()">
        </div>
        <div>
        <h4>zdjęcia</h4>
        <input type="text" id="photo" placeholder="url zdjęcia">
        <input type="text" id="photo-desc" placeholder="opis zdjęcia">
        <input type="text" id="profile-pic" placeholder="url zdjęcia profilowego">
        <br>
        <input id="save-photos" type="submit" value="zapisz" onclick="savePhotos()">
        </div>
        <div>
          <h4>kontakt</h4>
          <input type="text" id="phone" placeholder="telefon">
          <input type="text" id="email" placeholder="email">
          <input id="save-contacts" type="submit"   value="zapisz" onclick="saveContacts()">
          <h4>umiejętności</h4>
          <input type="text" id="hard-skills"   placeholder="umiejętności twarde">
          <input type="text" id="soft-skills"   placeholder="umiejętności miękkie">
          <input id="save-skills" type="submit" value="zapisz"  onclick="saveSkills()">
        </div>
      </div>
      <div id="data-disp">
      </div>
      <div id="saving">
        <h4>zapis</h4>
        <div id="save">
          <input type="submit" value="podgląd" onclick="display()">
        </div>
      </div>
      <div id="patterns">
        <h3>wybierz swój szablon cv:</h3>
        <p>(upewnij się, że zapisałeś swoje dane do bazy, jeśli taki był twój zamiar.)</p>
        <input type="submit" value="GoIT maraton"   onclick="fillGoITFigma();" />
        <input
          type="submit"
          value="CodersLab kurs"
          onclick="fillCodersLabCard();"
        />
        <input
          type="submit"
          value="American Psycho Card"
          onclick="fillAmPsychCard();"
        />
      </div>
    </div>
  </body>
</html>