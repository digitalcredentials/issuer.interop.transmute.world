
import bindingModels from './bindingModels'

const formDataToBindingModel = (addToWalletType, formData) => {
  let bindingModel = bindingModels[addToWalletType];
  switch (addToWalletType) {
    case 'DIDAuth': {
      bindingModel = {
        ...bindingModel,
        holder: formData.holder,
      }
      break;
    }
    case 'CertifiedMillTestReport': {
      bindingModel = {
        ...bindingModel,
        issuer: formData.issuer,
        credentialSubject: {
          ...bindingModel.credentialSubject,
          id: formData.credentialSubjectId
        }
      }
      break;
    }
    case 'UniversityDegreeCredential': {
      bindingModel = {
        ...bindingModel,
        issuer: formData.issuer,
        credentialSubject: {
          ...bindingModel.credentialSubject,
          id: formData.credentialSubjectId
        }
      }
      break;
    }
    case 'ImmunoglobulinDetectionTestCard': {
      bindingModel = {
        ...bindingModel,
        issuer: {
          ...bindingModel.issuer,
          id: formData.issuer
        },
        credentialSubject: {
          ...bindingModel.credentialSubject,
          id: formData.credentialSubjectId
        }
      }
      break;
    }
    default:
      throw new Error('Unknown addToWalletType type.')
  }
  return bindingModel;
}

export const getVpForAddToWalletType = async (addToWalletType, formData) => {
  console.log(JSON.stringify(formData, null, 2))
  let endpoint = 'https://vc.transmute.world/v0.0.0​/credentials​/issueCredential'
  const bindingModel = formDataToBindingModel(addToWalletType, formData)

  const response = await fetch(endpoint, {
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
        verificationMethod: formData.verificationMethod
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