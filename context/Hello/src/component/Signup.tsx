import { registerUser } from "../services/auth.services.ts";
export default function Signup() {
  async function handleSubmit() {
    try {
      const res = await registerUser({
        fullName: "Raman",
        email: "abc@gmail.com",
        password: "12345678",
      });
      console.log("Response", res);
      alert(res.message);
    } catch (error) {
      console.log("Failed to Signup", error);
    }
  }

  return (
    <div>
      <h1 onClick={handleSubmit}>Signup</h1>
    </div>
  );
}
