import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

function Login() {
  const auth = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  const { login, user } = auth;

  return (
    <div>
      <h1>Login</h1>

      {user ? (
        <p>Welcome, {user}!</p>
      ) : (
        <button onClick={() => login("Raman")}>
          Log in
        </button>
      )}
    </div>
  );
}

export default Login;