import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './ExportExcel.scss';

const ExportExcel = ({ savedForm }) => {
    const handleElementsType = element => {
        switch (element.type) {
            case 'header':
            case 'title':
            case 'subtitle':
                return (
                    <tr>
                        <td>{element.placeholder}</td>
                    </tr>
                );
            case 'range':
            case 'checkbox':
            case 'radio':
                return null;
            default:
                return (
                    <>
                        <tr>
                            <td>{element.label}</td>
                            {element.isRequired ? <td>*</td> : null}
                        </tr>
                        <tr>
                            <td>{''}</td>
                        </tr>
                    </>
                );
        }
    };

    return (
        <>
            <table className='export-excel' id='table'>
                <tbody>
                    {savedForm.content.map(element =>
                        handleElementsType(element)
                    )}
                </tbody>
            </table>
            <ReactHTMLTableToExcel
                className='export-excel__button'
                table='table'
                buttonText=''
                filename={savedForm.title}
                sheet={savedForm.title}
            />
        </>
    );
};

export default ExportExcel;
