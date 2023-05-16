import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Lessons() {
  const [classMenuOpen, setClassMenuOpen] = useState(false);

  const toggleClassMenu = () => {
    setClassMenuOpen(!classMenuOpen);
  }

  return (
    <div>
      <h1>Μαθήματα</h1>
      <p>Εδώ μπορείτε να βρείτε τα μαθήματα ανά κατηγορία:</p>
      <button onClick={toggleClassMenu}>Επιλέξτε Τάξη</button>
      {classMenuOpen &&
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="nav-link" onClick={toggleClassMenu}>Τάξη Α</button>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 3</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={toggleClassMenu}>Τάξη Β</button>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 3</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={toggleClassMenu}>Τάξη Γ</button>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Μάθημα 3</a>
</li>
</ul>
</li>
</ul>
}
</div>
);
}

export default Lessons;