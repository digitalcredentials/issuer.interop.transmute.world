import React from 'react';
import _ from 'lodash'

import Button from '@material-ui/core/Button'
import { SchemaForm } from 'react-schema-form';

import Ajv from 'ajv';


import { getFormSafe, getCredentialBindingModel } from './formUtils.js'
function VCSchemaForm({ schema, form, bindingModel, onSubmit }) {

    const { formSafeFlatBinding, formSafeFlatSchema, flatForm } = getFormSafe({ schema, form, bindingModel })
    const [model, setModel] = React.useState(formSafeFlatBinding);

    const [schemaFormState, setSchemaFormState] = React.useState({
        showErrors: false
    })

    return (
        <React.Fragment>
            <SchemaForm
                showErrors={schemaFormState.showErrors}
                schema={formSafeFlatSchema}
                form={flatForm}
                model={model}
                onModelChange={([key], value) => {
                    setModel({
                        ...model,
                        [key]: value
                    })
                }} />
            <Button variant={'contained'} style={{ marginTop: '16px' }} onClick={() => {
                let ajv = new Ajv();
                ajv.addSchema(formSafeFlatSchema, formSafeFlatSchema.$id)
                let valid = ajv.validate(
                    formSafeFlatSchema,
                    model
                );
                if (!valid) {
                    setSchemaFormState({
                        ...schemaFormState,
                        showErrors: true
                    })
                    console.error(ajv.errors)
                } else {


                    setSchemaFormState({
                        ...schemaFormState,
                        showErrors: false
                    })
                    const credentialBindingModel = getCredentialBindingModel(model)
                    onSubmit(credentialBindingModel);
                }
            }}>Receive</Button>
        </React.Fragment>

    );
}

export default VCSchemaForm;
