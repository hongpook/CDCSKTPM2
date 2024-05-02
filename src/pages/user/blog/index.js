import BreadCrumb from 'component/BreadCrumb';
import Blogs from 'component/Blog';
import { memo } from 'react';

const Blog = () =>{
    return (
        <>
            <BreadCrumb title="Blogs"/>
            <Blogs/>
        </>
    );
};

export default memo(Blog);