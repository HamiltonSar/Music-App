import React from 'react';
import { useReducer , createContext  } from 'react';
import MusicReproductorCore from '../../components/musicreproductor/musicreproductorcore/components/musicreproductorcore';


export const ReproductorStateContext = createContext();


const component = () => <MusicReproductorCore /> 

const   initialState = {
    panelState : true,
    componentReproductor : component
}

const TYPES = {
    SHOW_PANEL_COMPONENT : "SHOW_PANEL_COMPONENT",
    HIDE_PANEL_COMPONENT : "HIDE_PANEL_COMPONENT"
}


function Reducer (state , action) {
    
    switch (action.type) {
        
        case TYPES.SHOW_PANEL_COMPONENT:
            return state;


        case TYPES.HIDE_PANEL_COMPONENT:
            return {
                ...state,
                panelState : false,
                componentReproductor : null,
            }

        default:
            return state;
    }
}





function ExitPanelContext  (props)  {

    const [state, dispatch] = useReducer( Reducer , initialState);

    const ShowPanel = () => {
        dispatch( {
            type : TYPES.SHOW_PANEL_COMPONENT
        } )
    }
    
    const HidePanel = () => {
        dispatch ( {
            type : TYPES.HIDE_PANEL_COMPONENT
        } )
    }
    
    
    
    

  return (
    <ReproductorStateContext.Provider value= { {
        panelState : state.panelState,
        component : state.componentReproductor,
        ShowPanel,
        HidePanel}}>

        {props.children}
        
    </ReproductorStateContext.Provider>
  )
}



export default ExitPanelContext;

