import React from 'react';

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button/Button'

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField/TextField'

import { getVpFromIssuerApi } from '../help';

import Snackbar from './Snackbar';

function ReceiveCredential() {

  const [state, setState] = React.useState({
    credentialSubjectId: 'did:example:credential-subject-123',
    tmui: {}
  });

  return (
    <Paper style={{ padding: '32px' }}>
      <Snackbar tmui={state.tmui} doSetTmuiProp={(prop) => {
        setState({
          ...state,
          tmui: {
            ...state.tmui,
            ...prop
          }
        })
      }} />
      <Typography variant="h6" style={{ marginBottom: '32px' }}>Certified Mill Test Report</Typography>
      <TextField
        required
        fullWidth
        id="credentialSubjectId"
        label="Credential Subject ID"
        variant="outlined"
        value={state.credentialSubjectId}
      />
      <div style={{ marginTop: '16px', marginBottom: '16px', }}>
        <Button variant={'contained'} onClick={async () => {
          const vp = await getVpFromIssuerApi(state.credentialSubjectId)
          const webCredentialWrapper = new global.WebCredential(vp.type, vp);
          // Use Credential Handler API to store
          const result = await navigator.credentials.store(webCredentialWrapper);
          console.log('Result of receiving via store() request:', result);
          setState({
            ...state,
            tmui: {
              ...state.tmui,
              snackBarMessage: {
                open: true,
                variant: 'success',
                message: 'Credential stored in wallet.',
                vertical: 'top',
                horizontal: 'right',
                autoHideDuration: 20 * 1000,
              },
            }
          }
          );
        }}>Receive Credential</Button>
      </div>


    </Paper >
  );
}

export default ReceiveCredential;
