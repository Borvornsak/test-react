import bioPic from "./images/fry.jpg";
import projectImage from "./images/197x148.gif";

var work = {
  jobs: [
    {
      employer: "sample_employer_1",
      title: "sample_title_1",
      location: "Bangkok",
      dates: "sample_dates_1",
      description: "sample_description_1"
    },
    {
      employer: "sample_employer_2",
      title: "sample_title_2",
      location: "Bangkok",
      dates: "sample_dates_2",
      description: "sample_description_2"
    }
  ]
};

var projects = {
  projects: [
    {
      title: "sample_title_1",
      dates: "sample_dates_1",
      description: "sample_description_1",
      images: [projectImage, projectImage]
    }
  ]
};

var bio = {
  name: "Borvornsak Laoratanapong",
  role: "Web Developer",
  welcomeMessage: "sample_welcomeMessage_1",
  biopic: bioPic,
  contacts: {
    mobile: "083-608-4108",
    email: "borvornsak.la@gmail.com",
    github: "https://github.com/Borvornsak",
    location: "136 Phachautit98 ThungKru Bangkok"
  },
  skills: ["sample_skill_1", "sample_skill_2", "sample_skill_3"]
};

var education = {
  schools: [
    {
      name: "sample_name_1",
      location: "Bangkok",
      degree: "sample_degree_1",
      dates: "sample_dates_1",
      url: "sample_url_1",
      majors: ["sample_major_1"]
    },
    {
      name: "sample_name_2",
      location: "Bangkok",
      degree: "sample_degree_2",
      dates: "sample_dates_2",
      url: "sample_url_2",
      majors: ["sample_major_2"]
    }
  ],
  onlineCourses: [
    {
      title: "sample_title_1",
      school: "sample_school_1",
      dates: "sample_dates_1",
      url: "sample_url_1"
    }
  ]
};

export default {
  work: work,
  projects: projects,
  bio: bio,
  education: education
};
