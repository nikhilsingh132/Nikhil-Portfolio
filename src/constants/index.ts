export const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

export const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

export const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Blogs", // was "Safari"
    icon: "/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "/trash.png",
    canOpen: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    date: "Nov 6, 2025",
    title:
      "React Promise Explained: What It Is, Why It Matters, and How to Use It",
    image:
      "https://strapi.dhiwise.com/uploads/react_promise_OG_Image_7ed889a338.png",
    link: "https://docs.google.com/document/d/1NKe84MhR3rVeiiisi-55dfXHsY8614t_Ci3fMv51bAs/edit?usp=sharing",
  },
  {
    id: 2,
    date: "Oct 8, 2025",
    title: "Server sent events explained",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQHvWxhmOkG9vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714328414570?e=2147483647&v=beta&t=ui_9UaXWBBRlcBCqqKhB4Pi6mpzs2lJ4jeJt_h-STEA",
    link: "https://drive.google.com/file/d/1gbvAAHZexbpziOGxZe1LHeRiWAM6lpN3/view?usp=sharing",
  },
  {
    id: 3,
    date: "Apr 26, 2025",
    title: "Event bubbling and throttling explained",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYbwkxv6oCoKAIPx957URMhhwlLceeqgLWg&s",
    link: "https://docs.google.com/document/d/1Deh6mmETE0e7nciLW6Pe1eKpibWIpbfXxvIg6_0lnyk/edit?usp=sharing",
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Nginx"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "Material UI"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Cursor"],
  },
];

export const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/nikhilsingh132",
  },
  {
    id: 2,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/nikhil-singh-10b091204",
  },
  {
    id: 4,
    text: "LeetCode",
    icon: "https://leetcode.com/static/images/LeetCode_Sharing.png",
    bg: "#898898",
    link: "https://leetcode.com/u/niksin123/",
  },
  {
    id: 5,
    text: "Codeforces",
    icon: "https://codeforces.com/codeforces.org/s/99744/images/codeforces-sponsored-by-ton.png",
    bg: "#2e8b57",
    link: "https://codeforces.com/profile/nikhilkumarsingh",
  },
];

export const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

export const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 Teacher pool management system
    {
      id: 5,
      name: "Teacher pool management system",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Teacher pool management system.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed the Teacher Pool project, a platform for educators to apply for teaching jobs and view blogs.",
            "Developed robust RESTful API for job openings, facilitating CRUD operations and seamless user interaction.",
            "Utilized React’s Context API, Axios for async requests, enhancing state management, and data retrieval.",
            "Exposure: React, Node.js, MongoDB, RESTful APIs, Netlify, Render.",
            "Website: https://teacher-pool.netlify.app",
          ],
        },
        {
          id: 2,
          name: "Open teacher-pool",
          icon: "/images/teacherpool.png",
          kind: "file",
          fileType: "url",
          href: "https://teacher-pool.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Source code",
          icon: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/nikhilsingh132/Teacher_Pool",
          position: "top-52 right-80",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Server sent events explained",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "SSE explained.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Server-Sent Events (SSE) is a technology enabling servers to push real-time updates to web clients over a single HTTP connection. This project showcases a practical implementation where the server sends time updates to connected clients every 3 seconds.",
            "The project demonstrates how SSE can be used to create real-time applications, such as a clock or a live scoreboard, by continuously sending data to the client without the need for the client to request updates.",
          ],
        },
        {
          id: 2,
          name: "Open SSE project",
          icon: "https://external-preview.redd.it/server-sent-events-in-net-8-v0-MwmZHJ2BmfNVP2----hmGPWHf95oqtndBiqqMo_X9yI.jpg?auto=webp&s=bbb00d201824d1a9120b2cad4cf047859cbf33aa",
          kind: "file",
          fileType: "url",
          href: "https://server-sent-events-explained.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "Source code",
          icon: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/nikhilsingh132/Server-sent-events-project",
          position: "top-52 right-80",
        },
      ],
    },
  ],
};

export const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/nikhil.jpg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/nikhil.jpg",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/nikhil.jpg",
      description: [
        "Hey! I'm Nikhil 👋, a Software Developer at Navi with a passion for building seamless, high-impact web experiences.",
        "I'm an IIT BHU grad who loves React, Next.js, and TypeScript—turning complex problems into clean, performant solutions.",
        "From boosting loan disbursals by 20% to building real-time chat systems, I thrive on shipping features that actually move the needle.",
        "When I'm not coding, you'll find me grinding DSA problems (Knight on LeetCode, Expert on Codeforces 💪) or experimenting with new tech stacks.",
        "Always up for a challenge, a good cup of chai, and building something users will love! ☕",
      ],
    },
  ],
};

export const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

export const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMaximized: false,
  },
};
