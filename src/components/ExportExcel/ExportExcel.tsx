import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { DownloadIcon } from '../../assets';
import './ExportExcel.scss';

const ExportExcel = ({ csvData, fileName }) => {
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <img
            className='export-excel'
            alt=''
            src={DownloadIcon}
            onClick={exportToCSV}
        ></img>
    );
};

export default ExportExcel;
