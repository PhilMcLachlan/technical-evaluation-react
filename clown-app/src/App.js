import './App.css';
import { useReducer, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddAClownDialog from "./AddAClownDialog";
import SeeTheClownsDialog from "./SeeTheClownsDialog";
import { clownsInitialState, clownsReducer } from "./reducer";

// This is the main app, where a user can select from a button press to add clowns or see the clowns.
const App = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSeeOpen, setIsSeeOpen] = useState(false);
  const [{ clowns }, dispatch] = useReducer(clownsReducer, clownsInitialState);

  return (
    <div className="Clown">
      <header className="Clown-header">
        <p>
          Clown App!
        </p>
        <Button className="Clown-button" onClick={() => setIsAddOpen(true)}>
          Add a clown
        </Button>
        <Button className="Clown-button" onClick={() => setIsSeeOpen(true)}>
          See the clowns
        </Button>
        {isAddOpen && <AddAClownDialog clowns={clowns} dispatch={dispatch} isOpen={isAddOpen} onDismiss={() => setIsAddOpen(false)}/>}
        {isSeeOpen && <SeeTheClownsDialog clowns={clowns} isOpen={isSeeOpen} onDismiss={() => setIsSeeOpen(false)}/>}
      </header>
    </div>
  );
}

export default App;
