import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import IntroPage from './pages/Intro';
import ErrorPage from './pages/Error';
import RootLayout from './components/RootLayout';
import IntroDetailPage from './pages/IntroDetail';
import IntroLayout from './components/IntroLayout';
import ToDoListPage from './pages/ToDoList'
import StudyPage from './pages/StudyPage';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'intro',
        element: <IntroLayout />,
        children: [
          {
            index: true,
            element: <IntroPage />,
          },
          {
            path:':id',
            element: <IntroDetailPage />,
          },
        ],
      },
      {
        path: 'todolist',
        element: <ToDoListPage />,
      },
      {
        path: 'study',
        element: <StudyPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}


export default App
