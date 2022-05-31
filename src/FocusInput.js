import React, { useEffect ,useRef} from 'react';

function FocusInput(props) {
    const inputRef=useRef(null)
    useEffect(()=>{

        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type="text"></input>
            {/* <input  type="text"></input> */}
        </div>
    );
}

export default FocusInput;