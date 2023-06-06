//klasy, obiekty flagowe, fill()

class Project {
  constructor(link, name, tech) {
    this.link = link;
    this.name = name;
    this.tech = tech;
  }
}

class Job {
  constructor(
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
  constructor(school, field, dateStarted, dateFinished, city, country) {
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

const me = new Person();

var linkCount;

var jobCount;

var schoolCount;

function init() {
  linkCount = 0;

  jobCount = 0;

  schoolCount = 0;
}

function saveBasics() {
  me.fullName = document.getElementById("name").value;
  me.field = document.getElementById("proffesion").value;
  me.about = document.getElementById("about").value;
  me.signature = document.getElementById("signature").value;
  document.getElementById("save-basics").value = "nadpisz";
}

function addLink() {
  if(linkCount == 0) {
    me.projects = Array();
  }

  me.projects[linkCount] = new Project(
    document.getElementById("link").value,
    document.getElementById("project-name").value,
    document.getElementById("skills").value,
  )
  
  document.getElementById("link").value = "";
  document.getElementById("project-name").value = "";
  document.getElementById("skills").value = "";

  linkCount++;
}

function editLink() {

}

function deleteLink() {

}

function addJob() {
  if (jobCount == 0) {
    me.jobs = Array();
  }

  var resps = Array();
  var resp = "";
  for (var c of document.getElementById("resps").value) {
    if (c == ',') {
      resps.push(resp);
      resp = "";
    } else {
      resp += c;
    }
  }
  resps.push(resp);
  document.getElementById("resps").value = "";

  me.jobs[jobCount] = new Job(
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

function editJob() {

}

function deleteJob() {

}

function addSchool() {
  if (schoolCount == 0) {
    me.edu = Array();
  }

  me.edu[schoolCount] = new School(
    document.getElementById("school").value,
    document.getElementById("field").value,
    document.getElementById("date-started").value,
    document.getElementById("date-finished").value,
    document.getElementById("school-city").value,
    document.getElementById("school-country").value
  )
  
  document.getElementById("school").value = "";
  document.getElementById("field").value = "";
  document.getElementById("date-started").value = "";
  document.getElementById("date-finished").value = "";
  document.getElementById("school-city").value = "";
  document.getElementById("school-country").value = "";

  schoolCount++;
}

function editSchool() {

}

function deleteSchool() {

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
    if (c == ',') {
      techs.push(skill);
      skill="";
    } else {
      skill += c;
    }
  }
  techs.push(skill);
  skill="";

  for (var c of document.getElementById("soft-skills").value) {
    if (c == ',') {
      softs.push(skill);
      skill="";
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
  //WITAJ JAKUBIE
}

function display() {
  document.getElementById("data-disp").innerHTML = "<h4>podstawowe dane</h4><p><strong>imie i nazwisko: </strong>" + me.fullName + "<strong>, zawód: </strong>" + me.field + "<strong>, o mnie: </strong>" + me.about + "</p><img src='" + me.signature + "' alt='podpis'><p><strong>^podpis^</strong></p>";

  var linkList = "";
  if (linkCount > 0) {
    linkList += "<ul>";
    for (var project of me.projects) {
      //ta pętla nie działą :(( czemu
      linkList += "<li>" + project.name + ", " + project.tech + ", " + project.link + "<input type='submit' value='edit' onclick='editLink()'><input type='submit' value='delete' onclick='deleteLink()'></li>";
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

      resps = resps.substr(0, resps.length-2);

      jobList += "<li>" + job.proffesion + " at " + job.company + " specialized in " + job.branch + ", hired from " + job.dateHired + " to " + job.dateFired + ". located in " + job.city + ", " + job.country + ". having had responsibilities such as: " + resps + ". company address: " + job.address1 + " " + job.address2 + "<input type='submit' value='edit' onclick='editJob()'><input type='submit' value='delete' onclick='deleteJob()'></li>";
    }
    jobList += "</ul>";
  }

  document.getElementById("data-disp").innerHTML += "<h4>doswiadczenie zawodowe</h4>" + jobList;

  var schoolList = "";
  if (schoolCount > 0) {
    schoolList += "<ul>";
    for (var school of me.edu) {
      schoolList += "<li><strong>Szkoła: </strong>" + school.school + ", <strong>profil/kierunek </strong>" + school.field + ", <strong> uczyłem/am się od</strong> " + school.dateStarted + " <strong>do</strong> " + school.dateFinished + ", <strong>miasto</strong> " + school.city + ", <strong>państwo</strong> " + school.country + "<input type='submit' value='edit' onclick='editSchool()'><input type='submit' value='delete' onclick='deleteSchool()'></li>";
    }
    schoolList += "</ul>";
  }

  document.getElementById("data-disp").innerHTML += "<h4>edukacja</h4>" + schoolList;

  document.getElementById("data-disp").innerHTML += "<h4>zdjęcia</h4><p><strong>zdjęcie główne: <img src='" + me.photo + "' alt='" + me.photoDesc + "'><br>zdjęcie profilowe: <img src='" + me.profPic + "'></strong></p>";

  document.getElementById("data-disp").innerHTML += "<h4>kontakt</h4><p><strong>telefon:</strong> " + me.phone + "<strong>e-mail: </strong>" + me.email + "</p>";

  var skillList = "<p><strong>Umiejętności twarde: </strong>";
  for (skill of me.techSkills) {
    skillList += skill + ", ";
  }
  skillList += "</p><p><strong>Umiejętności miękkie: </strong>";
  for (skill of me.softSkills) {
    skillList += skill + ", ";
  }
  skillList = skillList.substr(0, skillList.length-2) + "</p>";

  document.getElementById("data-disp").innerHTML += "<h4>umiejętności</h4>" + skillList;
}

function fillGoITFigma() {
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

  document.head.innerHTML +=
    "<link rel='stylesheet' href='./goit-style.css'></link><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>";

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

  document.head.innerHTML +=
    "<link rel='stylesheet' href='./codlab-style.css'></link><link href='https://fonts.cdnfonts.com/css/copperplate' rel='stylesheet'><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>";

  document.title = "Moja wizytówka";

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
  document.head.innerHTML += "<link href='https://fonts.cdnfonts.com/css/copperplate' rel='stylesheet'>"

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

  document.head.innerHTML +=
    "<link href='https://fonts.cdnfonts.com/css/copperplate' rel='stylesheet'><link rel='stylesheet' href='./ampsych-style.css'></link>";

  document.title = "Moja wizytówka :)";

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
