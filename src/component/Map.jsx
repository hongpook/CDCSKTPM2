import { memo } from 'react';

const Map = () =>{
    return (
        <>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3652029854666!2d106.69204877480615!3d10.859802889294066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec48f5a17b7d5741!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ3V54buFbiBU4bqldCBUaMOgbmggLSBDxqEgc-G7nyBxdeG6rW4gMTI!5e0!3m2!1svi!2s!4v1710087732473!5m2!1svi!2s"  ></iframe>
            </div>
        </>
    );
};

export default memo(Map);