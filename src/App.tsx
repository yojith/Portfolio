import { useState } from "react";
// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log("Selected item:", item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading={"Cities"}
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
