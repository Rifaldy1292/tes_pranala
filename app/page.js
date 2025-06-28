"use client";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [angka, setAngka] = useState("");
  const [hasil, setHasil] = useState("");
  const [error, setError] = useState("");
  const handleClick = async (e) => {
    setError("");
    setHasil("");
    if (!/^[0-9]+$/.test(angka)) {
      alert("input harus angka");
    }
    try {
      const response = await axios.post(`api/${e}`, { angka });
      setHasil(response.data.hasil);
    } catch (error) {
      setError("terjadi kesalahan");
    }
  };
  return (
    <div className="p-5 ">
      <div className="border-2 mt-5 w-[500px]">
        <input
          type="text"
          className="border "
          value={angka}
          placeholder="input angka"
          onChange={(e) => setAngka(e.target.value)}
        />
      </div>
      <div className="gap-5 mt-5 flex">
        <button className="border-2" onClick={() => handleClick("triangle")}>
          generate segitiga
        </button>
        <button className="border-2" onClick={() => handleClick("ganjil")}>
          generate bilangan ganjil
        </button>
        <button className="border-2" onClick={() => handleClick("prima")}>
          {" "}
          generate bilangan prima
        </button>
      </div>
      <div>{hasil && <pre> {hasil} </pre>}</div>
    </div>
  );
}
