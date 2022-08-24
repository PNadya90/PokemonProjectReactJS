import React, {createContext, useState} from 'react'

interface ImodelContext {
    show:boolean,
    open: ()=> void,
    close: ()=> void
}

export const ModalContext=createContext<ImodelContext>({
    show:false,
    open: ()=>{},
    close: ()=>{}
})

export const ModalState = ({children}:{children:React.ReactNode})=> {
  const [show, setShow] = useState(false);
  const open =  ()=>setShow(true);
  const close =  ()=>setShow(false);
  return (
    <ModalContext.Provider value={{show,open, close}}>
      {children}
    </ModalContext.Provider> 
  )
}

