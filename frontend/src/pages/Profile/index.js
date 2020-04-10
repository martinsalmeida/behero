import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      alert('Tem certeza que deseja deletar esse caso?');
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  function handleEditIncident(id) {
    history.push(`incidents/edit/${id}`);
  }

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the hero' />
        <span>Bem Vinda, {ongName}</span>

        <Link className='button' to='/incidents/new'>
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type='button'>
          <FiPower size={18} color='#e02141' />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {incident.value !== 0
                ? Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(incident.value)
                : 'GRATUITO'}
            </p>

            <div className='profile-button'>
              <button
                onClick={() => handleDeleteIncident(incident.id)}
                type='button'
              >
                <FiTrash2 size={20} color='#a8a8b3' />
              </button>

              <button
                onClick={() => handleEditIncident(incident.id)}
                type='button'
              >
                <FiEdit size={20} color='#a8a8b3' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
