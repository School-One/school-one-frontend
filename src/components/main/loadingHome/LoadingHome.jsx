import React, { useEffect } from 'react';
import $ from 'jquery';

export default function LoadingHome() {
  useEffect(() => {
    $(function () {
      $('.loader__wrapper').fadeOut('slow');
    });
  }, []);

  return (
    <>
      <div className="loader__wrapper">
        <span className="loader">
          <span className="loader__inner" />
        </span>
      </div>
    </>
  );
}
