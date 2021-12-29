import {FormEvent, useEffect, useRef, useState} from "react";
import {getUsers} from "../../services/requests";
import {STH_WENT_WRONG} from "../../constants/constants";
import {IActionsProps, IGetUsersResponse} from "../../types/interfaces";

const ERROR_TIME = 3000;


export const Actions = ({statusObj, setStatusObj, setUsers}: IActionsProps) => {
    const inputRef = useRef<any>('');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        console.log('in hasError effect: ', hasError)
        if (hasError) {
            setTimeout(() => {
                setHasError(false);
            }, ERROR_TIME);
        }
    }, [hasError]);

    const onSearch = async (event: any) => {
        event.preventDefault();
        const inputValue = inputRef.current.value;

        if (inputValue === '') {
            setHasError(true);

            return;
        }

        setStatusObj({status: 'LOADING', message: ''});
        const searchInputValue = event.target[0].value;
        inputRef.current.value = '';
        console.log('inputRef: ', inputRef)
        try {
            const response = await getUsers({query: inputValue});
            const data: IGetUsersResponse = await response.json();

            setUsers(data.items);

            console.log('data: ', data)
            setStatusObj({status: 'IDLE', message: ''});
        } catch (error) {
            console.log('error in getting users:', error);
            setStatusObj({status: 'IDLE', message: STH_WENT_WRONG});
        }
    };

    const onClear = () => {
        console.log('onClear')
        // inputRef.current.value = '';
        setUsers([]);
    };

    return (
        <div>
            {hasError && <div className="alert alert-light">Please enter something!</div>}

            <form className="form" onSubmit={onSearch}>
                <input type="text"  name="text" ref={inputRef} placeholder="Search Users..." />

                <input type="submit" className="btn btn-block btn-dark" disabled={statusObj.status === 'LOADING'} />
            </form>

            <button className="btn-block btn btn-light" onClick={onClear}>Clear</button>

        </div>
    );
};
