import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const urlList = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'todo-app',
      label: 'Todo app',
    },
    {
      path: 'portfolio',
      label: 'portfolio',
    },
    {
      path: 'reuseable-component',
      label: 'Reuseable component',
    },
    {
      path: 'image-uploader',
      label: 'Image Uploader',
    },
    {
      path: 'random-quote-generator',
      label: 'Random quote generator',
    },
    {
      path: 'windbnb',
      label: 'Windbnb',
    },
  ];

  return (
    <div className="App">
      <ul>
        {urlList.map(({ path, label }) => (
          <li key={path} style={{ margin: '10px 0' }}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'goldenrod' : 'black',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default App;
