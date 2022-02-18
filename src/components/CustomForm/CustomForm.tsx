import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Button, FormElement, ShowHideButton } from '..';
import { Droppable } from 'react-beautiful-dnd';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    getSavedForms,
    setPreview,
    updateConstructor,
    updateStatus,
} from '../../store/actions/formActions';

const CustomForm = () => {
    const { constructor, isActive } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    useEffect(() => {
        handleStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleReset = () => {
        dispatch(
            updateConstructor([
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
    const handleTime = key => {
        const date = new Date(Number(key));
        return `${date.getDate()}.0${
            date.getMonth() + 1
        }.${date.getFullYear()} ${date.getHours()}:${
            (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
        }`;
    };

    // save element to storage by button
    const handleSave = e => {
        e.preventDefault();
        const key = String(Date.now());
        localStorage.setItem(key, JSON.stringify(constructor));
        handleReset();
        handleStorage();
    };

    // add elements from storage to state
    const handleStorage: any = () => {
        const newState: Array<any> = [];

        Object.keys(localStorage).forEach(key => {
            const json = localStorage.getItem(key);

            if (json !== null) {
                const form: any = {};
                form.date = handleTime(key);
                form.content = JSON.parse(json);
                form._id = Number(key);

                form.content.forEach(item => {
                    switch (item.type) {
                        case 'title':
                            form.title = item.placeholder;
                            break;
                        case 'header':
                            form.subtitle = item.placeholder;
                            break;
                    }
                });

                newState.push(form);
            }
            dispatch(getSavedForms(newState));
        });
    };

    const handleIsPreview = () => {
        const newState = {...isActive}
        newState.preview = !newState.preview;
        dispatch(updateStatus(newState));
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
                        isShow={isActive.preview}
                        onClick={handleIsPreview}
                    />
                    <div className='custom-form__field'>
                        {isActive.preview
                            ? constructor.map(item =>
                                  savedFormTypeHandler({
                                      onValueChange: () => {},
                                      element: item,
                                      isFinalForm: true,
                                  })
                              )
                            : constructor.map((item: any, index: number) => (
                                  <FormElement
                                      item={item}
                                      id={item.id}
                                      index={index}
                                      key={item.id}
                                  />
                              ))}
                    </div>
                    {constructor.length > 2 && (
                        <Button title='Сохранить форму' />
                    )}
                    {provided.placeholder}
                </form>
            )}
        </Droppable>
    );
};

export default CustomForm;
