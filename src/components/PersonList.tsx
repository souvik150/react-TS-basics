import { Name } from "./types/Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h6 key={name.first}>
            {name.first} {name.last}
          </h6>
        );
      })}
    </div>
  );
};
