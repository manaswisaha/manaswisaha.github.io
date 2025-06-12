// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-with-a-phd-degree-in-computer-science-and-engineering-from-university-of-washington",
          title: 'Graduated with a PhD degree in Computer Science and Engineering from University of...',
          description: "",
          section: "News",},{id: "news-started-as-a-hci-research-scientist-at-accenture-labs-in-san-francisco",
          title: 'Started as a HCI Research Scientist at Accenture Labs in San Francisco!',
          description: "",
          section: "News",},{id: "news-3-part-medium-blog-series-released-on-audio-ar-research-in-collaboration-with-wendy-ju-at-cornell-tech-part-1-part-2-part-3",
          title: '3-Part Medium Blog series released on Audio AR research, in collaboration with Wendy...',
          description: "",
          section: "News",},{id: "news-first-paper-from-the-audio-ar-research-thread-titled-situated-conversational-agents-for-task-guidance-a-preliminary-user-study-published-in-cui-2024-my-intern-alexandra-bremers-presented-a-poster-at-the-conference-in-luxembourg",
          title: 'First paper from the Audio AR research thread, titled “Situated Conversational Agents for...',
          description: "",
          section: "News",},{id: "news-first-paper-from-the-ai-assisted-knowledge-work-research-thread-is-published-at-chi-2025-in-japan-my-intern-yuhan-liu-first-authored-and-presented-the-paper-titled-exploring-the-design-space-of-real-time-llm-knowledge-support-systems-a-case-study-of-jargon-explanations",
          title: 'First paper from the AI-assisted knowledge work research thread is published at CHI...',
          description: "",
          section: "News",},{id: "news-second-paper-from-the-ai-assisted-knowledge-work-research-thread-accepted-for-publication-at-cscw-2025-my-intern-taewook-kim-first-authored-the-paper-titled-steering-ai-driven-personalization-of-scientific-text-for-general-audiences-look-out-for-this-paper-at-norway-this-october",
          title: 'Second paper from the AI-assisted knowledge work research thread accepted for publication at...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
