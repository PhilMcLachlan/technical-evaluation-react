import './App.css';
import { UPDATE_CLOWNS } from './constants';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  dialogPaper: {
    minHeight: '700px',
    maxHeight: '700px',
    minWidth: '700px',
    maxWidth: '700px',
  },
};

// This dialog allows the user to add a clown name and image.
const AddAClownDialog = ({ classes, clowns, dispatch, isOpen, onDismiss }) => {
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const onAdd = () => {
    dispatch({ type: UPDATE_CLOWNS, payload: [...clowns, { name: name, imageFile: imageFile }] });
    onDismiss();
  };

  const onNameBlur = event => {
    setName(event.target.value);
  };

  const onImageChange = event => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Dialog classes={{ paper: classes.dialogPaper }} open={isOpen} onClose={onDismiss}>
      <p>
        Add a Clown!
      </p>
      <TextField id="outlined-basic" label="Enter clown name" variant="outlined" onBlur={onNameBlur} />
      <input
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={onImageChange}
      />
      <label htmlFor="raised-button-file">
        <Button component="span">
          Upload Image
        </Button>
      </label>
      {imageFile && <img src={imageFile} alt="clown"/>}
      <div className="Clown-header">
        <Button className="Clown-button" onClick={onDismiss}>
          Cancel
        </Button>
        <Button className="Clown-button" onClick={onAdd}>
          Add
        </Button>
      </div>
    </Dialog>
  );
}

export default withStyles(styles)(AddAClownDialog);
