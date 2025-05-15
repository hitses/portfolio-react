import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
    </>
  );
};

export default About;
