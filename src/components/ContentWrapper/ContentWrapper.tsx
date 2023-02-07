import React, {FC} from 'react';
import './style.css'
interface IContentWrapper {
    children: React.ReactNode
}

const ContentWrapper: FC<IContentWrapper> = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    );
};

export default ContentWrapper;