
import { memo } from 'react';

const Preloader = () =>{
    return (
        <>
            <div id="preloder">
                <div class="loader"></div>
            </div>
        </>
    );
};

export default memo(Preloader);