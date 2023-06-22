<?php
// Ustawienie nag³ówka Content-Type na text/html
header('Content-Type: text/html');




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $profession = $_POST["profession"];
    $about = $_POST["about"];
    $signature = $_POST["signature"];
    $jobsData = $_POST["jobs"];
    $projectsData = $_POST["projects"];
    $eduData = $_POST["edu"];
    $photoUrl = $_POST["photo"];
    $photoDesc = $_POST["photoDesc"];
    $profilePic = $_POST["profPic"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $techSkills = $_POST["techSkills"];
    $softSkills = $_POST["softSkills"];

    
    //test danych
    /*
    $file = './data.txt';

    // Formatuj dane w postaci ci¹gu znaków
    $content = $photoUrl .
               $photoDesc .
               $profilePic .
               $phone .
               $email .
               $techSkills .
               $softSkills;

    // Zapisz dane do pliku
    file_put_contents($file, $content);
    */
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cvmaker";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Nieudane po³¹czenie z baz¹ danych: " . $conn->connect_error);
    }

    $createTableDane = "CREATE TABLE IF NOT EXISTS Dane (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        profession VARCHAR(50) NOT NULL,
        about TEXT NOT NULL,
        signature VARCHAR(255) NOT NULL,
        photoUrl VARCHAR(255) NOT NULL,
        photoDesc TEXT NOT NULL,
        profilePic VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        techSkills TEXT NOT NULL,
        softSkills TEXT NOT NULL
    )";
    
    $createTablePrace = "CREATE TABLE IF NOT EXISTS Prace (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        profession VARCHAR(50) NOT NULL,
        company VARCHAR(50) NOT NULL,
        branch VARCHAR(50) NOT NULL,
        dateHired VARCHAR(50) NOT NULL,
        dateFired VARCHAR(50) NOT NULL,
        city VARCHAR(50) NOT NULL,
        country VARCHAR(50) NOT NULL,
        responsibilities TEXT NOT NULL,
        address1 VARCHAR(255) NOT NULL,
        address2 VARCHAR(255) NOT NULL,
        dane_id INT(6) UNSIGNED,
        FOREIGN KEY (dane_id) REFERENCES Dane(id) ON DELETE CASCADE
    )";
    
    $createTableProjects = "CREATE TABLE IF NOT EXISTS Projects (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        url VARCHAR(255) NOT NULL,
        dane_id INT(6) UNSIGNED,
        FOREIGN KEY (dane_id) REFERENCES Dane(id) ON DELETE CASCADE
    )";

    $createTableEdu = "CREATE TABLE IF NOT EXISTS Edu (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        field VARCHAR(50) NOT NULL,
        school VARCHAR(50) NOT NULL,
        dateStart VARCHAR(50) NOT NULL,
        dateEnd VARCHAR(50) NOT NULL,
        city VARCHAR(50) NOT NULL,
        country VARCHAR(50) NOT NULL,
        dane_id INT(6) UNSIGNED,
        FOREIGN KEY (dane_id) REFERENCES Dane(id) ON DELETE CASCADE
    )";


    
    
    if ($conn->query($createTableDane) === TRUE) {
        echo "Tabela 'Dane' zosta³a utworzona lub ju¿ istnieje.<br>";
    } else {
        echo "B³¹d tworzenia tabeli 'Dane': " . $conn->error;
    }

    if ($conn->query($createTablePrace) === TRUE) {
        echo "Tabela 'Prace' zosta³a utworzona lub ju¿ istnieje.<br>";
    } else {
        echo "B³¹d tworzenia tabeli 'Prace': " . $conn->error;
    }

    if ($conn->query($createTableProjects) === TRUE) {
        echo "Tabela 'Projects' zosta³a utworzona lub ju¿ istnieje.<br>";
    } else {
        echo "B³¹d tworzenia tabeli 'Projects': " . $conn->error;
    }

    if ($conn->query($createTableEdu) === TRUE) {
        echo "Tabela 'Edu' zosta³a utworzona lub ju¿ istnieje.<br>";
    } else {
        echo "B³¹d tworzenia tabeli 'Edu': " . $conn->error;
    }
    
    $sql = "INSERT INTO Dane (name, profession, about, signature, photoUrl, photoDesc, profilePic, phone, email, techSkills, softSkills) VALUES ('$name', '$profession', '$about', '$signature', '$photoUrl', '$photoDesc', '$profilePic', '$phone', '$email', '$techSkills', '$softSkills')";

    if ($conn->query($sql) === TRUE) {
        echo "Dane zosta³y dodane do tabeli 'Dane'.<br>";
    } else {
        echo "B³¹d dodawania danych do tabeli 'Dane': " . $conn->error;
    }

    $daneId = $conn->insert_id; // Pobranie ID ostatnio wstawionego rekordu w tabeli 'Dane'

    $jobs = json_decode($jobsData, true); // Dekodowanie danych z tablicy jobs

    foreach ($jobs as $job) {
        $jobProfession = $job['proffesion'];
        $jobCompany = $job['company'];
        $jobBranch = $job['branch'];
        $jobDateHired = $job['dateHired'];
        $jobDateFired = $job['dateFired'];
        $jobCity = $job['city'];
        $jobCountry = $job['country'];
        $jobResponsibilities = implode(", ", $job['responsibilities']);
        $jobAddress1 = $job['address1'];
        $jobAddress2 = $job['address2'];

        $insertJobSQL = "INSERT INTO Prace (profession, company, branch, dateHired, dateFired, city, country, responsibilities, address1, address2, dane_id) VALUES ('$jobProfession', '$jobCompany', '$jobBranch', '$jobDateHired', '$jobDateFired', '$jobCity', '$jobCountry', '$jobResponsibilities', '$jobAddress1', '$jobAddress2', '$daneId')";

        if ($conn->query($insertJobSQL) !== TRUE) {
            echo "B³¹d dodawania danych do tabeli 'Prace': " . $conn->error;
        }
    }

    echo "Dane zosta³y dodane do tabeli 'Prace'.<br>";

        $projects = json_decode($projectsData, true); // Dekodowanie danych z tablicy projects

    foreach ($projects as $project) {
        $projectTitle = $project['name'];
        $projectDescription = $project['tech'];
        $projectUrl = $project['link'];

        $insertProjectSQL = "INSERT INTO Projects (title, description, url, dane_id) VALUES ('$projectTitle', '$projectDescription', '$projectUrl', '$daneId')";

        if ($conn->query($insertProjectSQL) !== TRUE) {
            echo "B³¹d dodawania danych do tabeli 'Projects': " . $conn->error;
        }
    }

    echo "Dane zosta³y dodane do tabeli 'Projects'.<br>";
    
        $edu = json_decode($eduData, true); // Dekodowanie danych z tablicy edu
    
    foreach ($edu as $eduItem) {
        $eduField = $eduItem['field'];
        $eduSchool = $eduItem['school'];
        $eduDateStart = $eduItem['dateStarted'];
        $eduDateEnd = $eduItem['dateFinished'];
        $eduCity = $eduItem['city'];
        $eduCountry = $eduItem['country'];

        $insertEduSQL = "INSERT INTO Edu (field, school, dateStart, dateEnd, city, country, dane_id) VALUES ('$eduField', '$eduSchool', '$eduDateStart', '$eduDateEnd', '$eduCity', '$eduCountry','$daneId')";

        if ($conn->query($insertEduSQL) !== TRUE) {
            echo "B³¹d dodawania danych do tabeli 'Edu': " . $conn->error;
        }
    }

    echo "Dane zosta³y dodane do tabeli 'Edu'.<br>";
    
    $conn->close();
}
?>