# Pocket Positivity

This is the winning entry from the June 2020 Hack for Heroes Hackathon. The time limit for the project to be submitted was 2.5 days and the brief of the hackathon was to build a piece of technology that could be used to directly help the heroes that are working on the front line. The team consisted of [myself](https://github.com/davidpaps), [Asia](https://github.com/asiaellis5), [Bassel](https://github.com/basselalsayed), [Ben](https://github.com/benjamaker), [Lucian](https://github.com/lucianboatright), [Nic](https://github.com/nicolasraffray) and [Tom](https://github.com/Walker-TW).

The original repo with the full commit history can be found [here](https://github.com/basselalsayed/pocket_positivity).

---

## About the App / Features

After this group of developers were randomly assigned, we brainstormed and quickly identified that the theme we wanted our app to have would be focused on Mental Health. Key workers are under tremendous pressure at the best of time, let alone during a pandemic. They often risk their health in order to provide and care for us, this is whay we wanted to give something back to the key workers, and build an app that focused on helping them track, deal with and improve their mental health.

We decided to make the app accessible and avaliable to the majority of key workers. It was important for us to allow them to track and log their mood on the go, therefore making a `React Native` / `Expo` app made sense. Although no one in the group had ever had experience using this technology, we concluded that we had the skills and depth in the team to succeed. We used `Node.js` / `Express.js` for the backend server, and used `PostgreSQl` as our relational database to store the data. We then stored the backend on [Heroku](https://help-for-heroes.herokuapp.com/), the repo for the backend can be found [here](https://github.com/davidpaps/pocket_positivity_backend).

- Mantras - continuous positive affirmation can be sent to the user or by request
- Ask user for input stating mood and attaching comment.
- Past inputs can then be collectively viewed to recognise trends for positive or negative emotions over time.
- The user can interact with a chatbot to represent an empathetic interaction with answers and helpful resources in response to specific answers.

---

## How to Run

1. Download the Expo Client on your phone from the app store in order to load the app from the QR code.
2. Install expo SDK from: https://expo.io/
3. Install expo command line interface with: `npm i -g expo-cli`
4. To run the program clone the following repositories

- Back-end use the following link: https://github.com/davidpaps/help_for_heroes_backend
- Front-end use the following link: https://github.com/basselalsayed/pocket_positivity

4. After downloading the both of these into a directory as separate folders run package controller install dependancies.

- Front-end: `expo install`
  open Expo: expo start
- Back-end: `yarn install`

### Acknowledgements

(React-Chatbot-Native)[https://github.com/LucasBassetti/react-native-chatbot] is primarily written and maintained by (Lucas Bassetti)[https://github.com/LucasBassetti]. Expo functionality patched by (Jérémie Zarca)[https://github.com/jzarca01
