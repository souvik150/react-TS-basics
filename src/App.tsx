import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Souvik",
      last: "Mukherjee",
    },
    {
      first: "Jane",
      last: "Doe",
    },
    {
      first: "John",
      last: "Doe",
    },
  ];
  return (
    <div className="App">
      <Greet name="Souvik" messageCount={20} isLogged={true} />
      <Greet name="Souvik" isLogged={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Good Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonarso Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <LoggedIn />

      <User />

      <Counter />
    </div>
  );
}

export default App;
