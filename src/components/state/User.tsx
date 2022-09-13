import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "John", email: "john@example.com}" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <div>
          <div>User Name is {user.name}</div>
          <div>User Email is {user.email}</div>
        </div>
      ) : (
        <div>User is not logged in</div>
      )}
    </div>
  );
};
