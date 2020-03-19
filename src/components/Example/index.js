import React from 'react';

import Button from '@material-ui/core/Button'
import { SchemaForm } from 'react-schema-form';

import Ajv from 'ajv';

function Example({ defaultValues, schema, form, onSubmit }) {

    const [model, setModel] = React.useState({});

    const [schemaFormState, setSchemaFormState] = React.useState({
        showErrors: false
    })

    return (
        <React.Fragment>
            <SchemaForm
                showErrors={schemaFormState.showErrors}
                schema={schema}
                form={form}
                model={model}
                onModelChange={(key, value) => {
                    setModel({
                        ...model,
                        [key]: value
                    })
                }} />
            <Button variant={'contained'} style={{ marginTop: '16px' }} onClick={() => {
                let ajv = new Ajv();
                ajv.addSchema(schema, schema.$id)
                let modelWithDefaults = {
                    ...defaultValues,
                    ...model
                }
                let valid = ajv.validate(
                    schema,
                    modelWithDefaults
                );
                if (!valid) {
                    setSchemaFormState({
                        ...schemaFormState,
                        showErrors: true
                    })
                    console.log(ajv.errors)
                } else {
                    setSchemaFormState({
                        ...schemaFormState,
                        showErrors: false
                    })
                    setModel({})
                    onSubmit({ ...modelWithDefaults });
                }
            }}>Receive</Button>
        </React.Fragment>

    );
}

export default Example;
