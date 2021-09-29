import Icon from "./Icon"
import PrinterLink from "./PrinterLink"

const about = [
    'I am a Software Developer dedicated to learning new technologies and working on team projects.',
    'My goal is to integrate bleeding edge developments in tech and develop solutions to unique problems.',
    'I have experience working in multidisciplinary teams as well as working independently.',
	'With nearly a decade of coding experience under my belt, I am a strong addition to any team.'
].join(' ')

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className={'about'}>
        <div className={'about--contact-heading'}>
            <h1 className={'about--heading'}>{'About Me'}</h1>
            <div className={'about--contact'}>
                <PrinterLink className={'about--contact-item'} url={'https://www.github.com/rogandley'} text={'GitHub Repositories'} appendIcon={'github'}/>
                <PrinterLink className={'about--contact-item'} url={'https://www.linkedin.com/in/rogandley/'} text={'LinkedIn Profile'} appendIcon={'linkedin'}/>
                <PrinterLink className={'about--contact-item'} url={'mailto:rogandley@gmail.com'} appendIcon={'mail-send'}/>
                <div className={'about--contact-item'}><span>{'1-814-636-9787'}</span><Icon icon={'phone'}/></div>
            </div>
        </div>
        <p className={'about--description'}>{about}</p>
    </div>
)