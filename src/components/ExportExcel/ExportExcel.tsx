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
                        <th
                            style={{ background: '#0f0', fontSize: '24px' }}
                            colSpan={2}
                        >
                            {element.placeholder}
                        </th>
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
                {savedForm.content.map(element => handleElementsType(element))}
            </table>
            <ReactHTMLTableToExcel
                className='export-excel__button'
                table='table'
                buttonText=''
                filename={savedForm.subtitle}
                sheet={savedForm.subtitle}
            />
        </>
    );
};

export default ExportExcel;
