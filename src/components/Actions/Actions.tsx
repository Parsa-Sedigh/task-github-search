import {FormEvent, useRef, useState} from "react";
import {getUsers} from "../../services/requests";
import {STH_WENT_WRONG} from "../../constants/constants";
import {IActionsProps} from "../../types/interfaces";




export const Actions = ({statusObj, setStatusObj}: IActionsProps) => {
    const inputRef = useRef<any>('');

    const onSearch = async (event: any) => {
        event.preventDefault();
        setStatusObj({status: 'LOADING', message: ''});
        const searchInputValue = event.target[0].value;
        console.log('inputRef: ', inputRef)
        try {
            const response = await getUsers({query: inputRef.current.value});
            const data = await response.json();

            console.log('data: ', data)
            setStatusObj({status: 'IDLE', message: ''});
        } catch (error) {
            console.log('error in getting users:', error);
            setStatusObj({status: 'IDLE', message: STH_WENT_WRONG});
        }
    };

    const onClear = () => {
        console.log('onClear')
        inputRef.current.value = '';
    };

    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text"  name="text" ref={inputRef} placeholder="Search Users..." />

                <input type="submit" className="btn btn-block btn-dark" />
            </form>

            <button onClick={onClear}>Clear</button>

        </div>
    );
};
