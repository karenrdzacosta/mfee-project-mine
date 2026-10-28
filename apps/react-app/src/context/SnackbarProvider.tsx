import React, {createContext, useCallback, useState} from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface SnackbarContextProps {
	showSnackbar:(message:string) => void;
}

interface SnackbarProviderProps {
	children: React.JSX.Element;
};


export const SnackbarContext = createContext<SnackbarContextProps>({
	showSnackbar: () => {}
});

export function SnackbarProvider({
	children,
}: SnackbarProviderProps): React.JSX.Element {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');

	const showSnackbar = useCallback((msg: string) => {
		setMessage(msg);
		setOpen(true);
	}, []);

	const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

	const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <SnackbarContext.Provider value={{showSnackbar}}>
			{children}
			<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
		</SnackbarContext.Provider>
      
  );
}
