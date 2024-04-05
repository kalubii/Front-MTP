import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const Formulaire = () => {
  const initialFormData = {
    faritany: '',
    region: '',
    commune: '',
    axe: '',
    section: '',
    titre: '',
    programmelf: '',
    conventionlf: '',
    conventionliblf: '',
    activite: '',
    cout: '',
    naturesurface: '',
    longueur: '',
    pk_debut: '',
    pk_fin: '',
    loc_debut: '',
    loc_Fin: '',
    annee: '',
    avancement: '',
    observation: ''
  };

  const [formMessage, setFormMessage] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [isError, setIsError] = useState(false); 
  const [formDataObject, setFormDataObject] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFormDataObject = {};
    formData.forEach((value, key) => {
      newFormDataObject[key] = value;
    });

    // Vérifier si tous les champs sont remplis
    const requiredFields = ['faritany', 'region', 'commune', 'axe', 'section', 'titre', 'programmelf', 'conventionlf', 'conventionliblf', 'activite', 'cout', 'naturesurface', 'longueur', 'pk_debut', 'pk_fin', 'loc_debut', 'loc_Fin', 'annee', 'avancement', 'observation'];
    const isAnyFieldEmpty = requiredFields.some(field => !newFormDataObject[field]);

    if (isAnyFieldEmpty) {
      setFormMessage('Veuillez remplir tous les champs.');
      setIsError(true);
      setAlertOpen(true);
      return; 
    }

    try {
      const response = await fetch('http://localhost:8081/projet2024', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormDataObject),
      });
      if (response.ok) {
        setFormMessage('Élément inséré avec succès');
        setIsError(false);
        // Réinitialiser les champs du formulaire
        setFormDataObject(initialFormData);
      } else {
        setFormMessage('Erreur lors de l\'enregistrement');
        setIsError(true); 
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      setFormMessage('Erreur lors de la requête');
      setIsError(true); 
    }
    setAlertOpen(true); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataObject({ ...formDataObject, [name]: value });
  };

  return (
    <div className="container mt-4 ">
      <form onSubmit={handleSubmit} method="POST" className="row justify-content-center">
        <Box sx={{ width: 500, maxWidth:'100%', marginBottom: 2 }}>
          <TextField fullWidth label="Faritany" id="faritany" name="faritany" value={formDataObject.faritany} onChange={handleChange} />
        </Box>
        <Box sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Région" id="region" name="region" value={formDataObject.region} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Commune" id="commune" name="commune" value={formDataObject.commune} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Axe" id="axe" name="axe" value={formDataObject.axe} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Séction" id="section" name="section" value={formDataObject.section} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Titre" id="titre" name="titre" value={formDataObject.titre} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Programme LF" id="programmelf" name="programmelf" value={formDataObject.programmelf} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Convention LF" id="conventionlf" name="conventionlf" value={formDataObject.conventionlf} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Convention Libéllée LF" id="conventionliblf" name="conventionliblf" value={formDataObject.conventionliblf} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Activité" id="activite" name="activite" value={formDataObject.activite} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="Côuts" id="cout" name="cout" value={formDataObject.cout} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="Nature Surface" id="naturesurface" name="naturesurface" value={formDataObject.naturesurface} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="Longueur" id="longueur" name="longueur" value={formDataObject.longueur} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="PK Début" id="pk_debut" name="pk_debut" value={formDataObject.pk_debut} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="PK Fin" id="pk_fin" name="pk_fin" value={formDataObject.pk_fin} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="Locatité Début" id="loc_debut" name="loc_debut" value={formDataObject.loc_debut} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
           <TextField fullWidth label="Locatité Fin" id="loc_Fin" name="loc_Fin" value={formDataObject.loc_Fin} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Année" id="annee" name="annee" value={formDataObject.annee} onChange={handleChange} />
          </Box>
          <Box sx={{width: 500,maxWidth: '100%',marginBottom: 2,}}>
            <TextField fullWidth label="Avancement" id="avancement" name="avancement" value={formDataObject.avancement} onChange={handleChange} />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              marginBottom: 2, 
            }}
            >
            <TextField fullWidth label="Observation" id="observation" name="observation" value={formDataObject.observation} onChange={handleChange} />
          </Box>
        {/* Afficher l'alerte en cas de succès ou d'erreur */}
        {alertOpen && (
          <Alert severity={isError ? 'error' : 'success'} onClose={() => setAlertOpen(false)} style={{width:'80%'}}>
            <AlertTitle>{isError ? 'Erreur' : 'Succès'}</AlertTitle>
            {formMessage}
          </Alert>
        )}
        <Button variant="contained" color="success" type="submit" style={{ width: '300px', marginTop: '10px', marginBottom:'20px' }}>
          Valider
        </Button>
      </form>
    </div>
  );
};
