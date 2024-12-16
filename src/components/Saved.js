import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveArticle } from '../redux/savedArticlesSlice';

const Saved = () => {
  const savedArticles = useSelector((state) => state.savedArticles); // Ambil artikel yang disimpan dari Redux
  const dispatch = useDispatch();

  const handleUnsave = (articleId) => {
    dispatch(unsaveArticle(articleId)); // Hapus artikel dari daftar saved
  };

  return (
    <div className="container my-4">
      {savedArticles.length === 0 ? (
        <p>No articles saved.</p>
      ) : (
        <div className="row">
          {savedArticles.map((article) => {
            const {  headline: {main},byline: {original},lead_paragraph,news_desk,section_name,web_url,_id } = article;

            return (
              <div className="col-md-4 mb-4" key={_id}>
                <div className="card h-100">

                  <div className="card-body">
                  <h6 className="card-title fs-2 fw-bold">{main}</h6>
                      <p className="card-text">{lead_paragraph}</p>
                      <ul className="list-unstyled">
                        <li><strong>Author:</strong> {original}</li>
                        <li><strong>Desk:</strong> {news_desk}</li>
                        <li><strong>Section:</strong> {section_name}</li>
                      </ul>

                  </div>

                  <div className="card-footer d-flex justify-content-start gap-2">
                    <a
                      href={web_url}
                      className="btn btn-primary btn-sm me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      News Page
                    </a>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleUnsave(_id)} // Panggil fungsi handleUnsave
                    >
                      Unsave
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Saved;
