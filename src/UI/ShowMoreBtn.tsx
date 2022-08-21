import './ShowMoreBtn.scss'

function ShowMoreBtn(props: any) {

  return (
    <>
        <button className="btnMore btn--stripe" {...props}>{props.children} </button>
    </>
  )
}

export default ShowMoreBtn
