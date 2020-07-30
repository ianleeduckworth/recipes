import * as React from 'react';
import { db, auth } from '../../firebase';
import { Step } from '../../data/recipes';
import { withRouter, RouteComponentProps } from 'react-router';
import { Routes } from '../../data/routes';
import { checkAuthAndLogout } from '../../utilities/authUtilities';

interface AddRecipeProps extends RouteComponentProps {}

const AddRecipeComponent = (props: AddRecipeProps) => {
    const { history } = props;

    const [title, setTitle] = React.useState('');
    const [blurb, setBlurb] = React.useState('');
    const [cookTime, setCookTime] = React.useState('');
    const [source, setSource] = React.useState('');
    const [servings, setServings] = React.useState(0);
    const [ingredients, setIngredients] = React.useState([] as string[]);
    const [steps, setSteps] = React.useState('' as string | Step[]);
    const [tags, setTags] = React.useState([] as string[]);
    const [notes, setNotes] = React.useState('');

    const [ingredientsInputs, setIngredientsInputs] = React.useState(['ingredients-input-1']);
    const [tagsInputs, setTagsInputs] = React.useState([] as string[]);
    const [stepsInputs, setStepsInputs] = React.useState([{ headerId: 'steps-header-input-1', contentId: 'steps-content-input-1' }] as { headerId: string, contentId: string }[]);
    
    const [simpleSteps, setSimpleSteps] = React.useState(true);

    const [error, setError] = React.useState('');

    React.useEffect(() => {
        checkAuthAndLogout(history);
    }, [history]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { currentUser } = auth;

        if (!currentUser) {
            console.log('user is not logged in.  log in to continue');
            return;
        }

        try {
            const { id } = await db.collection('recipes').add({
                userId: currentUser.uid,
                title,
                blurb,
                cookTime,
                source,
                servings,
                ingredients,
                steps,
                notes,
                tags
            });
            history.push(`${Routes.recipe}/${id}`);
        } catch (e) {
            setError(e)
        }
    }

    const onAddIngredientsInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const inputNumber = ingredientsInputs.length + 1;
        setIngredientsInputs([...ingredientsInputs, `ingredients-input-${inputNumber}`]);
        setIngredients([...ingredients, '']);
    }

    const onAddTagsInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const inputNumber = tagsInputs.length + 1;
        setTagsInputs([...tagsInputs, `ingredients-input-${inputNumber}`]);
        setTags([...tags, '']);
    }

    const onAddStepsInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const inputNumber = stepsInputs.length + 1;
        setStepsInputs([...stepsInputs, {
            headerId: `steps-header-input-${inputNumber}`,
            contentId: `steps-content-input-${inputNumber}`
        }]);
        setSteps([...steps as Step[], {
            header: '',
            content: ''
        }]);
    }

    const onIngredientsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        const index = parseInt(id.split('-')[2]);
        let newIngredients = [...ingredients];
        newIngredients[index - 1] = value;
        setIngredients(newIngredients);
    }

    const onTagsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        const index = parseInt(id.split('-')[2]);
        let newTags = [...tags];
        newTags[index - 1] = value;
        setTags(newTags);
    }

    const onStepsHeaderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        const index = parseInt(id.split('-')[3]);
        let step = (steps[index - 1] as Step);
        step.header = value;
        let newSteps = (steps as Step[]);
        newSteps[index - 1] = step;
        setSteps(newSteps);
    }

    const onStepsContentInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        const index = parseInt(id.split('-')[3]);
        let step = (steps[index - 1] as Step);
        step.content = value;
        let newSteps = (steps as Step[]);
        newSteps[index - 1] = step;
        setSteps(newSteps);
    }

    const onRemoveTagsInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault();
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);

        const newTagsInputs = [...tagsInputs];
        newTagsInputs.splice(index, 1);
        setTagsInputs(newTagsInputs);
    }

    const onRemoveIngredientsInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault();

        if (index === 0) {
            return;
        }

        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);

        const newIngredientsInputs = [...ingredientsInputs];
        newIngredientsInputs.splice(index, 1);
        setIngredientsInputs(newIngredientsInputs)
    }

    const onRemoveStepsInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault();

        if (index === 0 || !(steps as Step[])) {
            return;
        }

        const newSteps = ([...steps] as Step[]);
        newSteps.splice(index, 1);
        setSteps(newSteps);

        const newStepsInputs = [...stepsInputs];
        newStepsInputs.splice(index, 1);
        setStepsInputs(newStepsInputs);
    }

    return (
        <div className="container">
            <h1 className="pt-3">Add a recipe</h1>
            <form onSubmit={onSubmit} className="pb-4">
                <div className="container border py-2 my-3">
                    <div className="form-group">
                        <label htmlFor="recipe-title">Title *</label>
                        <input className="form-control" id="recipe-title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipe-blurb">Blurb *</label>
                        <input className="form-control" id="recipe-blurb" onChange={e => setBlurb(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipe-cooktime">Cook time *</label>
                        <input className="form-control" id="recipe-cooktime" onChange={e => setCookTime(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipe-source">Source</label>
                        <input className="form-control" id="recipe-source" onChange={e => setSource(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipe-servings">Servings *</label>
                        <input type="number" className="form-control" id="recipe-servings" onChange={e => setServings(parseInt(e.target.value))} />
                    </div>
                </div>
                <div className="container border py-2 my-3">
                    <div className="form-group">
                        <label htmlFor="">Ingredients *</label>
                        {ingredientsInputs.map((input, index) =>
                            <div key={input} className="d-flex">
                                <h6 className="py-3 pr-3">{index + 1}.</h6>
                                <input className="form-control my-1" id={input} onChange={onIngredientsInputChange} />
                                {index > 0 && <button type="button" className="close pb-3 px-2" aria-label="Close" onClick={(e) => onRemoveIngredientsInput(e, index)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>}
                            </div>
                        )}
                        <button className="btn btn-outline-secondary my-2" onClick={onAddIngredientsInput}>+ Add Ingredient</button>
                    </div>
                </div>
                <div className="container border py-2 my-3">
                    <div className="pb-3">
                        <div>
                            <p className="mb-1">Steps style</p>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="stepsTypeRadios"
                                id="radio-simple"
                                value="simple"
                                checked={simpleSteps}
                                onChange={() => {
                                    setSimpleSteps(true);
                                    setStepsInputs([]);
                                    setSteps('');
                                }}
                            />
                            <label className="form-check-label" htmlFor="radio-simple">
                                Simple
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="stepsTypeRadios"
                                id="radio-headercontent"
                                value="headercontent"
                                checked={!simpleSteps}
                                onChange={() => {
                                    setSimpleSteps(false);
                                    setStepsInputs([{
                                        headerId: 'steps-header-input-1',
                                        contentId: 'steps-content-input-1'
                                    }]);
                                    setSteps([{
                                        header: '',
                                        content: ''
                                    }]);
                                }}
                            />
                            <label className="form-check-label" htmlFor="radio-headercontent">
                                Header / Content
                            </label>
                        </div>
                    </div>
                    {simpleSteps &&
                        <div className="form-group">
                            <label htmlFor="recipe-steps">Steps *</label>
                            <textarea rows={5} className="form-control" id="recipe-steps" onChange={e => setSteps(e.target.value)} />
                        </div>
                    }
                    {!simpleSteps &&
                        <>
                            {stepsInputs.map((input, index) =>
                                <div key={input.headerId}>
                                    <h6>{index + 1}.</h6>
                                    <div className="form-group">
                                        <label htmlFor="recipe-source">Header</label>
                                        <div className="d-flex">
                                            <input className="form-control" id={input.headerId} onChange={onStepsHeaderInputChange} />
                                            {index > 0 && <button type="button" className="close pb-3 px-2" aria-label="Close" onClick={(e) => onRemoveStepsInput(e, index)}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipe-source">Content</label>
                                        <textarea rows={5} className="form-control" id={input.contentId} onChange={onStepsContentInputChange} />
                                    </div>
                                </div>
                            )}
                            <button className="btn btn-outline-secondary my-2" onClick={onAddStepsInput}>+ Add Step</button>
                        </>
                    }
                </div>
                <div className="container border py-2 my-3">
                    <div className="form-group">
                        <label htmlFor="recipe-tags">Tags</label>
                        {tagsInputs.map((input, index) =>
                            <div key={input} className="d-flex">
                                <h6 className="py-3 pr-3">{index + 1}.</h6>
                                <input className="form-control my-1" id={input} onChange={onTagsInputChange} />
                                <button type="button" className="close pb-3 px-2" aria-label="Close" onClick={(e) => onRemoveTagsInput(e, index)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )}
                        <div>
                            <button className="btn btn-outline-secondary my-2" onClick={onAddTagsInput}>+ Add Tag</button>
                        </div>
                    </div>
                </div>
                <div className="container border py-2 my-3">
                    <div className="form-group">
                        <label htmlFor="recipe-notes">Notes</label>
                        <textarea rows={5} className="form-control" id="recipe-notes" onChange={e => setNotes(e.target.value)} />
                    </div>
                </div>
                <button className="btn btn-outline-primary" type="submit">Submit</button>
            </form>
            {error &&
                <div className="alert alert-danger mt-3" role="alert">
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={() => setError('')}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Oh snap!</strong> {error}
                </div>
            }
        </div>
    )
}

export const AddRecipe = withRouter(AddRecipeComponent);