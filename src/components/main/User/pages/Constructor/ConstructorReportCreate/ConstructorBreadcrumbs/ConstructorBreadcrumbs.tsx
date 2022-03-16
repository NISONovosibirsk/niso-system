import { useEffect } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import {
    ApproveIcon,
    BreadcrumbsLineIcon,
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
            navigate('create');
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

    return (
        <div className='constructor-breadcrumbs'>
            <PreviewIcon className={createClasses} />
            <p className={`constructor-breadcrumbs__text ${createClasses}`}>
                Создание
            </p>
            <BreadcrumbsLineIcon className={createClasses} />
            <PreviewIcon className={previewClasses} />
            <p className={`constructor-breadcrumbs__text ${previewClasses}`}>
                Предпросмотр
            </p>
            <BreadcrumbsLineIcon className={previewClasses} />
            <ApproveIcon className={approveClasses} />
            <p className={`constructor-breadcrumbs__text ${approveClasses}`}>
                Одобрите
            </p>
        </div>
    );
};

export default ConstructorBreadcrumbs;
