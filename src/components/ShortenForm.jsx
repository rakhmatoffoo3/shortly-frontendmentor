import { useState } from 'react';
import './styles/ShortenForm.css';

const ShortenForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      setError('Please add a link');
      return;
    }

    // Mock API response (shrtcode API o'rniga)
    const newLink = {
      original: url,
      shortened: `https://rel.ink/${Math.random().toString(36).substr(2, 6)}`
    };
    
    onShorten(newLink);
    setUrl('');
    setError('');
  };

  return (
    <div className="shorten-form-container">
      <form onSubmit={handleSubmit}>
        <div className={`input-group ${error ? 'error' : ''}`}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here..."
          />
          {error && <p className="error-text">{error}</p>}
        </div>
        <button type="submit" className="primary-button">Shorten It!</button>
      </form>
    </div>
  );
};

export default ShortenForm;