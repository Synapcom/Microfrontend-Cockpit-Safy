import React from 'react';
import PathStyle from './style';
import { breadcrumbInterface } from './interface';
import { Link } from 'react-router-dom';

const Breadcrumb: React.FC<breadcrumbInterface> = ({ pathName, pathURL }) => {

    const renderBreadcrumb = () => {
        const paths = pathName.map((name, index) => (
            <div key={`${name}-${index}`}>
                <Link className='link' to={pathURL[index]}>
                    {name}
                </Link>
                {(index + 1) === pathName.length ? <></> : <span> {'>'} </span>}
            </div>
        ));

        return (
            <PathStyle>
                {paths}
            </PathStyle>
        );
    };

    return renderBreadcrumb();
};

export default Breadcrumb;
