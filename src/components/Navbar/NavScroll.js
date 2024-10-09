import React, { useEffect } from 'react';

const NavScroll = () => {
  const nav = document.querySelector('nav');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }, []);

  return null;
};

export default NavScroll;