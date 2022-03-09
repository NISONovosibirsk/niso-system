import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Droppable } from 'react-beautiful-dnd';
import { reportFormElementTypeHandler } from '../../../../middleware/reportFormElementTypeHandler';
import { useDispatch } from 'react-redux';
import {
    setPreview,
    updateAddedElements,
} from '../../../../store/actions/formConstructorActions';
import { setForms } from '../../../../store/actions/reportsFormsListActions';
import { Button, ShowHideButton } from '../../../support';
import { ConstructorFormElement } from '..';

const CustomForm = () => {
    const { addedElements, isPreview, isValid } = useTypeSelector(
        state => state.formConstructor
    );
    const { forms } = useTypeSelector(state => state.reportsFormsList);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(
            updateAddedElements([
                {
                    id: 1,
                    type: 'header',
                    placeholder: '',
                    isDisabled: false,
                },
                {
                    id: 2,
                    type: 'title',
                    placeholder: '',
                    isDisabled: false,
                },
            ])
        );
    };

    // convert timestamp to human time
    const convertTimestamp = id => {
        const date = new Date(id);
        return `${date.getDate()}.0${
            date.getMonth() + 1
        }.${date.getFullYear()} ${date.getHours()}:${
            (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
        }`;
    };

    // save element to storage by button
    const handleSave = e => {
        e.preventDefault();

        const newFormsList = [...forms];

        const form: any = {};
        form._id = Date.now();
        form.content = [...addedElements];
        form.sendStatus = [];
        form.title = [...addedElements].find(
            element => (element.type = 'title')
        ).placeholder;
        form.subtitle = [...addedElements].find(
            element => (element.type = 'header')
        ).placeholder;
        form.date = convertTimestamp(form._id);

        localStorage.setItem(String(form._id), JSON.stringify(form));
        newFormsList.unshift(form);

        dispatch(setForms(newFormsList));
        handleReset();
    };

    const handleIsPreview = () => {
        dispatch(setPreview(!isPreview));
    };

    return (
        <Droppable droppableId={'customForm'}>
            {provided => (
                <form
                    onSubmit={handleSave}
                    className='custom-form'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <ShowHideButton
                        isShow={isPreview}
                        onClick={handleIsPreview}
                    />
                    <div className='custom-form__field'>
                        {isPreview
                            ? addedElements.map(item =>
                                  reportFormElementTypeHandler({
                                      onValueChange: () => {},
                                      element: item,
                                      isFinalForm: true,
                                  })
                              )
                            : addedElements.map((AddedElement, index) => (
                                  <ConstructorFormElement
                                      element={AddedElement}
                                      id={AddedElement.id}
                                      index={index}
                                      key={AddedElement.id}
                                  />
                              ))}
                    </div>
                    {addedElements.length > 2 && (
                        <Button
                            title='Сохранить форму'
                            filled={true}
                            isDisabled={!isValid}
                        />
                    )}
                    {provided.placeholder}
                </form>
            )}
        </Droppable>
    );
};

export default CustomForm;
