import React from 'react';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField/TextField'
import Snackbar from './Snackbar';

import VCSchemaForm from './VCSchemaForm'
import SelectIssuerByImage from './SelectIssuerByImage/SelectIssuerByImage'
import SelectIssuerKey from './SelectIssuerKey/SelectIssuerKey'

import vcSchemaForms from '../vc-schema-forms'
import { getVpForAddToWalletType } from '../help';

import vendors from '../vendors'
import verificationMethods from '../vendors/verificationMethods'

const options = Object.keys(vcSchemaForms).map((c) => {
  return {
    value: c,
    label: _.startCase(c),
  }
})

function ReceiveCredential(props) {

  const [state, setState] = React.useState({
    addToWalletType: 'CertifiedMillTestReport',
    issuerEndpoint: localStorage.getItem('issuer_endpoint') || vendors[0].value,
    tmui: {}
  });

  const handleChange = event => {
    setState({ ...state, addToWalletType: event.target.value });
  };

  const { schema, form, bindingModel } = vcSchemaForms[state.addToWalletType];
  // console.log({ schema, form, bindingModel })

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
      <Typography variant="h6" style={{ marginBottom: '32px' }}>Add to Wallet</Typography>

      <SelectIssuerByImage onChange={(issuerEndpoint) => {
        setState({
          ...state,
          issuerEndpoint
        })
      }} />

      <SelectIssuerKey issuerEndpoint={state.issuerEndpoint} verificationMethods={verificationMethods} />

      <TextField
        id="outlined-select-addToWalletType"
        style={{ marginBottom: '16px' }}
        select
        fullWidth
        label="Credential Type"
        value={state.addToWalletType}
        onChange={handleChange}

      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>


      <VCSchemaForm schema={schema} form={form} bindingModel={{
        ...bindingModel,
        credentialSubject: {
          ...bindingModel.credentialSubject,
          id: props.DIDAuth.holder
        }
      }} onSubmit={async (formBindingModel) => {
        const vp = await getVpForAddToWalletType(formBindingModel)
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
      }} />
    </Paper >
  );
}

export default ReceiveCredential;
