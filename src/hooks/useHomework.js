import React, { useRef, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_ANSWERS } from '../graphql/query';

export const useHomework = (homeworkId) => {
  const [homeworks, setHomeworks] = useState();
  const paginaRef = useRef(1);
  const [runQuery, { data }] = useLazyQuery(GET_ANSWERS);

  useEffect(() => {
    loadHomeworks();
  }, [data, paginaRef]);

  const loadHomeworks = async () => {
    runQuery({
      variables: {
        page: paginaRef.current,
        homeworkId,
      },
    });

    if (data) {
      if (data.getAnswers.length > 0) {
        setHomeworks(data.getAnswers);
      } else {
        paginaRef.current--;
      }
    }
  };

  const nextPage = () => {
    paginaRef.current++;
    loadHomeworks();
  };

  const previousPage = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      loadHomeworks();
    }
  };

  return {
    homeworks,
    paginaAnterior: previousPage,
    paginaSiguiente: nextPage,
  };
};
