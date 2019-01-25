import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import { adminUsersData, IUser } from "./UsersData";
import AdminUser from "./AdminUser";

const AdminUsers: React.FC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map(user => (
          <li key={user.id}>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName="admin-link-active"
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path="/admin/users/:id" component={AdminUser} />
    </div>
  );
};

export default AdminUsers;
