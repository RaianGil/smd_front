import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

 /**
 * get the gamestate from the server
 * @returns {Promise<{data: any}>}
 */
async function getGamestate() {
    const gameStates = await fetch('http://localhost:3000/game-state').then(response => response.json());
    return {
        data: gameStates,
    }
}


export function useCheckIfChanged(){ // not an async function
    const clientGameState = useSelector(state => state.gameState);
    const clientGameStateRef = useRef(clientGameState); 
    // Using a ref since we can't add clientGameState as a dependency to useEffect and it is bounded by closure

    useEffect(() => {
        clientGameStateRef.current = clientGameState;
    }, [clientGameState]);

    useEffect(() => {
          setInterval(async() => {
             const serverGameState = await getGamestate();
             // value inside here for clientGameState will refer to the original state only and hence we are using a ref which we update in another useEffect
             if(serverGameState.data !== clientGameStateRef.current){
                  console.log(serverGameState)
                 //UpdateGameState(serverGameState)

             }else {
                 console.log("still the same")
             }
          }, 5000)
    }, []);

}