class Project {
  constructor(id, link, name, tech) {
    this.id = id;
    this.link = link;
    this.name = name;
    this.tech = tech;
  }
}

class Job {
  constructor(
    id,
    proffesion,
    company,
    branch,
    dateHired,
    dateFired,
    city,
    country,
    responsibilities,
    address1,
    address2
  ) {
    this.id = id;
    this.proffesion = proffesion;
    this.company = company;
    this.branch = branch;
    this.dateHired = dateHired;
    this.dateFired = dateFired;
    this.city = city;
    this.country = country;
    this.responsibilities = responsibilities;
    this.address1 = address1;
    this.address2 = address2;
  }
}

class School {
  constructor(id, school, field, dateStarted, dateFinished, city, country) {
    this.id = id;
    this.school = school;
    this.field = field;
    this.dateStarted = dateStarted;
    this.dateFinished = dateFinished;
    this.city = city;
    this.country = country;
  }
}

class Person {
  constructor(
    name,
    field,
    about,
    projects,
    jobs,
    edu,
    photo,
    photoDesc,
    phone,
    email,
    techSkills,
    softSkills,
    signature,
    profPic
  ) {
    this.fullName = name;
    this.field = field;
    this.about = about;
    this.projects = projects;
    this.jobs = jobs;
    this.edu = edu;
    this.photo = photo;
    this.photoDesc = photoDesc;
    this.phone = phone;
    this.email = email;
    this.techSkills = techSkills;
    this.softSkills = softSkills;
    this.signature = signature;
    this.profPic = profPic;
  }
}

const me = new Person(
  "",
  "",
  "",
  Array(),
  Array(),
  Array(),
  "",
  "",
  "",
  "",
  Array(),
  Array(),
  "",
  ""
);

var linkCount;

var jobCount;

var schoolCount;

var starthead;

var startbody;

function init() {
  linkCount = 0;

  jobCount = 0;

  schoolCount = 0;

  starthead = document.head.innerHTML;
}

function saveBasics() {
  me.fullName = document.getElementById("name").value;
  me.field = document.getElementById("proffesion").value;
  me.about = document.getElementById("about").value;
  me.signature = document.getElementById("signature").value;
  document.getElementById("save-basics").value = "nadpisz";
}

function addLink() {
  if (linkCount == 0) {
    me.projects = Array();
  }

  me.projects[linkCount] = new Project(
    linkCount,
    document.getElementById("link").value,
    document.getElementById("project-name").value,
    document.getElementById("skills").value
  );

  document.getElementById("link").value = "";
  document.getElementById("project-name").value = "";
  document.getElementById("skills").value = "";

  linkCount++;
}

function editLink(elem) {
  var linkId = elem.parentNode.id;

  //dodać values
  document.getElementById(linkId).innerHTML =
    "<input type='text' id='edit-" +
    linkId +
    "-name' placeholder='nazwa'><input type='text' id='edit-" +
    linkId +
    "-link' placeholder='link'><input type='text' id='edit-" +
    linkId +
    "-tech' placeholder='umiejętności'><input type='submit' id='" +
    linkId +
    "' value='OK' onclick='overwriteLink(this)'><input type='submit' value='anuluj' onclick='display()'>";
}

function overwriteLink(elem) {
  var linkId = elem.id;
  var id = linkId.substr(4, linkId.length);

  me.projects[id].name = document.getElementById(
    "edit-" + linkId + "-name"
  ).value;
  me.projects[id].link = document.getElementById(
    "edit-" + linkId + "-link"
  ).value;
  me.projects[id].tech = document.getElementById(
    "edit-" + linkId + "-tech"
  ).value;

  display();
}

function deleteLink(elem) {
  var linkId = elem.parentNode.id;
  var id = linkId.substr(4, linkId.length);

  var projects = Array();

  for (var i = 0; i < me.projects.length; i++) {
    if (i != id) projects.push(me.projects[i]);
  }

  me.projects = projects;

  linkCount--;

  display();
}

function addJob() {
  if (jobCount == 0) {
    me.jobs = Array();
  }

  var resps = Array();
  var resp = "";
  for (var c of document.getElementById("resps").value) {
    if (c == ",") {
      resps.push(resp);
      resp = "";
    } else {
      resp += c;
    }
  }
  resps.push(resp);
  document.getElementById("resps").value = "";

  me.jobs[jobCount] = new Job(
    jobCount,
    document.getElementById("occupation").value,
    document.getElementById("company").value,
    document.getElementById("branch").value,
    document.getElementById("date-hired").value,
    document.getElementById("date-fired").value,
    document.getElementById("job-city").value,
    document.getElementById("job-country").value,
    resps,
    document.getElementById("address1").value,
    document.getElementById("address2").value
  );

  document.getElementById("occupation").value = "";
  document.getElementById("company").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("date-hired").value = "";
  document.getElementById("date-fired").value = "";
  document.getElementById("job-city").value = "";
  document.getElementById("job-country").value = "";
  document.getElementById("address1").value = "";
  document.getElementById("address2").value = "";

  jobCount++;
}

function editJob(elem) {
  var jobId = elem.parentNode.id;

  //dodać values
  document.getElementById(jobId).innerHTML =
    "<input type='text' id='edit-" +
    jobId +
    "-occupation' placeholder='zajęcie'><input type='text' id='edit-" +
    jobId +
    "-company' placeholder='nazwa firmy'><input type='text' id='edit-" +
    jobId +
    "-branch' placeholder='branża'><input type='text' id='edit-" +
    jobId +
    "-date-hired' placeholder='kiedy zaczęto'><input type='text' id='edit-" +
    jobId +
    "-date-fired' placeholder='kiedy skończono'><input type='text' id='edit-" +
    jobId +
    "-job-city' placeholder='miasto'><input type='text' id='edit-" +
    jobId +
    "-job-country' placeholder='kraj'><input type='text' id='edit-" +
    jobId +
    "-resps' placeholder='obowiązek1, obowiązek2...'><input type='text' id='edit-" +
    jobId +
    "-address1' placeholder='adres linia 1'><input type='text' id='edit-" +
    jobId +
    "-address2' placeholder='adres linia 2'><input type='submit' id='" +
    jobId +
    "' value='OK' onclick='overwriteJob(this)'><input type='submit' value='anuluj' onclick='display()'>";
}

function overwriteJob(elem) {
  var jobId = elem.id;
  console.log(jobId);
  var id = jobId.substr(3, jobId.length);
  console.log(id);

  me.jobs[id].proffesion = document.getElementById(
    "edit-" + jobId + "-occupation"
  ).value;
  me.jobs[id].company = document.getElementById(
    "edit-" + jobId + "-company"
  ).value;
  me.jobs[id].branch = document.getElementById(
    "edit-" + jobId + "-branch"
  ).value;
  me.jobs[id].dateHired = document.getElementById(
    "edit-" + jobId + "-date-hired"
  ).value;
  me.jobs[id].dateFired = document.getElementById(
    "edit-" + jobId + "-date-fired"
  ).value;
  me.jobs[id].city = document.getElementById(
    "edit-" + jobId + "-job-city"
  ).value;
  me.jobs[id].country = document.getElementById(
    "edit-" + jobId + "-job-country"
  ).value;

  var resps = Array();
  var resp = "";
  for (var c of document.getElementById("edit-" + jobId + "-resps").value) {
    if (c == ",") {
      resps.push(resp);
      resp = "";
    } else {
      resp += c;
    }
  }
  resps.push(resp);
  me.jobs[id].responsibilities = resps;

  me.jobs[id].address1 = document.getElementById(
    "edit-" + jobId + "-address1"
  ).value;
  me.jobs[id].address2 = document.getElementById(
    "edit-" + jobId + "-address2"
  ).value;

  display();
}

function deleteJob(elem) {
  var jobId = elem.parentNode.id;
  var id = jobId.substr(3, jobId.length);

  var jobs = Array();

  for (var i = 0; i < me.jobs.length; i++) {
    if (i != id) jobs.push(me.jobs[i]);
  }

  me.jobs = jobs;

  jobCount--;

  display();
}

function addSchool() {
  if (schoolCount == 0) {
    me.edu = Array();
  }

  me.edu[schoolCount] = new School(
    schoolCount,
    document.getElementById("school").value,
    document.getElementById("field").value,
    document.getElementById("date-started").value,
    document.getElementById("date-finished").value,
    document.getElementById("school-city").value,
    document.getElementById("school-country").value
  );

  document.getElementById("school").value = "";
  document.getElementById("field").value = "";
  document.getElementById("date-started").value = "";
  document.getElementById("date-finished").value = "";
  document.getElementById("school-city").value = "";
  document.getElementById("school-country").value = "";

  schoolCount++;
}

function editSchool(elem) {
  var schoolId = elem.parentNode.id;

  //dodać values
  document.getElementById(schoolId).innerHTML =
    "<input type='text' id='edit-" +
    schoolId +
    "-school' placeholder='nazwa szkoły'><input type='text' id='edit-" +
    schoolId +
    "-field' placeholder='profil/kierunek'><input type='text' id='edit-" +
    schoolId +
    "-date-started' placeholder='data rozpoczęcia'><input type='text' id='edit-" +
    schoolId +
    "-date-finished' placeholder='data zakończenia'><input type='text' id='edit-" +
    schoolId +
    "-school-city' placeholder='miasto'><input type='text' id='edit-" +
    schoolId +
    "-school-country' placeholder='kraj'><input type='submit' id='" +
    schoolId +
    "' value='OK' onclick='overwriteSchool(this)'><input type='submit' value='anuluj' onclick='display()'>";
}

function overwriteSchool(elem) {
  var schoolId = elem.id;
  var id = schoolId.substr(6, schoolId.length);

  me.edu[id].school = document.getElementById(
    "edit-" + schoolId + "-school"
  ).value;
  me.edu[id].field = document.getElementById(
    "edit-" + schoolId + "-field"
  ).value;
  me.edu[id].dateStarted = document.getElementById(
    "edit-" + schoolId + "-date-started"
  ).value;
  me.edu[id].dateFinished = document.getElementById(
    "edit-" + schoolId + "-date-finished"
  ).value;
  me.edu[id].city = document.getElementById(
    "edit-" + schoolId + "-school-city"
  ).value;
  me.edu[id].country = document.getElementById(
    "edit-" + schoolId + "-school-country"
  ).value;

  display();
}

function deleteSchool(elem) {
  var schoolId = elem.parentNode.id;
  var id = schoolId.substr(6, schoolId.length);

  var edu = Array();

  for (var i = 0; i < me.edu.length; i++) {
    if (i != id) edu.push(me.edu[i]);
  }

  me.edu = edu;

  schoolCount--;

  display();
}

function savePhotos() {
  me.photo = document.getElementById("photo").value;
  me.photoDesc = document.getElementById("photo-desc").value;
  me.profPic = document.getElementById("profile-pic").value;
  document.getElementById("save-photos").value = "nadpisz";
}

function saveContacts() {
  me.phone = document.getElementById("phone").value;
  me.email = document.getElementById("email").value;
  document.getElementById("save-contacts").value = "nadpisz";
}

function saveSkills() {
  var techs = Array();
  var softs = Array();
  var skill = "";

  for (var c of document.getElementById("hard-skills").value) {
    if (c == ",") {
      techs.push(skill);
      skill = "";
    } else {
      skill += c;
    }
  }
  techs.push(skill);
  skill = "";

  for (var c of document.getElementById("soft-skills").value) {
    if (c == ",") {
      softs.push(skill);
      skill = "";
    } else {
      skill += c;
    }
  }
  softs.push(skill);

  me.techSkills = techs;
  me.softSkills = softs;

  document.getElementById("save-skills").value = "nadpisz";
}

function saveToDB() {
  // Dane z obiektu me.jobs
  var jobsData = JSON.stringify(me.jobs);

  // Dane z tablicy projects
  var projectsData = JSON.stringify(me.projects);

  // Dane z tablicy edu
  var eduData = JSON.stringify(me.edu);

  // Dane z pól tekstowych
  var basicsData =
    "name=" +
    encodeURIComponent(me.fullName) +
    "&profession=" +
    encodeURIComponent(me.field) +
    "&about=" +
    encodeURIComponent(me.about) +
    "&signature=" +
    encodeURIComponent(me.signature) +
    "&photo=" +
    encodeURIComponent(me.photo) +
    "&photoDesc=" +
    encodeURIComponent(me.photoDesc) +
    "&profPic=" +
    encodeURIComponent(me.profPic) +
    "&phone=" +
    encodeURIComponent(me.phone) +
    "&email=" +
    encodeURIComponent(me.email) +
    "&techSkills=" +
    encodeURIComponent(me.techSkills) +
    "&softSkills=" +
    encodeURIComponent(me.softSkills);

  // Wysyłanie danych POST za pomocą fetch()
  fetch("./backend.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      basicsData +
      "&jobs=" +
      encodeURIComponent(jobsData) +
      "&projects=" +
      encodeURIComponent(projectsData) +
      "&edu=" +
      encodeURIComponent(eduData),
  })
    .then((response) => {
      // Obsługa odpowiedzi serwera
      console.log("Dane zapisane.");
    })
    .catch((error) => {
      console.error("Wystąpił błąd podczas zapisywania danych:", error);
    });
}

function selectFromDB() {
  const element = new Person();
  console.log("Test.");

  fetch("./backend.php?selected=true")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("proffesion").value = data.profession;
      document.getElementById("about").value = data.about;
      document.getElementById("signature").value = data.signature;
      document.getElementById("project-name").value = data.title;
      document.getElementById("link").value = data.url;
      document.getElementById("skills").value = data.description;
      document.getElementById("occupation").value = data.jobProfession;
      document.getElementById("company").value = data.company;
      document.getElementById("branch").value = data.branch;
      document.getElementById("date-hired").value = data.dateHired;
      document.getElementById("date-fired").value = data.dateFired;
      document.getElementById("job-city").value = data.jobCity;
      document.getElementById("job-country").value = data.jobCountry;
      document.getElementById("resps").value = data.responsibilities;
      document.getElementById("address1").value = data.address1;
      document.getElementById("address2").value = data.address2;
      document.getElementById("school").value = data.school;
      document.getElementById("field").value = data.field;
      document.getElementById("date-started").value = data.dateStart;
      document.getElementById("date-finished").value = data.dateEnd;
      document.getElementById("school-city").value = data.eduCity;
      document.getElementById("school-country").value = data.eduCountry;
      document.getElementById("photo").value = data.photoUrl;
      document.getElementById("photo-desc").value = data.photoDesc;
      document.getElementById("profile-pic").value = data.profilePic;
      document.getElementById("phone").value = data.phone;
      document.getElementById("email").value = data.email;
      document.getElementById("hard-skills").value = data.techSkills;
      document.getElementById("soft-skills").value = data.softSkills;
      document.getElementById("address1").value = data.address1;
      document.getElementById("address2").value = data.address2;

      //tak się odwoływać do wielokrotnych danych z bazy
      console.log(data.projects[0].title);
      console.log(data.projects[1].title);
      console.log(data.projects[2].title);

      console.log("Dane zostały wczytane z bazy danych i wstawione do pól.");
    })
    .catch((error) => {
      console.error("Wystąpił błąd:", error);
    });

  me = data;

  document.getElementById("save-basics").value = "nadpisz";
  document.getElementById("save-photos").value = "nadpisz";
  document.getElementById("save-contacts").value = "nadpisz";
  display();
}

function display() {
  document.getElementById("data-disp").innerHTML =
    "<h4>podstawowe dane</h4><p><strong>imie i nazwisko: </strong>" +
    me.fullName +
    "<strong>, zawód: </strong>" +
    me.field +
    "<strong>, o mnie: </strong>" +
    me.about +
    "</p><img src='" +
    me.signature +
    "' alt='podpis'><p><strong>^podpis^</strong></p>";

  var linkList = "";
  if (linkCount > 0) {
    linkList += "<ul>";
    for (var project of me.projects) {
      linkList +=
        "<li id='link" +
        project.id +
        "'>" +
        project.name +
        ", " +
        project.tech +
        ", <a href='" +
        project.link +
        "'>link</a><input type='submit' value='edit' onclick='editLink(this)'><input type='submit' value='delete' onclick='deleteLink(this)'></li>";
    }
    linkList += "</ul>";
  }

  document.getElementById("data-disp").innerHTML += "<h4>linki</h4>" + linkList;

  var jobList = "";
  if (jobCount > 0) {
    jobList += "<ul>";
    for (var job of me.jobs) {
      resps = "";

      for (resp of job.responsibilities) {
        resps += resp + ", ";
      }

      resps = resps.substr(0, resps.length - 2);

      jobList +=
        "<li id='job" +
        job.id +
        "'>" +
        job.proffesion +
        " at " +
        job.company +
        " specialized in " +
        job.branch +
        ", hired from " +
        job.dateHired +
        " to " +
        job.dateFired +
        ". located in " +
        job.city +
        ", " +
        job.country +
        ". having had responsibilities such as: " +
        resps +
        ". company address: " +
        job.address1 +
        " " +
        job.address2 +
        "<input type='submit' value='edit' onclick='editJob(this)'><input type='submit' value='delete' onclick='deleteJob(this)'></li>";
    }
    jobList += "</ul>";
  }

  document.getElementById("data-disp").innerHTML +=
    "<h4>doswiadczenie zawodowe</h4>" + jobList;

  var schoolList = "";
  if (schoolCount > 0) {
    schoolList += "<ul>";
    for (var school of me.edu) {
      schoolList +=
        "<li id='school" +
        school.id +
        "'><strong>Szkoła: </strong>" +
        school.school +
        ", <strong>profil/kierunek </strong>" +
        school.field +
        ", <strong> uczyłem/am się od</strong> " +
        school.dateStarted +
        " <strong>do</strong> " +
        school.dateFinished +
        ", <strong>miasto</strong> " +
        school.city +
        ", <strong>państwo</strong> " +
        school.country +
        "<input type='submit' value='edit' onclick='editSchool(this)'><input type='submit' value='delete' onclick='deleteSchool(this)'></li>";
    }
    schoolList += "</ul>";
  }

  document.getElementById("data-disp").innerHTML +=
    "<h4>edukacja</h4>" + schoolList;

  document.getElementById("data-disp").innerHTML +=
    "<h4>zdjęcia</h4><p><strong>zdjęcie główne: <img src='" +
    me.photo +
    "' alt='" +
    me.photoDesc +
    "'><br>zdjęcie profilowe: <img src='" +
    me.profPic +
    "'></strong></p>";

  document.getElementById("data-disp").innerHTML +=
    "<h4>kontakt</h4><p><strong>telefon:</strong> " +
    me.phone +
    "<strong>, e-mail: </strong>" +
    me.email +
    "</p>";

  var skillList = "<p><strong>Umiejętności twarde: </strong>";
  for (skill of me.techSkills) {
    skillList += skill + ", ";
  }
  skillList += "</p><p><strong>Umiejętności miękkie: </strong>";
  for (skill of me.softSkills) {
    skillList += skill + ", ";
  }
  skillList = skillList.substr(0, skillList.length - 2) + "</p>";

  document.getElementById("data-disp").innerHTML +=
    "<h4>umiejętności</h4>" + skillList;

  document.getElementById("save").innerHTML =
    '<input type="submit" value="zapisz do bazy danych" onclick="saveToDB()"><input type="submit" value="odśwież" onclick="display()">';
}

function fillGoITFigma() {
  startbody = document.body.innerHTML;

  var techSkills = "";
  var softSkills = "";

  if (me.techSkills[0] != "") {
    techSkills = "<h2>Tech Skills</h2><ul>";
    for (var i = 0; i < me.techSkills.length; i++) {
      techSkills += "<li>" + me.techSkills[i] + "</li>";
    }
    techSkills += "</ul>";
  }

  if (me.softSkills[0] != "") {
    softSkills = "<h2>Soft Skills</h2><ul>";
    for (var i = 0; i < me.softSkills.length; i++) {
      softSkills += "<li>" + me.softSkills[i] + "</li>";
    }
    softSkills += "</ul>";
  }

  var projHead = "";
  var projCol1 = "";
  var projCol3 = "";

  if (me.projects[0] != "") {
    projHead = "<h2>Links</h2>";
    for (var i = 0; i < me.projects.length; i++) {
      var project = me.projects[i].name;
      var dots = "";

      if (project.length > 58) {
        project = project.substr(0, 55) + "...";
      } else {
        for (var j = 0; j < 58 - project.length; j++) {
          dots += ".";
        }
      }

      projCol1 +=
        "<li><span class='text-wall'><a href='" +
        me.projects[i].link +
        "'>" +
        project +
        "</a>" +
        dots +
        "</span></li>";

      var tech = me.projects[i].tech;
      if (tech.length > 15) {
        tech = tech.substr(0, 12) + "...";
      }
      projCol3 +=
        "<li><b>[</b><span class='text-wall'>" + tech + "</span><b>]</b></li>";
    }
  }

  var exp = "";
  if (me.jobs[0] != "") {
    exp = "<h2>Work Experience</h2>";
    for (var i = 0; i < me.jobs.length; i++) {
      exp +=
        "<div class='element'><h3>" +
        me.jobs[i].proffesion +
        " <span class='company-name'>" +
        me.jobs[i].company +
        "</span></h3><h5><span class='text-wall'>" +
        me.jobs[i].dateHired +
        " - " +
        me.jobs[i].dateFired +
        "</span> | <span class='text-wall'>" +
        me.jobs[i].city +
        ", " +
        me.jobs[i].country +
        "</span></h5><ul>";
      if (me.jobs[i].responsibilities[0] != "") {
        for (var j = 0; j < me.jobs[i].responsibilities.length; j++) {
          exp += "<li class='text-wall'>" + me.jobs[i].responsibilities[j];
          +"</li>";
        }
      }

      exp += "</ul></div>";
    }
  }

  var edu = "";
  if (me.edu[0] != "") {
    edu = "<h2>Education</h2>";
    for (var i = 0; i < me.edu.length; i++) {
      edu +=
        "<div class='element'><h3 class='company-name'>" +
        me.edu[i].school +
        "</h3><h4>" +
        me.edu[i].field +
        "</h4><h5><span class='text-wall'>" +
        me.edu[i].dateStarted +
        " - " +
        me.edu[i].dateFinished +
        "</span> | <span class='text-wall'>" +
        me.edu[i].city +
        ", " +
        me.edu[i].country +
        "</span></h5></div>";
    }
  }

  document.head.innerHTML =
    "<meta charset='UTF-8' /><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><script src='./script.js'></script><link rel='stylesheet' href='./goit-style.css'></link><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>";

  document.title = "CV";

  document.body.innerHTML =
    "<aside><div><img src='" +
    me.photo +
    "' width='370' alt='" +
    me.photoDesc +
    "'></div><div id='sidepane'><section><h2>Contacts</h2><div><span><i class='fa fa-phone'></i> <a href='tel:" +
    me.phone +
    "'>" +
    me.phone +
    "</a></span></div><div><span><i class='fa fa-envelope'></i> <a href='mailto:" +
    me.email +
    "'>" +
    me.email +
    "</a></span></div></section><section>" +
    techSkills +
    "</section><section>" +
    softSkills +
    "</section></div></aside><main><section><h4>" +
    me.field +
    "</h4><h1>" +
    me.fullName +
    "</h1><p class='text-wall'>" +
    me.about +
    "</p></section><section>" +
    projHead +
    "<div id='projects' class='element'><ol>" +
    projCol1 +
    "</ol><ul>" +
    projCol3 +
    "</ul></div></section><section id='exp'>" +
    exp +
    "</section><section id='edu'>" +
    edu +
    "</section></main>";
}

function fillCodersLabCard() {
  startbody = document.body.innerHTML;

  document.head.innerHTML =
    "<meta charset='UTF-8' /><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><script src='./script.js'></script><link rel='stylesheet' href='./codlab-style.css'></link><link href='https://fonts.cdnfonts.com/css/copperplate' rel='stylesheet'><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>";

  document.title = "Moja wizytówka";

  var links = "";
  if (me.projects[0] != "") {
    for (var project of me.projects) {
      links +=
        "<a href='" +
        project.link +
        "' class='info-contact-social'>" +
        project.name +
        "</a>";
    }
  }

  document.body.innerHTML = "";
  document.body.innerHTML =
    '<div class="card"><header class="header"><img src="' +
    me.profPic +
    '" alt="Zdjęcie profilowe" class="header-profile-img" /><div class="header-profile"><h1>' +
    me.fullName +
    "</h1><div>" +
    me.field +
    '</div></div></header><section class="info"><img src="' +
    me.photo +
    '" alt="' +
    me.photoDesc +
    '" class="info-picture" /><div class="info-content"><h2>About Me</h2><h3 class="info-headline">I Am a <span>' +
    me.field +
    "</span> based in " +
    me.jobs[0].city +
    "</h3><p>" +
    me.about +
    '</p><img src="' +
    me.signature +
    '" alt="Podpis" class="info-signature" /><div class="info-contact"><a href="mailto:' +
    me.email +
    '" class="info-contact-btn"><i class="fa fa-envelope"></i>Mail me!</a>' +
    links +
    "</div></div></section></div>";
}

function fillAmPsychCard() {
  startbody = document.body.innerHTML;

  document.head.innerHTML =
    "<meta charset='UTF-8' /><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><script src='./script.js'></script><link href='https://fonts.cdnfonts.com/css/copperplate' rel='stylesheet'></link><link rel='stylesheet' href='./ampsych-style.css'></link>";

  document.title = "Moja wizytówka :)";

  var upper = false;
  var name = "";
  for (var c of me.fullName) {
    if (c == " ") {
      upper = true;
    }
    if (upper == true) {
      c = c.toUpperCase();
    }
    name += c;
  }

  document.body.innerHTML = "";
  document.body.innerHTML =
    "<div id='info'><div id='contact'><a href='tel:" +
    me.phone +
    "'>" +
    me.phone +
    "</a></div><div id='company'>" +
    me.jobs[0].company +
    "<br><span>" +
    me.jobs[0].branch +
    "</span></div></div><div id='me'>" +
    name +
    "<br>" +
    me.jobs[0].proffesion +
    "</div><div id='adr-and-fax'>" +
    me.jobs[0].address1 +
    ", " +
    me.jobs[0].city +
    ", " +
    me.jobs[0].address2 +
    ", " +
    me.jobs[0].country +
    "</div>";
}

function refillStart() {
  document.head = starthead;
  document.body = startbody;
}
