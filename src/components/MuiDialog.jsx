import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'
import React, { forwardRef } from 'react'

const MuiDialog = forwardRef(({title, isOpen, onClose}, ref) => {
  return (
    <Dialog open={isOpen} onClose={onclose} fullWidth ref={ref}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>This Dialog is about user details</DialogContentText>
            <DialogActions>
            <Button color="error" variant="contained" onclick={onclose}>Close</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
  )
})

export default MuiDialog