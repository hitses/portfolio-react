import React from 'react';
import { useTranslation } from 'react-i18next';


const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('projects.title')}</h2>
      <p>{t('projects.description')}</p>
    </>
  );
};

export default Projects;
