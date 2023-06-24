<?php
// Ustawienie nagłówka Content-Type na text/html
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

    // Formatuj dane w postaci ci�gu znak�w
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
        die("Nieudane po��czenie z baz� danych: " . $conn->connect_error);
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
        echo "Tabela 'Dane' zosta�a utworzona lub ju� istnieje.<br>";
    } else {
        echo "B��d tworzenia tabeli 'Dane': " . $conn->error;
    }

    if ($conn->query($createTablePrace) === TRUE) {
        echo "Tabela 'Prace' zosta�a utworzona lub ju� istnieje.<br>";
    } else {
        echo "B��d tworzenia tabeli 'Prace': " . $conn->error;
    }

    if ($conn->query($createTableProjects) === TRUE) {
        echo "Tabela 'Projects' zosta�a utworzona lub ju� istnieje.<br>";
    } else {
        echo "B��d tworzenia tabeli 'Projects': " . $conn->error;
    }

    if ($conn->query($createTableEdu) === TRUE) {
        echo "Tabela 'Edu' zosta�a utworzona lub ju� istnieje.<br>";
    } else {
        echo "B��d tworzenia tabeli 'Edu': " . $conn->error;
    }
    
    $sql = "INSERT INTO Dane (name, profession, about, signature, photoUrl, photoDesc, profilePic, phone, email, techSkills, softSkills) VALUES ('$name', '$profession', '$about', '$signature', '$photoUrl', '$photoDesc', '$profilePic', '$phone', '$email', '$techSkills', '$softSkills')";

    if ($conn->query($sql) === TRUE) {
        echo "Dane zosta�y dodane do tabeli 'Dane'.<br>";
    } else {
        echo "B��d dodawania danych do tabeli 'Dane': " . $conn->error;
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
            echo "B��d dodawania danych do tabeli 'Prace': " . $conn->error;
        }
    }

    echo "Dane zosta�y dodane do tabeli 'Prace'.<br>";

        $projects = json_decode($projectsData, true); // Dekodowanie danych z tablicy projects

    foreach ($projects as $project) {
        $projectTitle = $project['name'];
        $projectDescription = $project['tech'];
        $projectUrl = $project['link'];

        $insertProjectSQL = "INSERT INTO Projects (title, description, url, dane_id) VALUES ('$projectTitle', '$projectDescription', '$projectUrl', '$daneId')";

        if ($conn->query($insertProjectSQL) !== TRUE) {
            echo "B��d dodawania danych do tabeli 'Projects': " . $conn->error;
        }
    }

    echo "Dane zosta�y dodane do tabeli 'Projects'.<br>";
    
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
            echo "B��d dodawania danych do tabeli 'Edu': " . $conn->error;
        }
    }

    echo "Dane zosta�y dodane do tabeli 'Edu'.<br>";
    
    $conn->close();
}

if(isset($_GET['selected']) && $_GET['selected'] === 'true')
{
 $filename = 'plik.txt';

$file = fopen($filename, 'w'); // Otwiera plik w trybie zapisu (tworzy go, jeśli nie istnieje)

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cvmaker";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Nieudane połączenie z bazą danych: " . $conn->connect_error);
}

// Zapytanie SQL
$sql = "SELECT d.name, d.profession, d.about, d.signature, p.title, p.description, p.url, d.techSkills, d.softSkills, pr.profession AS jobProfession, pr.company, pr.branch, pr.dateHired, pr.dateFired, pr.city AS jobCity, pr.country AS jobCountry, pr.responsibilities, e.field, e.school, e.dateStart, e.dateEnd, e.city AS eduCity, e.country AS eduCountry, d.photoUrl, d.photoDesc, d.profilePic, d.phone, d.email, pr.address1, pr.address2
    FROM Dane d
    LEFT JOIN Prace pr ON d.id = pr.dane_id
    LEFT JOIN Projects p ON d.id = p.dane_id
    LEFT JOIN Edu e ON d.id = e.dane_id
    WHERE d.id = 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Tworzenie tablicy wynikowej
    $data = $result->fetch_assoc();
    mysqli_data_seek($result, 0);
    // Pobieranie wszystkich prac dla danej osoby
    $jobs = array();
    $projects = array();
    $edu = array();
    
    while ($row = $result->fetch_assoc()) {
        if (!empty($row['jobProfession'])) {
            $job = array(
                'jobProfession' => $row['jobProfession'],
                'company' => $row['company'],
                'branch' => $row['branch'],
                'dateHired' => $row['dateHired'],
                'dateFired' => $row['dateFired'],
                'jobCity' => $row['jobCity'],
                'jobCountry' => $row['jobCountry'],
                'responsibilities' => $row['responsibilities']
            );
            $jobs[] = $job;
        }
        
        if (!empty($row['title'])) {
            $project = array(
                'title' => $row['title'],
                'description' => $row['description'],
                'url' => $row['url']
            );
            $projects[] = $project;
        }
        
        if (!empty($row['field'])) {
            $eduItem = array(
                'field' => $row['field'],
                'school' => $row['school'],
                'dateStart' => $row['dateStart'],
                'dateEnd' => $row['dateEnd'],
                'eduCity' => $row['eduCity'],
                'eduCountry' => $row['eduCountry']
            );
            $edu[] = $eduItem;
        }
    }
    
    // Przesunięcie wskaźnika wiersza rezultatu na początek
    
    
    // Dodawanie pracy, projektów i edukacji do danych głównych
    $data['jobs'] = $jobs;
    $data['projects'] = $projects;
    $data['edu'] = $edu;

    // Zapis wyników do pliku txt
    $fileContent = json_encode($data);
    fwrite($file, $fileContent);

    // Zwracanie wyników w formacie JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "Brak danych w bazie.";
}

fclose($file);
$conn->close();


}
?>