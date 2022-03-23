import { useEffect } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import {
    ApproveIcon,
    BreadcrumbsLineIcon,
    CreateIcon,
    PreviewIcon,
} from '../../../../../../../assets';
import './ConstructorBreadcrumbs.scss';

const ConstructorBreadcrumbs = () => {
    const navigate = useNavigate();
    const resolvedCreate = useResolvedPath('create');
    const resolvedPreview = useResolvedPath('preview');
    const resolvedApprove = useResolvedPath('approve');

    const matchCreate = useMatch(resolvedCreate.pathname);
    const matchPreview = useMatch(resolvedPreview.pathname);
    const matchApprove = useMatch(resolvedApprove.pathname);

    useEffect(() => {
        if (!(matchCreate || matchPreview || matchApprove)) {
            handleRouteToCreate();
        }
    });

    const createClasses = matchCreate
        ? 'constructor-breadcrumbs_active'
        : matchPreview
        ? 'constructor-breadcrumbs_complete'
        : matchApprove
        ? 'constructor-breadcrumbs_complete'
        : '';

    const previewClasses = matchPreview
        ? 'constructor-breadcrumbs_active'
        : matchApprove
        ? 'constructor-breadcrumbs_complete'
        : '';

    const approveClasses = matchApprove ? 'constructor-breadcrumbs_active' : '';

    const handleRouteToCreate = () => {
        navigate('create');
    };

    const handleRouteToPreview = () => {
        navigate('preview');
    };

    const handleRouteToApprove = () => {
        navigate('approve');
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
            <ApproveIcon
                className={approveClasses}
                onClick={handleRouteToApprove}
            />
            <p
                className={`constructor-breadcrumbs__text ${approveClasses}`}
                onClick={handleRouteToApprove}
            >
                Одобрите
            </p>
        </div>
    );
};

export default ConstructorBreadcrumbs;
