import React from 'react'


const SectionTitle = (props) => {
    return (
        <>
            <div style={ { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } } className="container px-12"><p className="bg-secondary  text-2xl">{props?.title}</p><div className='section-title'></div></div>
        </>
    )
}

export default SectionTitle;