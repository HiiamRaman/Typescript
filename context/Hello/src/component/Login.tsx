import { loginUser } from "../services/auth.services.ts";
function Login() {
  async function handleSubmit() {
    try {
      const res = await loginUser({
        email: "raman@gmail.com",
        password: "123456",
      });
      console.log("Response", res);
      alert(res.message)
    } catch (error) {
      console.log("Failed to login", error);
    }
  }

  return (
    <div>
      <h1 onClick={handleSubmit}>Login</h1>
    </div>
  );
}

export default Login;
