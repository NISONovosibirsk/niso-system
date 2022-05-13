import { EditIcon, TrashIcon } from '../../../../../../assets';
import './HandbookNoteItem.scss'

const HandbookNoteItem = () => {
    return (
        <li className='handbook-item'>
            <p className='handbook-item__placeholder'>1. Коэфициент успеваемости</p>
            <div className='handbook-item__value'>
                0.5
            </div>
            <EditIcon className='handbook-item__edit'/>
            <TrashIcon className='handbook-item__delete'/>
        </li>
    )
}

export default HandbookNoteItem;