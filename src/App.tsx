import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9EV2fWLqqdqqJu0AczSRILnHL7yN7EHM",
  authDomain: "polygon-search.firebaseapp.com",
  databaseURL:
    "https://polygon-search-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "polygon-search",
  storageBucket: "polygon-search.appspot.com",
  messagingSenderId: "451645057911",
  appId: "1:451645057911:web:173c8e12fc2e16b8200f72",
  measurementId: "G-2R2ZG378KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  return (
    <>
      <header className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900">
        <ul className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 ">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              See All Indexed Sites
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Images
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Videos
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Dev Station
            </a>
          </li>
        </ul>
      </header>
      <div className="flex items-center justify-center text-center h-screen p-4 bg-zinc-800 scrollbar-hide">
        <div>
          <div className="flex justify-center items-center mb-4 flex-col">
            <img src="./favicon.png" alt="Logo" className="mb-4"/>
            <h1 className="font-bold text-3xl text-white transition hover:text-primary font-albertsans mr-0">
              Nova Search
            </h1>
          </div>
          <form className="bg-zinc-800 py-3 px-14  placeholder-zinc-500 rounded-full flex justify-center font-albertsans border-2 border-zinc-500 transition hover:bg-zinc-600 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900">
            <input
              className="bg-transparent mx-4 active:border-none  border-solid rounded-full w-full px-4 py-2 focus:outline-none text-white"
              type="text"
              placeholder="Search Here"
            />
            <button className="text-white font-bold">
              <span className="material-symbols-outlined text-white translate-y-1 transition hover:scale-125 transform-gpu">
                search
              </span>
            </button>
          </form>
        </div>
      </div>

      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2022{" "}
          <a href="https://novasys.netlify.app/" className="hover:underline">
            Nova Systems
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 bg-secondary rounded-xl px-4">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
