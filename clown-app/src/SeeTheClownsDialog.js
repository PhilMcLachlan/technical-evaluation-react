import { withStyles } from "@material-ui/styles";
import { Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = {
  dialogPaper: {
    minHeight: '700px',
    maxHeight: '700px',
    minWidth: '700px',
    maxWidth: '700px',
  },
};

// This dialog shows the clown name with the clown image below it for all clown.
const SeeTheClownsDialog = ({ classes, clowns, isOpen, onDismiss }) => {
  return (
    <Dialog classes={{ paper: classes.dialogPaper }} open={isOpen} onClose={onDismiss}>
      {clowns && clowns.map((clown) => (
        <>
          <p>{clown.name}</p>
          <img src={clown.imageFile} alt="clown" />
        </>
      ))}
      <div className="Clown-header">
        <Button className="Clown-button" onClick={onDismiss}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(SeeTheClownsDialog);
