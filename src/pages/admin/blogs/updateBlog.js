// src/blogs/updateBlog.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit, SimpleForm, TextInput, useNotify } from 'react-admin';

const PostEdit = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const notify = useNotify();

    const onSuccess = () => {
        notify('Blog updated successfully');
        navigate('/blogs');
    };

    if (isNaN(id)) {
        notify('Invalid blog ID');
        navigate('/blogs');
        return null;
    }

    return (
        <Edit {...props} id={id} onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput multiline source="content" />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;
