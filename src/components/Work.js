import Icon from "./Icon"
import PrinterLink from "./PrinterLink"

const jobs = [
    {
        company: 'LenelS2 - Carrier',
        location: 'Rochester, NY',
        title: 'QA Automation Developer',
        contact: 'Paul Wisotzke',
        contactTitle: 'Test and Validation Manager',
        contactEmail: 'paul.wisotzke@carrier.com',
        items: [
            'I worked on developing an in-house natural language accessible QA automation tools built from the ground up with Unix scripts and Java with a team through GitHub pipelines.',
            'I participated in international daily standups as part of the Agile delivery process. I also engaged in weekly reviews with the UX design team.',
            'I tested assorted hardware for problems related to new code including cameras, card scanners, microphones, and servers.',
        ]
    },
    {
        company: 'Szymanski Consulting Inc.',
        location: 'Erie, PA',
        title: 'Software Developer',
        contact: 'David & Cathy Szymanski',
        contactTitle: 'CEO and Lead Developer',
        contactEmail: 'cathy@szy.com',
        items: [
            'I was a developer on a Windows application that manages and maintains a database of technical documents using SQL and Visual Basic.',
            'I worked with other employees in visiting customers of the consulting services of the company and found solutions to various technical problems.',
        ]
    },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const jobComponents = jobs.map((job, i) => {
        const list = job.items.map((item, j) => {
            return <p key={j}>{item}</p>
        })
        return <div className={'work--job'}>
            <h2 className={'work--job-company'}>{job.company + ' - ' + job.location}</h2>
            <div className={'work--job-title'}>{job.title}</div>
            <div className={'work--contact'}>
                <Icon icon={'contacts-book'}/>
                <div className={'work--contact-info'}>
                    <div className={'work--contact-name'}>{job.contact}</div>
                    <PrinterLink className={'work--contact-email'} url={'mailto:' + job.contactEmail}/>
                </div>
            </div>
            {list}
        </div>
    })
    return <div className={'work'}>
        <h1 className={'work--heading heading--body'}>{'Work Experience'}</h1>
        {jobComponents}
    </div>
}