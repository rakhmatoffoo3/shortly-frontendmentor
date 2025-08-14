import './styles/LinkHistory.css';

const LinkHistory = ({ links }) => {
  const handleCopy = (text, buttonId) => {
    navigator.clipboard.writeText(text);
    const button = document.getElementById(buttonId);
    button.textContent = 'Copied!';
    button.style.backgroundColor = 'hsl(257, 27%, 26%)';
    setTimeout(() => {
      button.textContent = 'Copy';
      button.style.backgroundColor = 'hsl(180, 66%, 49%)';
    }, 2000);
  };

  return (
    <div className="link-history">
      {links.map((link, index) => (
        <div key={index} className="link-card">
          <p className="original-url">{link.original}</p>
          <div className="divider"></div>
          <div className="shortened-section">
            <p className="shortened-url">{link.shortened}</p>
            <button
              id={`copy-btn-${index}`}
              onClick={() => handleCopy(link.shortened, `copy-btn-${index}`)}
              className="copy-button"
            >
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkHistory;