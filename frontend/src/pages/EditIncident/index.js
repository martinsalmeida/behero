import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewIncident({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const id = match.params.id;

  useEffect(() => {
    api.get(`incidents/${id}`).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setValue(response.data.value);
    });
  }, [id]);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const ongId = localStorage.getItem('ongId');
    const data = { title, description, value };

    try {
      await api.put(`incidents/${id}`, data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao tentar atualizar, tente novamente');
    }
  }

  return (
    <div className='edit-incident-container'>
      <div className='content'>
        <h1>Editar Caso</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder='Título do Caso'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descrição'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder='Valor em reais'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type='submit' className='button'>
            Salvar
          </button>
        </form>
        <Link className='back-link' to='/profile'>
          <FiArrowLeft size={16} color='#e02041' />
          Voltar para home
        </Link>
      </div>
    </div>
  );
}
