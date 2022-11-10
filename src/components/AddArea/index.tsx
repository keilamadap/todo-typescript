import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    // if(todo.length){
    //     gerarItem(todo);
    //     addForm.reset(); //resetar o texto depois de dar submit
    // }


    return (
        <C.Container>
            <div className='image'>+</div>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}