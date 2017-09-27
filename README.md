![Seekhana Logo](/assets/images/pngs/mandala-logo.png)

What is Seekhana?
-----------------
सीखना (Transliteration: 'seekhana' or 'seekhna') is a Hindi word that, as a transitive verb, translates to english as 'to get' or 'to learn'. This is an app designed to help an english speaker pick up the basics of Hindi - the MVP focuses on the hindi alphabet.

The Project
-----------------
As an exercise in building with React Native, I rebuilt [a web app](https://github.com/wilm42/seekhanaWeb) that was originally built with a partner from the ground up in about a day's time. In doing so, there are a few key differences between this version and the web app:
* This version does not include user authentication. Anyone can use the app at any time without signing in.
* There is no pretense for multiple lessons- the app takes you straight into the alphabet lesson without you having to choose.
* This app does not include the spaced repetition algorithm that the web app built upon. Instead, this app chooses the Hindi characters to display completely at random.
* This app uses a two-tap method to submit your answer, as opposed to a tap and a 'submit' button

Additionally, there are some improvements to the alphabet lesson itself:
* The entire Hindi alphabet is now represented in the lesson, as opposed to the web app which only contains a truncated version.
* The 3 incorrect choices are now generated and ordered randomly, so a user will not see the same choices to the same question, nor will the correct answer be in the same position in the grid.
* The answers are validated based on a database key as opposed to a simple boolean value.

What's the tech stack?
-----------------
* [Firebase](https://firebase.google.com/) - Google's suite of tools that allows for rapid development with very little need for back-end code.
* [React Native](https://facebook.github.io/react-native/) - React Native is a JavaScript framework that allows you to use React-style components to write *real* native applications.
* [Native Base](https://nativebase.io/) - Cross platform UI components for React Native.
* [React Navigation](https://reactnavigation.org/) - Cross platform navigation library for React Native

Known Issues & Plans for the future
-----------------
* User Testing for this app has been severely limited by my ability to only access my personal android phone. I hope to get a virtual machine with Mac OS and XCode up and running soon, so that I can test my app in an iPhone environment, as well as an android simulator so I can try different screen sizes, etc. As of right now this app is only 100% known to work without bugs on a Blackberry Priv running Android 6.0.1
* On the occassion that I was able to borrow an iPhone while developing, there was an issue with compiling that resulted in an error that said '*scrollview has no proptype for native prop RCTScrollView.overScrollMode of native type string*', I've read online that this is a bug usually caused by mix-matched dependencies - an issue I have hopefully now resolved - but this theory remains untested as of writing.
* Adding user authentication and implementing the spaced repetition algorithm is a must for a robust user experience, but the two go hand-in-hand and currently I simply don't have the time to invest in them at the moment.
* I've implemented firebase using their documentation - which seems to have no qualms about exposing my key in the source code.
* The app throws a developer warning about using long timeouts on android devices. I believe this is because firebase's real-time database listens for changes on the serverside so that it can reflect those in the app.

Getting Started
-----------------
If you'd like to demo this app (or contribute to it!), you'll need to do a few things:

1. Download Expo onto your smartphone if you don't already have it: 
⋅⋅* [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
⋅⋅* [App Store (iDevices)](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8)
2. Clone this repository by running the following command in git-bash or your terminal:
```
$ git clone https://github.com/wilm42/seekhanaMobile.git
```
3. Once the clone is complete, cd into the repository, and install the dependencies:
```
$ cd seekhanaMobile && npm install
```
4. Once the dependencies are installed, run the packager:
```
$ npm start
```
5. The packager may take some time to get going. Once it is running, you should see a QR code in your terminal. Open the Expo app on your phone and scan that QR code. This will take some time, as the packager now has to compile my javascript into code native to your device. Once it is complete, Expo should load up the app and you should be able to demo away!


Should you encounter any bugs that I haven't addressed in the known issues section, please feel free to let me know via [email](mailto:hi@william.direct) or using [github issues](https://github.com/wilm42/seekhanaMobile/issues). Thanks!
