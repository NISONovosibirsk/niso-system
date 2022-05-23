import { IReduxActions } from '../../interfaces';
import {
    UPDATE_SEARCH_CHARS,
    UPDATE_SEARCH_LIST,
} from '../reduxTypes/userListEITypes';

const initialState = {
    search: {
        chars: '',
        filter: {
            list: [
                {
                    title: 'Район',
                    options: [
                        'Дзержинский',
                        'Железнодорожный',
                        'Заельцовский',
                        'Калининский',
                        'Кировский',
                        'Ленинский',
                        'Октябрьский',
                        'Первомайский',
                        'Советский',
                        'Центральный',
                    ],
                    picked: [] as string[],
                },
                {
                    title: 'Тип',
                    options: ['ОУ', 'ДОУ', 'ДО', 'Другие'],
                    picked: [] as string[],
                },
            ],
        },
    },
    cards: [
        {
            type: 'ДО',
            district: 'Дзержинский',
            name: 'МБУДО ЦВР «Галактика»',
            fullname:
                'муниципальное бюджетное учреждение дополнительного образования города Новосибирска «Центр внешкольной работы «Галактика»',
            address:
                '630051, Новосибирская область, город Новосибирск, проспект Дзержинского, 83',
            currentAddress:
                '630051, город Новосибирск, проспект Дзержинского, 83; 630089, город Новосибирск, улица Есенина, 16; 630015, город Новосибирск, улица Гоголя, 228; 630015, город Новосибирск, улица Гоголя, дом 206',
            inn: '5401118778',
            orgn: '1025400515051',
            mainDO: '',
            mainNooOoSo: '',
            additional:
                'Вид образования - дополнительное образование, подвид образования - дополнительное образование детей и взрослых',
        },
        {
            type: 'ДОУ',
            district: 'Калининский',
            name: 'МКДОУ д/сад № 2',
            fullname:
                'муниципальное казенное дошкольное образовательное учреждение города Новосибирска "Детский сад № 2" ',
            address:
                '630075, Новосибирская область, город Новосибирск, улица Танковая, дом 31/1',
            currentAddress:
                '630075, Новосибирская область, город Новосибирск, улица Танковая, дом 31/1',
            inn: '5410779647',
            orgn: '1135476126081',
            mainDO: 'Вид образования – общее образование Уровень образования – дошкольное образование ',
            mainNooOoSo: '',
            additional:
                'Вид образования - дополнительное образование, подвид дополнительного образования - дополнительное образование детей и взрослых',
        },
        {
            type: 'ОУ',
            district: 'Кировский',
            name: 'МКОУ Прогимназия № 1',
            fullname:
                'муниципальное казенное общеобразовательное учреждение города Новосибирска "Прогимназия № 1"',
            address: '630087, г. Новосибирск, ул. Новогодняя, 36а',
            currentAddress: '630087, г. Новосибирск, ул. Новогодняя, 36а',
            inn: '5403132680',
            orgn: '1025400000000',
            mainDO: 'Вид образования - общее образование, уровень образования - Дошкольное образование',
            mainNooOoSo: 'начальное общее образование',
            additional:
                'Вид образования - дополнительное образование, подвид дополнительного образования - дополнительное образование детей и взрослых',
        },
    ],
};

export const userListEIReducer = (
    state = { ...initialState },
    action: IReduxActions
) => {
    switch (action.type) {
        //FILTER
        case UPDATE_SEARCH_CHARS:
            return {
                ...state,
                search: {
                    ...state.search,
                    chars: action.payload,
                },
            };
        case UPDATE_SEARCH_LIST:
            return {
                ...state,
                search: {
                    ...state.search,
                    list: action.payload,
                },
            };
        default:
            return state;
    }
};
