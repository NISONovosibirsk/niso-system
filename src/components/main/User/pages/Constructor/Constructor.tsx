import { FormConstructor, Reports } from '../../..';
import { Button } from '../../../../support';
import './Constructor.scss';
import ConstructorFilterTabs from './ConstructorFilterTabs/ConstructorFilterTabs';
import ConstructorSearchbar from './ConstructorSearchbar/ConstructorSearchbar';

const Constructor = () => {
    return (
        <section className='user-constructor'>
            <ConstructorSearchbar />
            <Button
                title='Статистика'
                height='48px'
                width='150px'
                margin='0 8px 0 16px'
                type='light-grey'
            />
            <Button
                title='Добавить'
                height='48px'
                width='150px'
                margin='0 16px 0 8px'
            />
            <ConstructorFilterTabs />
            {/* <Reports /> */}
            {/* <FormConstructor /> */}
        </section>
    );
};

export default Constructor;
