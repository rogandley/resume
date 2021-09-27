import PrinterLink from "./PrinterLink"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className={'footer'}>
        <span>{'Resume designed and built using React'}</span>
        <PrinterLink className={'footer--link'} url={'https://rogandley.github.io/resume/'} text={'View in browser'} prependIcon={'links'}/>
        <PrinterLink className={'footer--link'} url={'https://www.github.com/rogandley/resume'} text={'Visit GitHub repository'} prependIcon={'github'}/>
    </div>
)