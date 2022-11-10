import * as C from './styles';
import { Item } from '../../types/Item'
import { type } from 'os';
import { useState } from 'react';

type Props = {
    item: Item
}
//sempre que for criar props precisa determinar o type
export const ListItem = ({ item }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}