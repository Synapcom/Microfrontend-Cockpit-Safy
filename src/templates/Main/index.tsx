import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Title from '../../components/common/Title';
import Capsule from './style';
import { IMain } from './interface';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Main: React.FC<IMain> = ({
    breadcrumbTextPaths,
    breadcrumbURLPaths,
    titleText,
    controls,
    previousURL,
    children
}) => {
    const navigate = useNavigate();

    return (
        <Capsule>
            <section className='main-wrapper'>
                <header>
                    <Breadcrumb
                        pathName={breadcrumbTextPaths}
                        pathURL={breadcrumbURLPaths} />
                    <div className='row'>
                        <span className='row'>
                            {previousURL ?
                                <FaArrowLeft className='icon' onClick={() => navigate(previousURL)} /> :
                                <React.Fragment></React.Fragment>
                            }
                            <Title>{titleText}</Title>
                        </span>
                        {controls ? controls : <React.Fragment></React.Fragment>}
                    </div>
                </header>
                <span className='content'>
                    {children}
                </span>
            </section>
        </Capsule>
    );
};

export default Main;
