import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Register({
  isLoggedIn,
  setIsLoggedIn,
  setName,
  setEmail,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED");

    if (form.password !== form.confirmpassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/account/register", {
        username: form.name,
        email: form.email,
        password: form.password,
      });

      if (res.data.success) {
        // alert(res.data.message);
        setIsLoggedIn(true);
        setName(form.name);
        setEmail(form.email);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-black flex justify-center px-6 pb-6">
      <motion.div
        className="
                w-full max-w-md p-8 rounded-2xl
                bg-white/10 backdrop-blur-md border border-white/20
                shadow-xl text-white
            "
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-6 tracking-tight">
          Create Account
        </h2>

        <form onSubmit={handleRegistration} className="flex flex-col gap-4">
          {/* Name */}
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="
                        bg-white/10 border border-white/20 rounded-lg px-4 py-3
                        placeholder-white/50 focus:outline-none
                        focus:border-orange-500 transition
                    "
          />

          {/* Email */}
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="
                        bg-white/10 border border-white/20 rounded-lg px-4 py-3
                        placeholder-white/50 focus:outline-none
                        focus:border-orange-500 transition
                    "
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="
                        bg-white/10 border border-white/20 rounded-lg px-4 py-3
                        placeholder-white/50 focus:outline-none
                        focus:border-orange-500 transition
                    "
          />

          {/* Confirm Password */}
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmpassword}
            onChange={handleChange}
            required
            className="
                        bg-white/10 border border-white/20 rounded-lg px-4 py-3
                        placeholder-white/50 focus:outline-none
                        focus:border-orange-500 transition
                    "
          />

          {/* Button */}
          <button
            type="submit"
            className="
                        mt-2 bg-orange-500 hover:bg-orange-600
                        text-black font-semibold py-3 rounded-lg
                        transition shadow-md
                    "
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}
