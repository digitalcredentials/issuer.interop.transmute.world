import React from 'react';

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button/Button'
import MenuItem from '@material-ui/core/MenuItem';

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField/TextField'

import { getVpFromIssuerApi } from '../help';

import Snackbar from './Snackbar';


const options = [
  {
    value: 'CertifiedMillTestReport',
    label: 'Certified Mill Test Report',
  },
  {
    value: 'UniversityDegreeCredential',
    label: 'University Degree Credential',
  },
  {
    value: 'DIDAuth',
    label: 'DID Authentication',
  },
];

function ReceiveCredential() {

  const [state, setState] = React.useState({
    credentialSubjectId: 'did:example:credential-subject-123',
    credentialType: 'CertifiedMillTestReport',
    tmui: {}
  });

  const handleChange = event => {
    setState({ ...state, credentialType: event.target.value });
  };

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
      <Typography variant="h6" style={{ marginBottom: '32px' }}>Receive a Verifiable Credential</Typography>

      <TextField
        id="outlined-select-credentialType"
        style={{ marginBottom: '16px' }}
        select
        fullWidth
        label="Credential Type"
        value={state.credentialType}
        onChange={handleChange}
        variant="outlined"
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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
          const vp = await getVpFromIssuerApi(state.credentialType, state.credentialSubjectId)
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
