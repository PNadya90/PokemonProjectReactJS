import './LoginBtn.scss'

export default function LoginBtn(props:any) {
  return (
    <button className='button btn--stripe' {...props}>{props.children}</button>
  )
}
