import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './ExportExcel.scss';

const ExportExcel = ({ savedForm }) => {
    const handleElementsType = (formElement, i) => {
        switch (formElement.type) {
            case 'header':
            case 'title':
            case 'subtitle':
                return (
                    <tr key={i}>
                        <th
                            style={{ background: '#0f0', fontSize: '24px' }}
                            colSpan={2}
                        >
                            {formElement.placeholder}
                        </th>
                    </tr>
                );
            case 'range':
            case 'checkbox':
            case 'radio':
                return null;
            default:
                const currentElemSplit = formElement.label.split(' / ');
                const previousElemSplit = savedForm.content[i - 1].label
                    ? savedForm.content[i - 1].label.split(' / ')[0]
                    : null;

                if (currentElemSplit[1]) {
                    let j = i;
                    const colsName: [string] = [currentElemSplit[1]];
                    while (
                        savedForm.content[j + 1] &&
                        savedForm.content[j].label.split(' / ')[0] ===
                            savedForm.content[j + 1].label.split(' / ')[0]
                    ) {
                        colsName.push(
                            savedForm.content[j + 1].label.split(' / ')[1]
                        );
                        j++;
                    }

                    if (currentElemSplit[0] === previousElemSplit) {
                        return;
                    } else {
                        return (
                            <>
                                <tr>
                                    <td></td>
                                    {colsName.map((colName, i) => (
                                        <td key={i}>{colName}</td>
                                    ))}
                                </tr>
                                <tr
                                    key={i}
                                    style={
                                        i % 2
                                            ? {}
                                            : {
                                                  background:
                                                      'rgba(216, 228, 188)',
                                              }
                                    }
                                >
                                    <td>{formElement.label.split(' / ')[0]}</td>
                                    <td>{''}</td>
                                </tr>
                            </>
                        );
                    }
                } else {
                    return (
                        <tr
                            key={i}
                            style={
                                i % 2
                                    ? {}
                                    : { background: 'rgba(216, 228, 188)' }
                            }
                        >
                            <td>{formElement.label}</td>
                            <td>{''}</td>
                        </tr>
                    );
                }
        }
    };

    return (
        <>
            <table className='export-excel' id={savedForm._id}>
                <tbody>
                    {savedForm.content.map((formElement, i) =>
                        handleElementsType(formElement, i)
                    )}
                </tbody>
            </table>
            <ReactHTMLTableToExcel
                className='export-excel__button'
                table={savedForm._id.toString()}
                buttonText=''
                filename={savedForm.subtitle}
                sheet={savedForm.subtitle}
            />
        </>
    );
};

export default ExportExcel;
