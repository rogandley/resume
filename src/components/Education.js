const education = {
    school: 'Rochester Institute of Technology',
    location: 'Rochester, NY',
    degree: 'BS Computer Science',
    years: 'August 2016 - December 2021'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className={'education'}>
        <h1 className={'education--heading heading--body'}>{'Education'}</h1>
        <div className={'education--degree'}>{education.degree}</div>
        <div className={'education--school'}>{education.school}</div>
        <div className={'education--years'}>{education.years}</div>
    </div>
}