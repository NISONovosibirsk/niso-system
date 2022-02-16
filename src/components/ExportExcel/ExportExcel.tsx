import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './ExportExcel.scss';

const ExportExcel = ({ savedForm }) => {
    const handleElementsType = element => {
        switch (element.type) {
            case 'header':
                return (
                    <tr>
                        <td>{element.placeholder}</td>
                    </tr>
                );
            case 'title':
                return (
                    <tr>
                        <td>{element.placeholder}</td>
                    </tr>
                );
            case 'subtitle':
                return (
                    <tr>
                        <td>{element.placeholder}</td>
                    </tr>
                );
            case 'range':
                return null;
            case 'checkbox':
                return null;
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
