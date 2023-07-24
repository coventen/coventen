import React from 'react';

const DocumentCard = () => {
    return (
        <div className="relative p-4 w-full bg-white rounded-lg min-h-[250px] overflow-hidden hover:shadow" >
            <div>
                <div className="relative block h-full">
                    <div className="h-32 bg-gray-100 rounded-lg min-h-[170px]"></div>
                </div>
            </div>

            <h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
                Document Name
            </h2>
        </div>
    );
};

export default DocumentCard;