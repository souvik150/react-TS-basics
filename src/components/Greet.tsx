// type for application
// interfaces while building libraries

type GreetProps = {
  name: string;
  messageCount?: number;
  isLogged: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLogged
          ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
