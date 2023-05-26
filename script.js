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

const john = new Person(
  "Full Name",
  "Proffesion",
  "about",
  Array(
    new Project("https://example.com", "My examplar project", "Some technology")
  ),
  //work experience
  Array(
    new Job(
      "Occupation",
      "Company Name",
      "Branch",
      "Date Started",
      "Date Fired or Finished",
      "Company City",
      "Company Country",
      Array(
        "Your responsibilities in this job. Your responsibilities in this job. Your responsibilities in this job. Your responsibilities in this job. Your responsibilities in this job. ",
        "Your responsibilities in this job. "
      ),
      "",
      ""
    )
  ),
  //education
  Array(
    new School(
      "School Name",
      "Field of Study",
      "Date Started",
      "Date finished",
      "School City",
      "School Country"
    )
  ),
  "./img/john.png",
  "photo's alternative description",
  "+PH ONE NUM BER",
  "address@email.com",
  //hard skills
  Array("Skill 1"),
  //soft skills
  Array("Skill 1"),
  "",
  ""
);

const noone = new Person(
  "Noone",
  "Nobody",
  "Blank...",
  Array(""),
  Array(""),
  Array(""),
  "./img/noone.png",
  "nothing to see here",
  "00000000",
  "nobody@void.nw",
  Array(""),
  Array(""),
  "",
  "./img/noone.png"
);

function fillGoITFigma() {
  const me = patBat;

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

const patBat = new Person(
  "Patrycjusz Batman",
  "AMERYKAŃSKI PSYCHOL",
  "jaredzie leto! to ja jestem <strong>amerykañskim psycholem</strong>, zabije ciebie aaaaa aa aa<strong>aa aaaaa aa a aaaaa</strong>",
  Array(
    new Project(
      "https://www.facebook.com/profile.php?id=100087848326497",
      "<img src='img/icons/icon-facebook.svg'/>",
      ""
    ),
    new Project("#", "<img src='img/icons/icon-instagram.svg'/>", ""),
    new Project("#", '<img src="img/icons/icon-twitter.svg"/>', "")
  ),
  Array(
    new Job(
      "Vice President",
      "Pierce & Pierce",
      "Investment Bank",
      "2002",
      "today",
      "New York",
      "USA",
      Array("rysowanie:)", "porzyczanie kaset", "jedzenie prostytutek"),
      "55 West 81st Street, Upper West Side",
      "NY 10024"
    )
  ),
  Array(""),
  "./img/patbat.png",
  "codzienne obowiazki",
  "518 308 3928",
  "p.b@pierce-pierce.org",
  Array(""),
  Array(
    "potrafie sprawic że sie ktoś otworzy;]",
    "doskonały gust we fryzurach"
  ),
  "./img/signatures/signature.png",
  "./img/profile-pictures/patbat.png"
);

function fillCodersLabCard() {
  const me = patBat;

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
  const me = patBat;

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

  var phone = "";
  for (var c of me.phone) {
    if (c == " ") {
      c = "-";
    }
    phone += c;
  }

  document.head.innerHTML +=
    "<link href='https://fonts.cdnfonts.com/css/copperplate' rel='stylesheet'><link rel='stylesheet' href='./ampsych-style.css'></link>";

  document.title = "Moja wizytówka";

  document.body.innerHTML =
    "<div><div><div><a href='tel:" +
    me.phone +
    "'>" +
    phone +
    "</a></div><div><a href='mailto:" +
    me.email +
    "'>" +
    me.email +
    "</a></div></div><div><div>" +
    me.jobs[0].company +
    "</div><div>" +
    me.jobs[0].branch +
    "</div></div></div><div><div>" +
    name +
    "</div><div>" +
    me.jobs[0].proffesion +
    "</div></div><div>" +
    me.jobs[0].address1 +
    ", " +
    me.jobs[0].city +
    ", " +
    me.jobs[0].address2 +
    ", " +
    me.jobs[0].country +
    "</div>";
}
