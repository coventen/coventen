import React from 'react';

function MessageContent({ content }: any) {
    // Render the Quill content as HTML
    return (
        <div className='text-justify' dangerouslySetInnerHTML={{ __html: JSON.parse(content) }} />
    );
}

export default MessageContent;
