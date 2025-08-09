'use client'

import { useEffect } from 'react';

const MouseHalo: React.FC = () => {
  useEffect(() => {
    const halo = document.getElementById('cursor-halo');
    const cards = document.querySelectorAll<HTMLElement>('.mouseHalo');

    if (!halo) return;

    const moveHalo = (e: MouseEvent) => {
      halo.style.transform = `translate3d(${e.clientX - 48}px, ${e.clientY - 48}px, 0)`;
    };

    const showHalo = () => {
      halo.classList.remove('hidden');
    };

    const hideHalo = () => {
      halo.classList.add('hidden');
    };

    cards.forEach((card) => {
      card.addEventListener('mouseenter', showHalo);
      card.addEventListener('mousemove', moveHalo);
      card.addEventListener('mouseleave', hideHalo);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', showHalo);
        card.removeEventListener('mousemove', moveHalo);
        card.removeEventListener('mouseleave', hideHalo);
      });
    };
  }, []);

  return null;
};

export default MouseHalo;