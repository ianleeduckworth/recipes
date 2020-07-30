import * as React from 'react';
import { db, auth } from '../../firebase';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { checkAuthAndLogout } from '../../utilities/authUtilities';

interface JsonImporterProps extends RouteComponentProps {}

const JsonImporterComponent = (props: JsonImporterProps) => {
    const { history } = props;

    React.useEffect(() => {
        checkAuthAndLogout(history);
    }, [history])

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
        </div>
    )
}

export const JsonImporter = withRouter(JsonImporterComponent);