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
  },{id: "nav-important-amp-nbsp-dates",
          title: "Important&amp;nbsp;dates",
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
            window.location.href = "/registration/";
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
