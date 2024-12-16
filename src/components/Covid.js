import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';
import { saveArticle, unsaveArticle } from '../redux/savedArticlesSlice';

const Covid = () => {
  const { articles, search, isLoading } = useSelector((state) => state.articles);
  const savedArticles = useSelector((state) => state.savedArticles);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchArticles(search)); // Panggil fetchArticles dengan kata kunci pencarian
    }, [search, dispatch]);

  return (
    <div className="container my-4">
      {isLoading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="row">
          {articles.map((article) => {
            const isSaved = savedArticles.some((saved) => saved._id === article._id);
            const { headline: {main},byline: {original},lead_paragraph,news_desk,section_name,web_url,_id } = article;

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
                    {/* Tautan ke artikel */}
                    <a href={web_url}
                      className="btn btn-primary btn-sm me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      News Page
                    </a>
                    {/* Tombol Save/Unsave */}
                    <button
                      className={`btn btn-${isSaved ? 'danger' : 'secondary'} btn-sm`}
                      onClick={() => {
                        if (isSaved) {
                          dispatch(unsaveArticle(article._id)); // Hapus artikel jika sudah disimpan
                        } else {
                          dispatch(saveArticle(article)); // Simpan artikel jika belum disimpan
                        }
                      }}
                    >
                      {isSaved ? 'Unsave' : 'Save'}
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

export default Covid;
