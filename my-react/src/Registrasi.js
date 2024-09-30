import React, { useState } from "react";

function Registrasi() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // kirim ke server
    alert(`
      nama: ${nama}
      email: ${email}
      hp: ${hp}
    `);

    console.log(`
      nama: ${nama}
      email: ${email}
      hp: ${hp}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Hp:
        <input
          type="text"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Registrasi;
