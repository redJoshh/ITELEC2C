// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click this!
      </Button>
    </div>
  );
}

export default App;
