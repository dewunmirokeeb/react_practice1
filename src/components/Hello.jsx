const name = "Rob";

function displayMessage(message) {
  return message;
}

function Hello(props) {
  return (
    <div>
      <h1>
        {props.message} {props.name} {props.like}
      </h1>
    </div>
  );
}
export default Hello;
