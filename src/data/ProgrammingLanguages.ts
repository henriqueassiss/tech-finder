import C from '../assets/techs/programmingLanguages/C.png';
import CPlusPlus from '../assets/techs/programmingLanguages/CPlusPlus.png';
import CSharp from '../assets/techs/programmingLanguages/CSharp.png';
import Javascript from '../assets/techs/programmingLanguages/Javascript.png';
import { ITech } from '../screens/tech';

export const programmingLanguages: ITech[] = [
	{
		image: C,
		title: 'C',
		date: '1972',
		desc: 'C is a compiled programming language of general purpose, structured, imperative, procedural, standardized by International Organization for Standardization ( ISO ), created in 1972 by Dennis Ritchie in the company AT&T Bell Labs for the development of operating system Unix ( originally written in Assembly).\nC is one of the programming languages more popular and there are few architectures for which there are no compilers to C. C has influenced many other programming languages ( for example, the language Java), most notably C + +, which originally started as an extension for C.\nLanguage C is - in the international version / standard C17 ( ISO / IEC 9899: 2018 ) released in June 2018, replacing version C11 ( ISO / IEC 9899: 2011 ), available in ISO and IEC and supported for GCC8 and Clang LLVM6.',
		tag: 'Programming Language',
		createdBy: 'Dennis Ritchie',
	},
	{
		image: CSharp,
		title: 'C#',
		date: '2000',
		desc: 'C# is a programming language, multiparadigm, in strong typing, developed by Microsoft as part of platform .NET. Its object-oriented syntax was based on the C++ but it includes many influences from other programming languages, such as Object Pascal and mainly, Java. The source code is compiled for Common Intermediate Language ( CIL ) which is interpreted by the virtual machine Common Language Runtime ( CLR ). C# is one of the languages designed to work in Common Language Infrastructure from platform .NET Framework.',
		tag: 'Programming Language',
		createdBy: 'Mads Torgersen',
	},
	{
		image: CPlusPlus,
		title: 'C++',
		date: '1985',
		desc: 'C++ is a general-purpose programming language created as an extension of the C programming language, or "C with Classes".',
		tag: 'Programming Language',
		createdBy: 'Bjarne Stroustrup',
	},
	{
		image: Javascript,
		title: 'Javascript',
		date: '1995',
		desc: 'JavaScript ( often abbreviated as JS ) is a programming language interpreted structured, high-level script with typing dynamic weak and multiparadigm ( prototypes, object-oriented, imperative and functional ). Together with HTML and CSS, JavaScript is one of the three main technologies on the World Wide Web. JavaScript allows for interactive web pages and is therefore an essential part of web applications. The vast majority of sites use it, and all major browsers have a dedicated JavaScript engine to run - it.\nIt is currently the main programming language client - side in web browsers. It is also widely used on the server side through environments such as node.js.\nAs a multiparadigm language, JavaScript supports event-oriented, functional and imperative programming styles ( including object-oriented and prototype - based ), presenting features such as closings ( closures ) and high-order functions commonly unavailable in popular languages such as Java and C + +. It has APIs to work with text, matrices, dates, regular expressions and the DOM, but the language itself does not include any I / O, such as network, storage or graphics installations, counting on that in the host environment in which it is embedded.\nIt was originally implemented as part of the navigators so that scripts could be executed on the client side and interact with the user without the need for this script to go through the server, controlling the browser, performing asynchronous communication and changing the content of the displayed document, but JavaScript mechanisms are now embedded in many other types of host software, including on servers and web databases and non-web programs, such as word processors and PDF, and runtime environments that provide JavaScript to write mobile and desktop applications, including desktop widgets.\nThe terms Vanilla JavaScript and Vanilla JS refer to JavaScript not extended by any additional structure or library. Scripts written in Vanilla JS are simple JavaScript codes.[5][6]\nAlthough there are similarities between JavaScript and Java, including the language name, syntax and the respective standard libraries, the two languages are distinct and differ greatly in design; JavaScript was influenced by programming languages like Self and Scheme.\nIt is based on ECMAScript, standardized by Ecma international in ECMA - 262 specifications and ISO / IEC 16262.',
		tag: 'Programming Language',
		createdBy: 'Brendan Eich',
	},
];
