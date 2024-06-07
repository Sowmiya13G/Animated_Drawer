import {ImageSourcePropType} from 'react-native';

// Interface for a single message
export const MessageType = {
  name: '',
  image: '',
  message: '',
};

// Interface for a single item in the drawer list
export const DrawerListType = {
  name: '',
  icon: '',
  navigate: '',
};

// Drawer list data
export const drawerList = [
  {
    name: 'My Profile',
    icon: require('../assets/MyProfile.png'),
    navigate: 'MyProfile',
  },
  {
    name: 'Contacts',
    icon: require('../assets/Contact.png'),
    navigate: 'Contacts',
  },
  {
    name: 'Calls',
    icon: require('../assets/Phone.png'),
    navigate: 'Calls',
  },
  {
    name: 'Saved Message',
    icon: require('../assets/Saved.png'),
    navigate: 'SavedMessage',
  },
  {
    name: 'Settings',
    icon: require('../assets/Setting.png'),
    navigate: 'Settings',
  },
];

// Array to store generated messages
export const message = [];

// Array of profile images
const profileImages = [
  require('../assets/Profile1.png'),
  require('../assets/Profile2.png'),
  require('../assets/Profile3.png'),
  require('../assets/Profile4.png'),
  require('../assets/Profile5.png'),
  require('../assets/Profile6.png'),
  require('../assets/Profile7.png'),
  require('../assets/Profile8.png'),
  require('../assets/Profile9.png'),
  require('../assets/Profile10.png'),
];

// Array of predefined names
const names = [
  'Peter Parker',
  'Tony Stark',
  'Steve Rogers',
  'Thor',
  'Bruce Banner',
];

// Array of predefined greetings
const greetings = ['Hello', 'Hi there', 'Hey', 'Greetings', 'Dear', 'Good day'];

// Array of predefined feelings
const feelings = [
  'I hope you are well today.',
  "How's your day going?",
  'I wanted to say hello.',
  "I've always admired your work.",
];

// Array of predefined hopes
const hopes = [
  "I hope you're having a fantastic day.",
  'Wishing you a wonderful day ahead.',
  'I hope life is treating you kindly.',
  'Keep shining!',
];

// Generate random messages
for (let i = 0; i < 20; i++) {
  const randomProfileIndex = Math.floor(Math.random() * profileImages.length);
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomGreetingIndex = Math.floor(Math.random() * greetings.length);
  const randomFeelingIndex = Math.floor(Math.random() * feelings.length);
  const randomHopeIndex = Math.floor(Math.random() * hopes.length);

  const randomGreeting = greetings[randomGreetingIndex];
  const randomFeeling = feelings[randomFeelingIndex];
  const randomHope = hopes[randomHopeIndex];

  const messageText = `${randomGreeting}, it's ${names[randomNameIndex]}. ${randomFeeling} ${randomHope}`;

  message.push({
    name: names[randomNameIndex],
    image: profileImages[randomProfileIndex],
    message: messageText,
  });
}
