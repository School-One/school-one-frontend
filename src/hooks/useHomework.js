import React, { useRef, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_ANSWERS } from '../graphql/query';

export const useHomework = () => {
    
    const [homeworks, setHomeworks] = useState();

    const paginaRef = useRef(1);

    const [ runQuery, { data } ] = useLazyQuery(GET_ANSWERS);

    useEffect(() => {
        
        cargarTareas();
        // runQuery({
        //     variables: {
        //         page: paginaRef.current
        //     }
        // });

        // if(data){
        //     console.log(data.getAnswers);
        //     setHomeworks(data.getAnswers)
        // }

    }, [data, paginaRef]);

    const cargarTareas = async() => {

        runQuery({
             variables: {
                 page: paginaRef.current
             }
         });

         if(data) {

            if(data.getAnswers.length > 0) {

                setHomeworks(data.getAnswers);
                
    
             }else{
                paginaRef.current --;
             }

         }

    }

    const paginaSiguiente = () =>{
        paginaRef.current ++;
        cargarTareas();
    }

    const paginaAnterior = () =>{

        if(paginaRef.current > 1){

            paginaRef.current --;
            cargarTareas();
        }

    }

    return {
        homeworks,
        paginaAnterior,
        paginaSiguiente
    }
}
