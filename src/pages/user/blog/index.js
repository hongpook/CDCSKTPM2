import BreadCrumb_blog from 'component/BreadCrumb_blog';
import Blogs from 'component/Blog';
import { memo } from 'react';

const Blog = () =>{
    return (
        <>
            <BreadCrumb_blog/>
            <Blogs/>
        </>
    );
};

export default memo(Blog);