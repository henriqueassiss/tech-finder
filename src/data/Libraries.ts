import React from '../assets/techs/libraries/React.png';
import { ICard } from '../components';

export const libraries: ICard[] = [
	{
		image: React,
		title: 'ReactJS',
		date: '2013',
		createdBy: 'Facebook',
		tag: 'Library',
		desc: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
	},
	{
		image: React,
		title: 'React Native',
		date: '2015',
		createdBy: 'Facebook',
		tag: 'Library',
		desc: "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, IOS, macOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. It is also being used to develop virtual reality applications at Oculus. The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via serialized data over an asynchronous and batched bridge. React components wrap existing native code and interact with native APIs via React's declarative UI paradigm and JavaScript. While React Native styling has a similar syntax to CSS, it does not use HTML or CSS. Instead, messages from the JavaScript thread are used to manipulate native views. With React Native developers have to write native code in the languages of the aimed platform such as Java or Kotlin for Android, Objective-C or Swift for iOS, and C++/WinRT or C# for Windows 10. Microsoft builds and maintains React Native for Windows and React Native for macOS.",
	},
];
