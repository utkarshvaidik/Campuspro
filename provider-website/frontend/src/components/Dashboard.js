import React from 'react';
import { ROLES } from '../roles';

function contentFor(role) {
  switch (role) {
    case "principal":
      return <div>
        <h2>Principal Dashboard</h2>
        <ul>
          <li>Manage Staff</li>
          <li>View Reports</li>
        </ul>
      </div>;
    case "teacher":
      return <div>
        <h2>Teacher Dashboard</h2>
        <ul>
          <li>Student List</li>
          <li>Attendance</li>
          <li>Grades</li>
        </ul>
      </div>;
    case "clerk":
      return <div>
        <h2>Clerk Dashboard</h2>
        <ul>
          <li>Admissions</li>
          <li>Student Records</li>
        </ul>
      </div>;
    case "student":
      return <div>
        <h2>Student Dashboard</h2>
        <ul>
          <li>View Attendance</li>
          <li>Grades</li>
          <li>Profile</li>
        </ul>
      </div>;
    default:
      return <div>Unknown role</div>;
  }
}

export default function Dashboard({ role, onLogout }) {
  return (
    <div>
      <h1>Welcome, {ROLES[role] || role}</h1>
      <button onClick={onLogout}>Logout</button>
      {contentFor(role)}
    </div>
  );
}
