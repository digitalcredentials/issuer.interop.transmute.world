
import bindingModels from './bindingModels'

export const getVpFromIssuerApi = async (credentialType, credentialSubjectId) => {
  const issuerEndpoint = 'https://vc.transmute.world/api/v0/issuer/issue';
  let bindingModel = bindingModels[credentialType]

  const payload = {
    ...bindingModel,
    issuer: "did:web:vc.transmute.world",
    credentialSubject: {
      ...bindingModel.credentialSubject,
      id: credentialSubjectId
    }
  }

  const response = await fetch(issuerEndpoint, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload)
  });
  let vc = await response.json();
  const vp = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "type": "VerifiablePresentation",
    "verifiableCredential": [vc]
  };
  return vp;
}