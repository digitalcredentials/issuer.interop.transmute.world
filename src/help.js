
import vcSchemaForms from './vc-schema-forms'

import vendors from './vendors'
import verificationMethods from './vendors/verificationMethods'

const formDataToBindingModel = (addToWalletType, formData) => {
  const issuer_endpoint = localStorage.getItem('issuer_endpoint') || vendors[0].value;
  const options = verificationMethods[issuer_endpoint];
  const assertionMethod = localStorage.getItem('issuer_assertionMethod') || options[0].value
  const issuer = assertionMethod.split('#')[0]
  let bindingModel = vcSchemaForms[addToWalletType].bindingModel;

  switch (addToWalletType) {
    case 'CertifiedMillTestReport': {
      bindingModel = {
        ...bindingModel,
        issuer,
      }
      break;
    }
    case 'UniversityDegreeCredential': {
      bindingModel = {
        ...bindingModel,
        issuer,
      }
      break;
    }
    default:
      throw new Error('Unknown addToWalletType type.')
  }
  return bindingModel;
}

export const getVpForAddToWalletType = async (addToWalletType, formData) => {
  const bindingModel = formDataToBindingModel(addToWalletType, formData)
  const issuer_endpoint = localStorage.getItem('issuer_endpoint') || vendors[0].value;
  const options = verificationMethods[issuer_endpoint];
  const assertionMethod = localStorage.getItem('issuer_assertionMethod') || options[0].value
  const response = await fetch(issuer_endpoint, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      credential: bindingModel, options: {
        proofPurpose: 'assertionMethod',
        verificationMethod: assertionMethod
      }
    })
  });
  let vc = await response.json();
  return {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "type": "VerifiablePresentation",
    "verifiableCredential": [vc]
  }

}