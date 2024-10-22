import { skillData } from "../Skills";

const { react, javascript, bootstrap, html, css, php, mysql, nextjs, socketio, docker } = { ...skillData }

export const ttbYouthAssociation = {
  projectName: "TtB Youth Association",
  banner: "projectsMedia/TtBPlus/Banner.png",
  links: [
    {
      label: "Live Project",
      link: "https://ttbplus.eu/",
    },
  ],
  overview: [
    "Designed and developed a user-friendly website for TtB Youth Association, empowering young people with accessible information and engagement opportunities.",
    "Key features include program showcases, news, contact forms, project search, membership applications, and online donations via Stripe."
  ],
  stack: {
    frontEnd: bootstrap,
    backEnd: mysql,
    languages: [javascript, php, html, css],
  },
  pages: [
    {
      pageTitle: "Homepage",
      media: "projectsMedia/TtBPlus/Homepage.PNG",
      texts: [
        "The homepage provides an engaging introduction to TtB Youth Association, highlighting its mission and values.",
        "It features compelling visuals and clear calls to action to encourage exploration of the website and its various sections."
      ],
    },
    {
      pageTitle: "About Us",
      media: "projectsMedia/TtBPlus/AboutUs.PNG",
      texts: [
        "This page provides detailed information about TtB Youth Association, its history, goals, and team.",
        "It aims to build trust and transparency with visitors by offering insights into the organization's background and activities."
      ],
    },
    {
      pageTitle: "News & Announcements",
      media: "projectsMedia/TtBPlus/News.PNG",
      texts: [
        "This section keeps visitors updated on the latest news and announcements from TtB Youth Association.",
        "It features a blog-style format with articles and event information."
      ],
    },
    {
      pageTitle: "Contact",
      media: "projectsMedia/TtBPlus/Contact.PNG",
      texts: [
        "The contact page provides multiple ways for visitors to get in touch with TtB Youth Association.",
        "It includes a contact form, email address, and links to social media platforms."
      ],
    },
    {
      pageTitle: "Subscription Feature",
      media: "projectsMedia/TtBPlus/Subscription.PNG",
      texts: [
        "Users can subscribe to receive email notifications about upcoming projects and events.",
        "This feature helps TtB Youth Association keep its audience engaged and informed."
      ],
    },
    {
      pageTitle: "Donation with Stripe",
      media: "projectsMedia/TtBPlus/Donation.PNG",
      texts: [
        "Integrated Stripe payment gateway to enable secure online donations.",
        "This provides a convenient way for supporters to contribute to the association's mission."
      ],
    },
    {
      pageTitle: "Project Search",
      media: "projectsMedia/TtBPlus/Search.PNG",
      texts: [
        "Implemented a search bar that allows users to easily find projects within the website.",
        "This improves navigation and helps users quickly access the information they need."
      ],
    },
    {
      pageTitle: "Membership Application",
      media: "projectsMedia/TtBPlus/Membership.PNG",
      texts: [
        "Created an online membership application form for individuals interested in joining TtB Youth Association.",
        "This streamlines the application process and makes it more accessible to potential members."
      ],
    },
    {
      pageTitle: "Project Application Form",
      media: "projectsMedia/TtBPlus/ProjectApplication.PNG",
      texts: [
        "Developed an online form for users to apply for upcoming projects directly through the website.",
        "This simplifies the application process and encourages participation in TtB Youth Association initiatives."
      ],
    },
  ],
};

export const duckStrikes = {
  projectName: "Duck Strikes Game",
  banner: "projectsMedia/DuckStrikes/Banner.png",
  links: [
    {
      label: "Github Repo",
      link: "https://github.com/ebayramov/duck-strikes-react-game",
    },
    {
      label: "Live Project",
      link: "https://ebayramov.github.io/duck-strikes-react-game/",
    },
  ],
  overview: [
    "Duck Strikes Game is all about unleashing your creativity and having a blast with personalized map design and exciting gameplay. With the latest tech like React and JavaScript, it's all about ensuring smooth and fun user experiences.",

    "With easy controls and cool features like adjustable camera zoom, players can dive into creating custom maps. Whether you're placing ducks, adding enemies, or navigating the game, Duck Strikes lets you make the gaming world your own.",
  ],
  stack: {
    frontEnd: react,
    languages: [javascript, html, css],
  },
  pages: [
    {
      pageTitle: "Home Screen",
      media: "projectsMedia/DuckStrikes/HomeScreen.png",
      texts: [
        "Welcome to the heart of the duck action! On the Home Screen, you're greeted with the vibrant game environment, teeming with potential adventures.",
        "Here you can choose to dive right into the gameplay or unleash your creative side by crafting your own custom maps.",
      ],
    },

    {
      pageTitle: "Place a duck",
      media: "projectsMedia/DuckStrikes/placingDuck.gif",
      texts: [
        "Dive into the Map Creation mode and let your creativity run wild.",
        "Just remember to save a map you must add at least one duck.",
      ],
    },
    {
      pageTitle: "Placing Objects and Enemies",
      media: "projectsMedia/DuckStrikes/addingMapElements.gif",
      texts: [
        "You may add as many enemies and obstacles as you wish before saving the game.",
        "Once you've crafted your masterpiece, save it to revisit anytime or share with fellow gamers for a thrilling showdown.",
      ],
    },
    {
      pageTitle: "Adjust camera zoom",
      media: "projectsMedia/DuckStrikes/CameraZoom.gif",
      texts: [
        "Using ctrl+scroll + up or down to zoom in or out you can place map elements in a much larger area.",
        "Unlimited fun space!"
      ],
    },
    {
      pageTitle: "Gameplay and Controls",
      media: "projectsMedia/DuckStrikes/duckStrikesGameplay.gif",
      texts: [
        "You can move ducky using the arrow keys and shoot blackholes by pressing space bar. Lastly you can press escape to access the game menu.",
        "Gameplay involves aiming and shooting at the skeleton enemies, sharp blocks are indestructible and ducky cannot walk over them, they are also able to stop ducky's projectile.",

      ],
    },
  ],
};


export const realTimeChatApp = {
  projectName: "Real-Time Chat Application",
  banner: "projectsMedia/RealTimeChatApp/Banner.PNG",
  links: [
    {
      label: "Github Repo",
      link: "https://github.com/ebayramov/my-chat-app",
    },
    {
      label: "Video Tutorial",
      link: "https://www.youtube.com/watch?v=1EWiokzSDNE",
    },
  ],
  overview: [
    "Developed a real-time chat application using Next.js, Socket.io, PHP, and MySQL, enabling users to connect and communicate seamlessly.",
    "Features include user profiles, public and private chat rooms with password protection, text and image messaging, and room invitations."
  ],
  stack: {
    frontEnd: nextjs,
    backEnd: mysql, 
    languages: [javascript, php, html, css, bootstrap, socketio, docker]
  },
  pages: [
    {
      pageTitle: "User Profile Creation",
      media: "projectsMedia/RealTimeChatApp/CreateProfile.PNG",
      texts: [
        "Users can easily create new profiles by providing a username, and password."
      ],
    },
    {
      pageTitle: "User Login/Logout",
      media: "projectsMedia/RealTimeChatApp/LoginLogout.PNG",
      texts: [
        "Secure login and logout functionality allows users to access their personalized chat experience."
      ],
    },
    {
      pageTitle: "Homepage",
      media: "projectsMedia/RealTimeChatApp/Homepage.PNG",
      texts: [
        "The homepage provides an overview of available chat rooms and displays user notifications, such as room invitations.",
        "Users can start joining existing rooms or create new ones from this central hub."
      ],
    },
    {
      pageTitle: "Chat Room Creation",
      media: "projectsMedia/RealTimeChatApp/CreateRoom.PNG",
      texts: [
        "Users can create public or private chat rooms.",
        "Private rooms offer password protection and require a PIN for future password changes."
      ],
    },
    {
      pageTitle: "Joining Chat Rooms",
      media: "projectsMedia/RealTimeChatApp/JoinRoom.PNG",
      texts: [
        "Join public rooms without a password and private rooms by entering the correct password."
      ],
    },
    {
      pageTitle: "Sending Room Invitations",
      media: "projectsMedia/RealTimeChatApp/SendInvitation.PNG",
      texts: [
        "Users can send invitations to other users from both private and public chat rooms."
      ],
    },
    {
      pageTitle: "Managing Room Invitations",
      media: "projectsMedia/RealTimeChatApp/ManageInvitations.PNG",
      texts: [
        "Users can accept or decline received room invitations from their user profile's notification section."
      ],
    },
    {
      pageTitle: "Chat Room Interface",
      media: "projectsMedia/RealTimeChatApp/ChatRoomInterface.PNG",
      texts: [
        "Send and receive text and image messages instantly with other users in the chat room.",
        "Messages are grouped by date for better organization and readability.",
        "Users have the option to delete their own sent messages.",
        "Powered by Socket.io for a seamless and live chat experience."
      ],
    },
    {
      pageTitle: "Changing Room Passwords",
      media: "projectsMedia/RealTimeChatApp/ChangePassword.PNG",
      texts: [
        "Room creators can change the password for private rooms using PIN verification for added security."
      ],
    },
  ],
};
