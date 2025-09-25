import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const addUser = () => {
    if (username.trim() === "" || email.trim() === "")
      return alert("Vennligst fyll alle feltene.");

    const newUser = { username, email };
    setUsers([...users, newUser]);

    setUsername("");
    setEmail("");
  };

  return (
    <>
      <div>
        <h2>Brukere</h2>
        <ul>
          {users.map((data, index) => (
            <li key={index}>
              Brukernavn: {data.username} | Email: {data.email}
            </li>
          ))}
        </ul>
        <h2>Legg til ny bruker</h2>
        <div>
          <input
            type="text"
            placeholder="Navn..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={addUser}>Legg til bruker</button>
        </div>
      </div>
    </>
  );
}
