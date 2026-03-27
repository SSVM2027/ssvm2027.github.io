// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-important-dates",
          title: "Important dates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/important-dates/";
          },
        },{id: "nav-schedule",
          title: "Schedule",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/schedule/";
          },
        },{id: "nav-submission",
          title: "Submission",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/submission/";
          },
        },{id: "nav-registration",
          title: "Registration",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Registration/";
          },
        },{id: "nav-venue",
          title: "Venue",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/venue/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-2025-totnes-united-kingdom",
              title: "2025 - Totnes, United Kingdom",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://sites.google.com/view/ssvm-2025/";
              },
            },{id: "dropdown-2023-ardinia-italy",
              title: "2023 - Ardinia, Italy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://events.unibo.it/ssvm2023";
              },
            },{id: "dropdown-2021-cabourg-france-online",
              title: "2021 - Cabourg, France / online",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://ssvm2021.sciencesconf.org/";
              },
            },{id: "dropdown-2019-hofgeismar-germany",
              title: "2019 - Hofgeismar, Germany",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://ssvm2019.mic.uni-luebeck.de/";
              },
            },{id: "dropdown-2017-kolding-denmark",
              title: "2017 - Kolding, Denmark",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://ssvm2017.compute.dtu.dk/";
              },
            },{id: "dropdown-2015-lège-cap-ferret-france",
              title: "2015 - Lège Cap Ferret, France",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "http://ssvm2015.math.u-bordeaux.fr/";
              },
            },{id: "dropdown-2013-schloss-seggau-austria",
              title: "2013 - Schloss Seggau, Austria",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "http://wikicfp.com/cfp/servlet/event.show";
              },
            },{id: "dropdown-2011-ein-gedi-israel",
              title: "2011 - Ein-Gedi, Israel",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://dblp.org/db/conf/scalespace/ssvm2011.html";
              },
            },{id: "dropdown-2009-voss-norway",
              title: "2009 - Voss, Norway",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://dblp.org/db/conf/scalespace/ssvm2009.html";
              },
            },{id: "dropdown-2007-ischia-italy",
              title: "2007 - Ischia, Italy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://dblp.org/db/conf/scalespace/ssvm2007.html";
              },
            },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
