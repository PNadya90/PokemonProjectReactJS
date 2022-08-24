import './LoginBtn.scss'

export default function LoginBtn(props:any) {
  return (
    <button className='btn btn--stripe' {...props}>{props.children}</button>
  )
}
