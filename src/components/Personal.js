import PrinterLink from "./PrinterLink"

const projects = [
    {
        name: 'Rod of Fishing',
        link: 'https://github.com/rogandley/RodOfFishing',
        description: 'Twitter bot for fans of the game "Hades" which combines an image of one of its fish combined with an associated voice line.',
        technologies: ['Python', 'Twitter API']
    },
    {
        name: 'GPS to KML',
		link: '',
        description: 'Python program that takes in raw data from a GPS and transforms it into a Google Earth readable KML file, plotting points at which the car goes uphill, downhill, stops, or is parked during an errand.',
        technologies: ['Python', 'Pynmea', 'Pandas', 'Google Earth']
    },
	{
        name: 'Jigsaw AI',
		link: '',
        description: 'This program uses computer vision techniques learned in class in order to take in images of a number of jigsaw pieces. It detects edges and curves along with simple shapes to piece all of the given images into a larger image based on the place they should be.',
        technologies: ['MATLAB', 'Image Processing', 'Data Mining']
    },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const projectComponents = projects.map((project, i) => {
        return <div key={i} className={'personal--project'}>
            <div className={'personal--repo-technologies'}>
                <h2 className={'personal--name'}>{project.name}</h2>
                <div className={'personal--links'}>
                    <PrinterLink className={'personal--link'} url={project.link} text={'GitHub'} prependIcon={'github'}/>
                    {project.demoLink ? <PrinterLink className={'personal--link'} url={project.demoLink} text={'Demo'} prependIcon={'links'}/> : undefined}
                </div>
            </div>
            <div className={'personal--technologies'}>{project.technologies.join(' • ')}</div>
            <p className={'personal--description'}>{project.description}</p>
        </div>
    })
    return <div className={'personal'}>
        <h1 className={'personal--heading heading--body'}>{'Personal Projects'}</h1>
        {projectComponents}
    </div>
}