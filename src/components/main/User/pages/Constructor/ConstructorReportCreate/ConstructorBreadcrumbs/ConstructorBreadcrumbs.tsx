import { useEffect } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import {
    SendIcon,
    BreadcrumbsLineIcon,
    CreateIcon,
    PreviewIcon,
} from '../../../../../../../assets';
import './ConstructorBreadcrumbs.scss';

const ConstructorBreadcrumbs = () => {
    const navigate = useNavigate();
    const resolvedCreate = useResolvedPath('create');
    const resolvedPreview = useResolvedPath('preview');
    const resolvedSend = useResolvedPath('send');

    const matchCreate = useMatch(resolvedCreate.pathname);
    const matchPreview = useMatch(resolvedPreview.pathname);
    const matchSend = useMatch(resolvedSend.pathname);

    useEffect(() => {
        !(matchCreate || matchPreview || matchSend) && handleRouteToCreate();
    });

    const createClasses = matchCreate
        ? 'constructor-breadcrumbs_active'
        : matchPreview
        ? 'constructor-breadcrumbs_complete'
        : matchSend
        ? 'constructor-breadcrumbs_complete'
        : '';

    const previewClasses = matchPreview
        ? 'constructor-breadcrumbs_active'
        : matchSend
        ? 'constructor-breadcrumbs_complete'
        : '';

    const sendClasses = matchSend ? 'constructor-breadcrumbs_active' : '';

    const handleRouteToCreate = () => {
        navigate('create');
    };

    const handleRouteToPreview = () => {
        navigate('preview');
    };

    const handleRouteToSend = () => {
        navigate('send');
    };

    return (
        <div className='constructor-breadcrumbs'>
            <CreateIcon
                className={createClasses}
                onClick={handleRouteToCreate}
            />
            <p
                className={`constructor-breadcrumbs__text ${createClasses}`}
                onClick={handleRouteToCreate}
            >
                Создание
            </p>
            <BreadcrumbsLineIcon className={createClasses} />
            <PreviewIcon
                className={previewClasses}
                onClick={handleRouteToPreview}
            />
            <p
                className={`constructor-breadcrumbs__text ${previewClasses}`}
                onClick={handleRouteToPreview}
            >
                Предпросмотр
            </p>
            <BreadcrumbsLineIcon className={previewClasses} />
            <SendIcon className={sendClasses} onClick={handleRouteToSend} />
            <p
                className={`constructor-breadcrumbs__text ${sendClasses}`}
                onClick={handleRouteToSend}
            >
                Отправка
            </p>
        </div>
    );
};

export default ConstructorBreadcrumbs;
