import * as React from 'react';
import { db, auth } from '../../firebase';

const JsonImporterComponent = () => {
    const [jsonObject, setJsonObject] = React.useState('');

    const onJsonImportChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setJsonObject(e.target.value);
    }

    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const { currentUser } = auth;

        if (!currentUser) {
            console.log('user is not logged in.  log in to continue');
            return;
        }

        const obj = JSON.parse(jsonObject);

        try {
            await db.collection('recipes').add({
                ...obj,
                userId: currentUser.uid
            });
            console.log(`Success! recipe "${obj.title} was added!`);
        } catch (e) {
            console.log('uh oh...', e);
        }
    }

    return (
        <div className="container">
            <h1>Json Importer</h1>
            <p>Paste JSON object here</p>
            <textarea rows={20} className="form-control" id="json-to-import" onChange={onJsonImportChange} />
            <button className="btn btn-outline-primary my-2" onClick={onSubmit}>Submit</button>
            {/* <div className="alert alert-success mt-3" role="alert">
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Success!</strong> "Recipe added"
            </div> */}
        </div>
    )
}

export const JsonImporter = JsonImporterComponent;